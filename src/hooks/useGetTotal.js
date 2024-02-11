import {useGetTransactions} from "../hooks/useGetTransactions"
import { useEffect, useState } from "react"

export const useGetTotal = ()=> {
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)

    const {transactions} = useGetTransactions()

    const calcTotal = ()=> {
        let income = 0;
        let expense = 0;
        transactions.forEach((transaction)=>{
            if(transaction.transactionType === "income"){
                income = income + Number(transaction.transactionAmount)
            }
            else {
                expense = expense + Number(transaction.transactionAmount)
            }
        })
        setTotalIncome(income)
        setTotalExpense(expense)
        setTotalBalance(income - expense)

    }
   
    useEffect(()=> {
        calcTotal()
    },[transactions])

    return {totalIncome, totalExpense, totalBalance}
}