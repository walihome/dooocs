# 开发问题记录

## Signing for "XXX" requires a development team
这个报错需要开发账号，也可以通过设置来跳过验证
CODE_SIGNING_ALLOWED=NO
![image](https://i.imgur.com/OdHPi53.png)
![image](https://i.imgur.com/ADxnWAP.png)


## 让APP支持ZIP 文件分享功能
需要在plist 添加一下代码
```xml
<key>CFBundleDocumentTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeName</key>
            <string>ZIP Archive</string>
            <key>LSItemContentTypes</key>
            <array>
                <string>com.pkware.zip-archive</string>
            </array>
            <key>LSHandlerRank</key>
            <string>Default</string>
        </dict>
    </array>
	<key>UIFileSharingEnabled</key>
	<true/>
```
