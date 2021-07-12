import { Beneficiary } from "../beneficiary/beneficiary";
import { Nominee } from "../nominee/nominee";
import { Transaction } from "../transaction/transaction";

export interface Account {
    accountId: number,
    interestRate: number,
    balance: number,
    dateOfJoining: string,
    customer: number,
    isActive: number,
    accountType: number,
    minBalance: number,
    fine: number,
    amount: number,
    months:number,
    penaltyAmount: number,
    nominees: Nominee[],
    beneficiaries: Beneficiary[],
    transactions: Transaction[]
}