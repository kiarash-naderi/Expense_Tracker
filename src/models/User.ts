import { Expense } from "./Expense";

export interface User {
    id:number
    UserName: string;
    // expenses:{amountPaid: number }[]; // hame hazine haye user x
    
    /* expenses: Expense[] in eshtebahe chon saheme har user ro neshon nemide 
    agar id 1 va 2 har do pardakht konan, har do kol hazine ro mibinan 
    na faghat sahme khodeshoon */
}