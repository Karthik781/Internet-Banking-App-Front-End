import { Injectable } from "@angular/core";
import { Transaction } from "../transaction/transaction";

@Injectable()
export class TransactionDataService{
    transaction!: Transaction;
}