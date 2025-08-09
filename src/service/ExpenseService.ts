import { Expense } from "../models/Expense";
import { User } from "../models/User";

export class ExpenseService {

    addExpense(expense: Expense): Expense {
        return expense;
    }

    getUserExpenses(userId: string): { expense: Expense; amountPaid: number }[] {
        return [];
    }

    getGroupExpenses(groupId: string): Expense[] {
        return [];
    }


    calculateSettlements(groupId: string): { from: User; to: User; amount: number }[] {
        return [];
    }
}

