interface IUser {
    name: String;
    age: number;
}

type IUserInfoFunc = (user: IUser) => String;

const getUserInfo:IUserInfoFunc = (user) =>  `
        name: ${user.name},age: ${user.age};
    `
