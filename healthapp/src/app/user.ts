import { UserService } from "./services/user.service";

export class User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2;
    height: number;
    weight: number;
    profilepic: string;


    constructor(private userservice: UserService) {
        this.userName = this.userservice.userName;
        this.firstName = this.userservice.firstName;
        this.lastName = this.userservice.lastName;
        this.email = this.userservice.email;
        this.password = this.userservice.password;
        this.password2=this.userservice.password;
        this.height = this.userservice.height;
        this.weight = this.userservice.weight;
        this.profilepic = this.userservice.profilepic;
    }


}
