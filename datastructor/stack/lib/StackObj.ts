// 存储结构 JSONObject 
// 必须实现以下属性和方法
interface StackObj  {
    [propName: number] : any;
}

export default class ObjStack {
    // 定义栈并规定类型
    private items: StackObj; // 先声明再用
    private count: number;
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(item:any) {
        this.items[this.count] = item;
        this.count++;
    }
    pop() {
        if (this.isEmpty) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    isEmpty() {
        return this.count === 0;
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    size():number {
       return this.count
    }
    toString() {
        if (this.isEmpty) {
            return ""
        }
        let objString = `${this.items[0]}` 
        for (var i = 1 ;i < this.count ; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }   
}