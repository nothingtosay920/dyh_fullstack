# 线程与进程的区别 
cpu工作时间的描述 工作时间片段
进程:cpu在运行某个指令即加载和保存上下文所需要的时间 上下文
线程:进程中更小的单位.执行一段指令所需的时间 

# js单线程带来什么好处
节约资源(节省内存)  
(不安全渲染问题) 

# 执行栈
执行栈可以认为是一个存储函数调用的栈结构    

# Event Loop
微任务: process.nextTick,promise,MutaionOvserver
宏任务: script(同步代码 也称之为宏任务),setTimeout,setInte rval,setImmediate,I/O,UI-rendering

执行顺序:
1. 执行同步代码,这属于宏任务
2. 同步代码执行完后,执行栈为空,去查看是否有异步代码执行
3. 执行所有的微任务
4. 当所有的微任务执行完后,有必要的话就会渲染页面
5. 然后开始下一轮的Event-Loop,执行宏任务中的异步代码