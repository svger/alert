##Alert
> 当某个页面需要向用户显示提示信息时使用。
> 非浮层的静态展现形式，始终展现,不会自动消失.


| 属性             |      说明          |           类型              |       默认值     |
|-----------------|-------------------|----------------------------|:----------------:|
|prefixCls|样式前缀，如：`cefc-alert`，可用于自定义样式|String          |'cefc-alert'|
|type|消息状态，可取值为succ/info/waring/error| String |   ''      |
|message|     提示的内容 |  String      |   ''  |
|description|   提示内容的详细描述      |   String  |   ''  |
|showIcon   | 是否显示Icon      |   boolean  |    true|
|className|外部传入类|string|无|

##如何使用

`<Alert type="succ" message="我是提示内容" description="我是提示内容的详细描述" showIcon={true}/>`