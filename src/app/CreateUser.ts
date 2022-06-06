import { Booking } from "./Booking";
import { LoginUser } from "./LoginUser";

export class CreateUser {
    firstName!: string;
    lastName!: string;
    birthdayDate!: string;
    gender!:  string;
    country!: string;
    phoneNumber!: string;
    loginDO !: LoginUser;
    BookingHistoryList !: Booking[];
    constructor() { 
        this.loginDO = new LoginUser();
    }
}