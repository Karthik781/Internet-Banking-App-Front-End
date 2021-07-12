import { Account } from "../account/account";
import { Beneficiary } from "../beneficiary/beneficiary";

export interface Transaction {

    transactionId: number,
    amount: number,
    transactionType: string,
    transactionDateTime: Date
    transactionStatus: string,
    transactionRemarks: string
    beneficiary: Beneficiary,
    account: Account
}
