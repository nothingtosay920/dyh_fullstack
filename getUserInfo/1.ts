// es6的箭头函数
const getUserInfos = (user:{name: String,sex: String,company: String}):String => {
    // 返回值必须是boolean
    return `${user.name}，性别${user.sex},公司：${user.company}`;
}
console.log(getUserInfos({name: '刘志鹏', sex: '男', company: '抖音'}))