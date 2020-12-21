# ES5中的执行上下文

  ES5 规范又对 ES3 中执行上下文的部分概念做了调整，
最主要的调整，就是去除了ES3 中变量对象和活动对象，
以词法环境组件（ LexicalEnvironment component）
和变量环境组件（ VariableEnvironment component）替代。

概念上的执行上下文:
  ExecutionContext = {
    ThisBinding = <this value>,
    LexicalEnvironment = { ... },
    VariableEnvironment = { ... },
  }

- 词法环境( Lexical Environment )

  由两部分组成
  1. 环境记录：存储变量和函数声明的实际位置
  2. 对外部的引用：可以访问其外部词法环境

  环境记录有三种类型
    1. 声明式环境记录( Declarative Environment Record )
      声明式环境记录是用来定义那些直接将标识符与语言值绑定的ES语法元素，
      例如变量，常量，let，class，module，import以及函数声明等。
      声明式环境记录有函数环境记录（Function Environment Record）和模块环境记录（Module Environment Record）两种特殊类型。

      - 函数环境记录( Function Environment Record )
      函数环境记录用于体现一个函数的顶级作用域，如果函数不是箭头函数，还会提供一个this的绑定。

      - 模块环境记录( Module Environment Record )
      模块环境记录用于体现一个模块的外部作用域（即模块export所在环境），
      除了正常绑定外，也提供了所有引入的其他模块的绑定（即import的所有模块，这些绑定只读），因此我们可以直接访问引入的模块。
    
    2. 对象式环境记录( Object Environment Record )
      - 每个对象式环境记录都与一个对象相关联，这个对象叫做对象式环境记录的binding object。可以理解为对象式环境记录就是基于这个binding object，
      以对象属性的形式进行标识符绑定，标识符与binding object的属性名一一对应。

      - 是对象就可以动态添加或者删除属性，所以对象环境记录不存在不可变绑定。

      - 对象式环境记录用来定义那些将标识符与某些对象属性相绑定的ES语法元素，
      例如with语句、全局var声明和函数声明。
      
    3. 全局环境记录( Global Environment Record )
      - 全局环境记录逻辑上来说是单个记录，但是实际上可以看作是对一个对象式环境记录组件和一个声明式环境记录组件的封装。
      - 全局环境记录的对象式环境记录的binding object是全局对象
      - 全局环境记录的对象式环境记录组件，绑定了所有内置全局属性、全局的函数声明以及全局的var声明。
      - 全局代码的其他声明（如let、const、class等）则绑定在声明式环境记录组件内，
      由于声明式环境记录组件并不是基于简单的对象形式来实现绑定，所以这些声明我们并不能通过全局对象的属性来访问。

  外部词法环境的引用
    - 全局环境的外部词法环境引用为null。
    
    - 外部词法环境的引用将一个词法环境和其外部词法环境链接起来，
    外部词法环境又拥有对其自身的外部词法环境的引用。这样就形成一个链式结构，
    这里我们称其为环境链（即ES6之前的作用域链），全局环境是这条链的顶端。

    - 外部词法环境的引用将一个词法环境和其外部词法环境链接起来，
    外部词法环境又拥有对其自身的外部词法环境的引用。
    这样就形成一个链式结构，这里我们称其为环境链（即ES6之前的作用域链），
    全局环境是这条链的顶端。

    var x = 10
    let y = 20
    const z = 30
    class Person {}
    function foo() {
        var a = 10
    }
    foo()

    // 全局词法环境
    GlobalEnvironment = {
        outer: null, // 全局环境的外部环境引用为null
        // 全局环境记录，抽象为一个声明式环境记录和一个对象式环境记录的封装
        GlobalEnvironmentRecord: {
            // 全局this绑定值指向全局对象，即ObjectEnvironmentRecord的binding object
            [[GlobalThisValue]]: ObjectEnvironmentRecord[[BindingObject]],
            // 声明式环境记录，全局除了函数和var，其他声明绑定于此
            DeclarativeEnvironmentRecord: {
                y: 20,
                z: 30,
                Person: <<class>>
            },
            // 对象式环境记录的，绑定对象为全局对象，故其中的绑定可以通过访问全局对象的属性来获得
            ObjectEnvironmentRecord: {
                // 全局函数声明和var声明
                x: 10,
                foo: <<function>>,
                // 内置全局属性
                isNaN: <<function>>,
                isFinite: <<function>>,
                parseInt: <<function>>,
                parseFloat: <<function>>,
                Array: <<construct function>>,
                Object: <<construct function>>
                // 其他内置全局属性不一一列举
            }
        }
    }

    // foo函数词法环境
    fooFunctionEnviroment = {
        outer: GlobalEnvironment, // 外部词法环境引用指向全局环境
        FunctionEnvironmentRecord: {
            [[ThisValue]]: GlobalEnvironment, // foo函数全局调用，故this绑定指向全局环境
            // 其他函数代码内的绑定
            a: 10
        }
    }


- 变量环境( VariableEnvironment component )

  变量环境也是一个词法环境。与词法环境的区别在于只用于存储var声明的变量。造成变量提升(?待填坑)   


