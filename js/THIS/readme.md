# 默认绑定
this所处的词法作用域在哪里生效了，this的作用域就指向哪里

在严格模式下，全局对象无法进行默认绑定，所有导致this只能绑定在undefined上

# 隐式绑定
当一个函数引用有上下文对象时，隐式绑定的规则就会把函数调用中的this绑定到这个上下文对象
    - 隐式丢失

# 显示绑定
call apply bind 
如果call,apply和bind的第一个参数写的是null，那么this指向window对象