export class User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    height: number;
    weight: number;
    profilepic: string;


    constructor() {
        this.userName = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.passwordConfirm = "";
        this.height = 0;
        this.weight = 0;
        this.profilepic = "";
    }


}
