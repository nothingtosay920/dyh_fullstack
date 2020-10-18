// es6的箭头函数
var getUserInfos = function (user) {
    // 返回值必须是boolean
    return user.name + "\uFF0C\u6027\u522B" + user.sex + ",\u516C\u53F8\uFF1A" + user.company;
};
console.log(getUserInfos({ name: '刘志鹏', sex: '男', company: '抖音' }));
