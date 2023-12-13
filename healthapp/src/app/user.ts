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


    constructor(uName: string, fName: string, lName: string, eMail: string, pswrd: string, hgt: number, wgt: number, pfPic: string) {
        this.userName = uName;
        this.firstName = fName;
        this.lastName = lName;
        this.email = eMail;
        this.password = pswrd;
        this.passwordConfirm = this.password;
        this.height = hgt;
        this.weight = wgt;
        this.profilepic = pfPic;
    }


}
