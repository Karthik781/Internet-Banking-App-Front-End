import { Account } from "../account/account";

export interface Customer {
    userId: number,
    username:string,
    password: string,
    type:string,
    customerId: number,
    customerName: string,
    phoneNo: string,
    emailId: string,
    age: number,
    gender: string,
    accounts: Account[]
}