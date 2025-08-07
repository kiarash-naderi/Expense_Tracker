import { Group } from "./Group";
import { User } from "./User";

export interface Expense {
    id: string,
    amount: number;
    description: string;
    paidBy: User;
    group: Group;
    date: Date;

}

