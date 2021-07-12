import { Account } from "../account/account";

export interface Beneficiary{
    beneficiaryId: number,
    beneficiaryName: string,
    beneficiaryAccountNumber: number,
    ifsc: string,
    accountType: string,
    isActive:number,
    account:Account
}
