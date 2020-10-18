
// interface  用户需要满足一部分属性和方法就叫接口
interface IUser {
    name: String;
    age: string;
}
const getUserInfo = (user:{name:IUser,age:IUser}):string => `
    name: ${user.name}, age${user.age}

`