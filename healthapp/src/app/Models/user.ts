import { CalendarEvent } from "angular-calendar";

export class User {

    users: User[];
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2;
    height: number;
    weight: number;
    profilepic: string;
    latestMood: string;
    userEvents: CalendarEvent[];

    constructor(username: string, fname: string, lname: string, eMail: string, pswrd: string, hght?: number, wght?: number, pfpc?: string, latmood?: string, usEvents?: CalendarEvent[]) {
        this.userName = username;
        this.firstName = fname;
        this.lastName = lname;
        this.email = eMail;
        this.password = pswrd;
        this.password2 = this.password;
        this.height = hght;
        this.weight = wght;
        this.profilepic = pfpc;
        this.latestMood = latmood;
        this.userEvents = usEvents;
    }



}
