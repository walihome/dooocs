// siteConfig.ts
export const java = [
    {
      text: 'Java学习手册',
      items: [
        { text: '快速开始', link: '/java/quick_start.html' },
        { text: '新手教程', collapsed: true, items: [
          { text: 'Java 基础操作', collapsed: true, items: [
            { text: 'hello_world', link: '/java/new/hello_world.html' },
            { text: 'Java JDK, JRE 和 JVM', link: '/java/new/jvm_jre_and_jdk.html' },
            { text: 'Java 变量', link: '/java/new/variables_and_literals.html' },
            { text: 'Java 基本数据类型', link: '/java/new/primitive_data_types.html' },
            { text: 'Java 基本操作类型', link: '/java/new/operators.html' },
            { text: 'Java 输入输出', link: '/java/new/input_and_output.html' },
            { text: 'Java 运算符', link: '/java/new/expressions_statements.html' },
            { text: 'Java 注释', link: '/java/new/comments.html' },
          ]},
          { text: 'Java 流程控制', collapsed: true, items: [
            { text: 'Java If语句', link: '/java/new/if_else_statement.html' },
            { text: 'Java switch语句', link: '/java/new/switch_statement_in.html' },
            { text: 'Java for循环', link: '/java/new/for_loop.html' },
            { text: 'Java for-each循环', link: '/java/new/enhanced_for_loop_statement.html' },
            { text: 'Java while循环', link: '/java/new/while_loop.html' },
            { text: 'Java break语句', link: '/java/new/break_statement.html' },
            { text: 'Java continue语句', link: '/java/new/continue_statement.html' },
          ]},
          { text: 'Java 数组', collapsed: true, items: [
            { text: 'Java 数组', link: '/java/new/arrays.html' },
            { text: 'Java 复制数组', link: '/java/new/copy_arrays.html' },
          ]},
          { text: 'Java 类和对象', collapsed: true, items: [
            { text: 'Java 类和对象', link: '/java/new/class_and_objects.html' },
            { text: 'Java 方法', link: '/java/new/methods.html' },
            { text: 'Java 构造器', link: '/java/new/constructors.html' },
            { text: 'Java 字符串', link: '/java/new/strings.html' },
            { text: 'Java 访问修饰符', link: '/java/new/access_modifiers.html' },
            { text: 'Java this关键字', link: '/java/new/this_keyword.html' },
            { text: 'Java final关键字', link: '/java/new/final_keyword.html' },
            { text: 'Java 递归', link: '/java/new/recursion.html' },
            { text: 'instanceof', link: '/java/new/instanceof.html' },
          ]},
          { text: 'Java 继承和多态', collapsed: true, items: [
            { text: 'Java 继承', link: '/java/new/inheritance.html' },
            { text: 'Java 方法覆盖', link: '/java/new/method_overriding.html' },
            { text: 'Java super关键字', link: '/java/new/super_keyword.html' },
            { text: 'Java 抽象类和方法', link: '/java/new/abstract_classes_and_methods.html' },
            { text: 'Java 接口', link: '/java/new/interfaces.html' },
            { text: 'Java 多态', link: '/java/new/polymorphism.html' },
            { text: 'Java 封装', link: '/java/new/encapsulation.html' },
          ]},
          { text: 'Java 面向对象', collapsed: true, items: [
            { text: 'Java 嵌套类和内部类', link: '/java/new/nested_and_inner_class.html' },
            { text: 'Java 静态类', link: '/java/new/static_class.html' },
            { text: 'Java 单例', link: '/java/new/singleton.html' },
            { text: 'Java 枚举', link: '/java/new/enum_class.html' },
            { text: 'Java 枚举字符串', link: '/java/new/enum_string.html' },
            { text: 'Java 枚举构造函数', link: '/java/new/enum_constructor.html' },
            { text: 'Java 反射', link: '/java/new/reflection.html' },
          ]},
          { text: 'Java 异常', collapsed: true, items: [
            { text: 'Java 异常', link: '/java/new/exceptions.html' },
            { text: 'Java 捕获异常', link: '/java/new/exception_handling.html' },
            { text: 'Java try catch', link: '/java/new/try_catch.html' },
            { text: 'Java throw和throws', link: '/java/new/throw_and_throws.html' },
            { text: 'Java 捕获多异常', link: '/java/new/catch_multiple_exceptions.html' },
            { text: 'try_with_resources', link: '/java/new/try_with_resources.html' },
            { text: 'Java 注解', link: '/java/new/annotations.html' },
            { text: 'Java 注解类型', link: '/java/new/annotation_types.html' },
            { text: 'Java 日志', link: '/java/new/logging.html' },
            { text: 'Java 断言', link: '/java/new/assertions.html' },
          ]},
          { text: 'Java List', collapsed: true, items: [
            { text: 'Java 集合接口', link: '/java/new/collection_interface.html' },
            { text: 'Java List', link: '/java/new/list_interface.html' },
            { text: 'Java Arraylist', link: '/java/new/arraylist.html' },
            { text: 'Java Linkedlist', link: '/java/new/linkedlist.html' },
            { text: 'Java Vector 向量', link: '/java/new/vector.html' },
            { text: 'Java Stack 堆栈类', link: '/java/new/stack.html' },
          ]},
          
          { text: 'Java Map', collapsed: true, items: [
            { text: 'Java Map接口', link: '/java/new/map_interface.html' },
            { text: 'Java HashMap', link: '/java/new/hashmap_class.html' },
            { text: 'Java Linkedhashmap', link: '/java/new/linkedhashmap_class.html' },
            { text: 'Java @eakhashmap', link: '/java/new/weakhashmap_class.html' },
            { text: 'Java EnumMap', link: '/java/new/enummap_class.html' },
            { text: 'sortedmap_interface', link: '/java/new/sortedmap_interface.html' },
            { text: 'navigablemap_interface', link: '/java/new/navigablemap_interface.html' },
            { text: 'treemap_class', link: '/java/new/treemap_class.html' },
            { text: 'concurrentmap_interface', link: '/java/new/concurrentmap_interface.html' },
          ]},
          { text: 'Java Set', collapsed: true, items: [
            { text: 'set_interface', link: '/java/new/set_interface.html' },
            { text: 'hashset_class', link: '/java/new/hashset_class.html' },
            { text: 'enumset_class', link: '/java/new/enumset_class.html' },
            { text: 'linkedhashset_class', link: '/java/new/linkedhashset_class.html' },
            { text: 'sortedset_interface', link: '/java/new/sortedset_interface.html' },
            { text: 'navigableset_interface', link: '/java/new/navigableset_interface.html' },
            { text: 'treeset_class', link: '/java/new/treeset_class.html' },
            { text: 'algorithms', link: '/java/new/algorithms.html' },
            { text: 'iterator', link: '/java/new/iterator.html' },
            { text: 'listiterator', link: '/java/new/listiterator.html' },
          ]},
          { text: 'Java 队列', collapsed: true, items: [
            { text: 'Java 队列接口', link: '/java/new/queue_interface.html' },
            { text: 'Java 优先队列', link: '/java/new/priorityqueue_class.html' },
            { text: 'Java deque 接口', link: '/java/new/deque_interface.html' },
            { text: 'Java Arraydeque', link: '/java/new/arraydeque.html' },
            { text: 'Java Blockingqueue', link: '/java/new/blockingqueue_interface.html' },
            { text: 'Java Arrayblockingqueue', link: '/java/new/arrayblockingqueue.html' },
            { text: 'Java Linkedblockingqueue', link: '/java/new/linkedblockingqueue.html' },
          ]},
          { text: 'Java I/O Stream', collapsed: true, items: [
            { text: 'io_streams', link: '/java/new/io_streams.html' },
            { text: 'inputstream', link: '/java/new/inputstream.html' },
            { text: 'outputstream', link: '/java/new/outputstream.html' },
            { text: 'fileinputstream', link: '/java/new/fileinputstream.html' },
            { text: 'fileoutputstream', link: '/java/new/fileoutputstream.html' },
            { text: 'bytearrayinputstream', link: '/java/new/bytearrayinputstream.html' },
            { text: 'bytearrayoutputstream', link: '/java/new/bytearrayoutputstream.html' },
            { text: 'objectinputstream', link: '/java/new/objectinputstream.html' },
            { text: 'objectoutputstream', link: '/java/new/objectoutputstream.html' },
            { text: 'bufferedinputstream', link: '/java/new/bufferedinputstream.html' },
            { text: 'bufferedoutputstream', link: '/java/new/bufferedoutputstream.html' },
            { text: 'printstream', link: '/java/new/printstream.html' },
          ]},

          { text: 'Java Reader和Writer', collapsed: true, items: [
            { text: 'reader', link: '/java/new/reader.html' },
            { text: 'writer', link: '/java/new/writer.html' },
            { text: 'outputstreamwriter', link: '/java/new/outputstreamwriter.html' },
            { text: 'inputstreamreader', link: '/java/new/inputstreamreader.html' },
            { text: 'filereader', link: '/java/new/filereader.html' },
            { text: 'filewriter', link: '/java/new/filewriter.html' },
            { text: 'bufferedreader', link: '/java/new/bufferedreader.html' },
            { text: 'bufferedwriter', link: '/java/new/bufferedwriter.html' },
            { text: 'stringreader', link: '/java/new/stringreader.html' },
            { text: 'stringwriter', link: '/java/new/stringwriter.html' },
            { text: 'printwriter', link: '/java/new/printwriter.html' },
          ]},
          { text: '附加主题', collapsed: true, items: [
            { text: 'scanner_class', link: '/java/new/scanner_class.html' },
            { text: 'type_casting', link: '/java/new/type_casting.html' },
            { text: 'autoboxing_and_unboxing', link: '/java/new/autoboxing_and_unboxing.html' },
            { text: 'generics', link: '/java/new/generics.html' },
            { text: 'file_class', link: '/java/new/file_class.html' },
            { text: 'wrapper_class', link: '/java/new/wrapper_class.html' },
            { text: 'command_line_arguments', link: '/java/new/command_line_arguments.html' },


            { text: 'multidimensional_array', link: '/java/new/multidimensional_array.html' },
            { text: 'anynomous_class', link: '/java/new/anynomous_class.html' },
            { text: 'method_overloading', link: '/java/new/method_overloading.html' },
          ]},
        ]},
        { text: '进阶教程', collapsed: true, items: [
          { text: '基础语法', link: '/java/basic/basic_grammer.html' },
          { text: '基本数据类型', link: '/java/basic/data_type.html' },
          { text: '基本运算', link: '/java/basic/operate.html' },
          { text: '集合', link: '/java/basic/collection.html' },
          { text: '控制流程', link: '/java/basic/control_flow.html' },
          { text: '方法|函数', link: '/java/basic/method.html' },
          { text: '枚举', link: '/java/basic/enum.html' },
          { text: '接口和类', link: '/java/basic/interface_and_class.html' },
          { text: '面向对象基础', link: '/java/basic/oop.html' },
          { text: '继承和多态', link: '/java/basic/inheritance_and_polymorphism.html' },
          { text: '泛型', link: '/java/basic/generic.html' },
          { text: '异常', link: '/java/basic/exception.html' },
          { text: '并发', link: '/java/basic/concurrency.html' },
          { text: '反射', link: '/java/basic/reflect.html' },
          { text: '注解', link: '/java/basic/annotation.html' },
          { text: 'SPI', link: '/java/basic/spi.html' },
          { text: '序列化', link: '/java/basic/serializable.html' },
          { text: 'IO', link: '/java/basic/io.html' },
          { text: '语法糖', link: '/java/basic/syntactic_sugar.html' },
          { text: '参考', link: '/java/basic/reference.html' },
          { text: '阅读须知', link: '/java/README.html' },
          { text: '概览', link: '/java/overview.html' },
        ]},
      ]
    }
  ];

export const swift = [
    {
      text: 'SWIFT学习手册',
      items: [
        { text: '阅读须知', link: '/swift/README.html' },
        { text: '基础知识',  collapsed: true, items: [
          { text: '基础语法', link: '/swift/basic/basic_grammar.html' },
          { text: '基础运算符', link: '/swift/basic/basic_operators.html' },
        ]},
      ]
    }
  ];

export const python = [
    {
      text: 'PYTHON学习手册',
      items: [
        { text: '阅读须知', link: '/python/README.html' },
        { text: '快速开始', link: '/python/quick_start.html' },
        { text: '基础知识',  collapsed: true, items: [
          { text: '基础语法', link: '/python/basic/basic.html' },
          
        ]},
      ]
    }
  ];

export const ios = [
    {
      text: 'IOS开发文档',
      items: [
        { text: '阅读须知', link: '/ios/README.html' },
        { text: '快速开始', link: '/ios/quick_start.html' },
      ]
    }
  ];

