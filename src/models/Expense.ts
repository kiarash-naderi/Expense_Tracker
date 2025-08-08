import { Group } from "./Group";
import { User } from "./User";


export interface Payer {
    user: User, //kodom user
    amount: number, // che ghadar
}


export interface Expense {
    id: string,
    amount: number;
    description: string;
    paidBy: Payer[]; // list, chon chan nafar mitonan pardakht konan
    group: Group;
    date: Date;

}

