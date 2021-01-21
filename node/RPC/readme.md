Remote Produre Call 远程过程调用
和 Ajax 有什么相同点
ajax 是 电脑和服务器之间通信
RPC 是 服务器和服务器通信
1. 都是两个计算机之间的通信
2. 需要双方约定一个数据格式

不同
1. 不一定使用DNS作寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议

- 寻址/负载均衡
  Ajax 用DNS进行寻址
  RPC 用特有服务进行寻址

- TCP通信方式
  Ajax 单工通信
  RPC 多种形式

- 二进制协议
  Ajax HTTP(html json)
  RPC  二进制协议(更小的数据包体积 更快的编码速率)

# RPC 调用 Buffer编码解码二进制数据包