import requests
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
from datetime import datetime

class SitemapHealthChecker:
    def __init__(self, sitemap_url, max_workers=10, timeout=10):
        """
        初始化网站健康检查器
        
        Args:
            sitemap_url: sitemap的URL地址
            max_workers: 并发请求数量
            timeout: 请求超时时间（秒）
        """
        self.sitemap_url = sitemap_url
        self.max_workers = max_workers
        self.timeout = timeout
        self.results = defaultdict(list)
        self.urls = []
        
    def fetch_sitemap(self):
        """获取并解析sitemap.xml"""
        print(f"正在获取sitemap: {self.sitemap_url}")
        try:
            response = requests.get(self.sitemap_url, timeout=self.timeout)
            response.raise_for_status()
            
            # 解析XML
            root = ET.fromstring(response.content)
            
            # 处理XML命名空间
            namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
            
            # 提取所有URL
            for url in root.findall('.//ns:loc', namespaces):
                self.urls.append(url.text)
            
            print(f"成功解析sitemap，共找到 {len(self.urls)} 个URL")
            return True
            
        except Exception as e:
            print(f"获取sitemap失败: {str(e)}")
            return False
    
    def check_url(self, url):
        """检查单个URL的状态"""
        try:
            response = requests.get(
                url, 
                timeout=self.timeout,
                allow_redirects=False,  # 不自动跟随重定向
                headers={'User-Agent': 'Mozilla/5.0 (SEO Health Checker)'}
            )
            
            return {
                'url': url,
                'status_code': response.status_code,
                'redirect_url': response.headers.get('Location', ''),
                'response_time': response.elapsed.total_seconds()
            }
            
        except requests.exceptions.Timeout:
            return {
                'url': url,
                'status_code': 'TIMEOUT',
                'redirect_url': '',
                'response_time': self.timeout
            }
        except requests.exceptions.ConnectionError:
            return {
                'url': url,
                'status_code': 'CONNECTION_ERROR',
                'redirect_url': '',
                'response_time': 0
            }
        except Exception as e:
            return {
                'url': url,
                'status_code': f'ERROR: {str(e)}',
                'redirect_url': '',
                'response_time': 0
            }
    
    def classify_status(self, status_code):
        """分类状态码"""
        if isinstance(status_code, int):
            if 200 <= status_code < 300:
                return '2xx_success'
            elif 300 <= status_code < 400:
                return '3xx_redirect'
            elif 400 <= status_code < 500:
                return '4xx_client_error'
            elif 500 <= status_code < 600:
                return '5xx_server_error'
        return 'other_error'
    
    def check_all_urls(self):
        """并发检查所有URL"""
        print(f"\n开始检查URL（并发数: {self.max_workers}）...")
        start_time = time.time()
        
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            future_to_url = {executor.submit(self.check_url, url): url 
                           for url in self.urls}
            
            completed = 0
            total = len(self.urls)
            
            for future in as_completed(future_to_url):
                result = future.result()
                category = self.classify_status(result['status_code'])
                self.results[category].append(result)
                
                completed += 1
                if completed % 10 == 0 or completed == total:
                    print(f"进度: {completed}/{total} ({completed/total*100:.1f}%)")
        
        elapsed_time = time.time() - start_time
        print(f"\n检查完成，耗时: {elapsed_time:.2f}秒")
    
    def generate_report(self):
        """生成健康报告"""
        total_urls = len(self.urls)
        
        print("\n" + "="*60)
        print(f"网站健康检查报告 - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("="*60)
        print(f"\nSitemap URL: {self.sitemap_url}")
        print(f"总URL数量: {total_urls}")
        print("\n" + "-"*60)
        
        # 统计各类状态
        print("\n状态码分布:")
        print("-"*60)
        
        categories = {
            '2xx_success': '✓ 正常访问 (2xx)',
            '3xx_redirect': '↻ 重定向 (3xx)',
            '4xx_client_error': '✗ 客户端错误 (4xx)',
            '5xx_server_error': '⚠ 服务器错误 (5xx)',
            'other_error': '⊗ 其他错误'
        }
        
        for category, label in categories.items():
            count = len(self.results[category])
            percentage = (count / total_urls * 100) if total_urls > 0 else 0
            print(f"{label:30} {count:5}个 ({percentage:5.1f}%)")
        
        # 健康评分
        success_rate = (len(self.results['2xx_success']) / total_urls * 100) if total_urls > 0 else 0
        print("\n" + "-"*60)
        print(f"健康评分: {success_rate:.2f}%")
        
        if success_rate >= 95:
            health_status = "优秀 ✓"
        elif success_rate >= 85:
            health_status = "良好"
        elif success_rate >= 70:
            health_status = "一般"
        else:
            health_status = "需要优化 ⚠"
        
        print(f"健康状态: {health_status}")
        
        # 详细问题列表
        self._print_detailed_issues()
        
        # SEO优化建议
        self._print_seo_recommendations()
    
    def _print_detailed_issues(self):
        """打印详细问题列表"""
        print("\n" + "="*100)
        print("详细问题列表")
        print("="*100)
        
        # 3xx重定向
        if self.results['3xx_redirect']:
            print(f"\n重定向URL ({len(self.results['3xx_redirect'])}个):")
            print("-"*100)
            for item in self.results['3xx_redirect'][:10]:  # 只显示前10个
                status = str(item['status_code']).ljust(6)
                time_str = f"{item['response_time']:.3f}s".ljust(8)
                print(f"  [{status}] [{time_str}] {item['url']}")
                if item['redirect_url']:
                    print(f"  {' '*24}→ {item['redirect_url']}")
            if len(self.results['3xx_redirect']) > 10:
                print(f"  ... 还有 {len(self.results['3xx_redirect'])-10} 个")
        
        # 4xx错误
        if self.results['4xx_client_error']:
            print(f"\n客户端错误 ({len(self.results['4xx_client_error'])}个):")
            print("-"*100)
            for item in self.results['4xx_client_error'][:10]:
                status = str(item['status_code']).ljust(6)
                time_str = f"{item['response_time']:.3f}s".ljust(8)
                print(f"  [{status}] [{time_str}] {item['url']}")
            if len(self.results['4xx_client_error']) > 10:
                print(f"  ... 还有 {len(self.results['4xx_client_error'])-10} 个")
        
        # 5xx错误
        if self.results['5xx_server_error']:
            print(f"\n服务器错误 ({len(self.results['5xx_server_error'])}个):")
            print("-"*100)
            for item in self.results['5xx_server_error'][:10]:
                status = str(item['status_code']).ljust(6)
                time_str = f"{item['response_time']:.3f}s".ljust(8)
                print(f"  [{status}] [{time_str}] {item['url']}")
            if len(self.results['5xx_server_error']) > 10:
                print(f"  ... 还有 {len(self.results['5xx_server_error'])-10} 个")
        
        # 其他错误
        if self.results['other_error']:
            print(f"\n其他错误 ({len(self.results['other_error'])}个):")
            print("-"*100)
            for item in self.results['other_error'][:10]:
                status = str(item['status_code']).ljust(6)
                time_str = f"{item['response_time']:.3f}s".ljust(8)
                print(f"  [{status}] [{time_str}] {item['url']}")
            if len(self.results['other_error']) > 10:
                print(f"  ... 还有 {len(self.results['other_error'])-10} 个")
    
    def _print_seo_recommendations(self):
        """打印SEO优化建议"""
        print("\n" + "="*60)
        print("SEO优化建议")
        print("="*60)
        
        recommendations = []
        
        # 4xx错误建议
        if self.results['4xx_client_error']:
            recommendations.append(
                f"⚠ 发现 {len(self.results['4xx_client_error'])} 个404/4xx错误:\n"
                "  - 删除sitemap中的失效链接\n"
                "  - 为重要页面设置301重定向\n"
                "  - 创建自定义404页面提升用户体验"
            )
        
        # 5xx错误建议
        if self.results['5xx_server_error']:
            recommendations.append(
                f"⚠ 发现 {len(self.results['5xx_server_error'])} 个服务器错误:\n"
                "  - 立即检查服务器配置和日志\n"
                "  - 修复应用程序错误\n"
                "  - 考虑增加服务器资源"
            )
        
        # 重定向建议
        if len(self.results['3xx_redirect']) > len(self.urls) * 0.1:
            recommendations.append(
                f"⚠ 重定向比例过高 ({len(self.results['3xx_redirect'])}个):\n"
                "  - 更新sitemap中的URL为最终目标URL\n"
                "  - 减少重定向链可提升页面加载速度\n"
                "  - 过多重定向会影响SEO权重传递"
            )
        
        # 超时建议
        timeout_count = sum(1 for item in self.results['other_error'] 
                          if item['status_code'] == 'TIMEOUT')
        if timeout_count > 0:
            recommendations.append(
                f"⚠ 发现 {timeout_count} 个超时请求:\n"
                "  - 优化页面加载速度\n"
                "  - 检查服务器响应时间\n"
                "  - 考虑使用CDN加速"
            )
        
        if recommendations:
            for i, rec in enumerate(recommendations, 1):
                print(f"\n{i}. {rec}")
        else:
            print("\n✓ 网站健康状况良好，未发现明显问题！")
        
        print("\n" + "="*60)
    
    def export_to_csv(self, filename='sitemap_health_report.csv'):
        """导出结果到CSV文件"""
        import csv
        
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['URL', '状态码', '分类', '重定向目标', '响应时间(秒)'])
            
            for category, items in self.results.items():
                for item in items:
                    writer.writerow([
                        item['url'],
                        item['status_code'],
                        category,
                        item['redirect_url'],
                        f"{item['response_time']:.3f}"
                    ])
        
        print(f"\n✓ 详细报告已导出到: {filename}")


def main():
    # 配置参数
    SITEMAP_URL = 'https://www.dooocs.com/sitemap.xml'
    MAX_WORKERS = 10  # 并发数，可根据需要调整
    TIMEOUT = 10  # 超时时间（秒）
    
    # 创建检查器实例
    checker = SitemapHealthChecker(
        sitemap_url=SITEMAP_URL,
        max_workers=MAX_WORKERS,
        timeout=TIMEOUT
    )
    
    # 执行检查流程
    if checker.fetch_sitemap():
        checker.check_all_urls()
        checker.generate_report()
        checker.export_to_csv()
    else:
        print("无法获取sitemap，请检查URL是否正确")


if __name__ == '__main__':
    main()
