import React, {useEffect, useState} from 'react'
import Profile from '../../components/Profile'
import {useAddTransaction} from "../../hooks/useAddTransaction"
import {useGetTransactions} from "../../hooks/useGetTransactions"
import {useGetTotal} from "../../hooks/useGetTotal"
import "./index.css"


function Expensetracker() {
  const [description, setDescription] = useState("")
  const [transactionAmount, setTransactionAmount] = useState('')
  const [transactionType, setTransactionType] = useState("expense")

  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const {totalIncome, totalBalance, totalExpense} = useGetTotal();

  const submitForm = (e)=> {
    e.preventDefault();
    addTransaction({
      description: description,
      transactionAmount: transactionAmount,
      transactionType: transactionType})
      setDescription('');
      setTransactionAmount('')
      setTransactionType("expense")
  }

  return (
    <div>
      <div className="balance-container">
        <div className='current-balance'>
        <h1>Your balance</h1>
        {totalBalance >= 0 ? <p>${totalBalance}</p> : <p>-${totalBalance * -1}</p>}
        </div>
        <div className='total-income'>
          <h1>Your Income</h1>
          <p>${totalIncome}</p>
        </div>
        <div className='total-expense'>
          <h1>Your Expense</h1>
          <p>${totalExpense}</p>
        </div>
        <Profile />
      </div>
      <form onSubmit={submitForm}>
        <input 
        type="text"
        value={description}
        placeholder='description'
        onChange={(e)=> setDescription(e.target.value)}
        />
        <input 
        type="number"
        value={transactionAmount}
        placeholder='amount'
        onChange={(e) => setTransactionAmount(e.target.value)}
        />
        <div className='radio-button'>
        <input 
        type="radio"
        name="transactionType"
        id="expense"
        checked= {transactionType == "expense"}
        onChange={(e)=> setTransactionType(e.target.id)}
        />
        <label htmlFor="expense">expense</label>

        <input
        type="radio"
        name="transactionType"
        id="income" 
        checked= {transactionType == "income"}
        onChange={(e)=> setTransactionType(e.target.id)}
        />
        <label htmlFor="income">income</label>
        </div>

        <button className='addtransactionBtn' type='submit'>Add transaction</button>
      </form>
      <h3>All transactions</h3>
      {transactions.length == 0 && <p>No any transaction is added yet</p>}
      <div className='All-transactions'>
            <ul>
              {transactions.map((transaction)=> {
                const {
                  description, 
                  transactionAmount,
                  transactionType, 
                  createdAt} = transaction

                  let date, time, month, day;
                  if (createdAt) {
                      date = createdAt.toDate();
              
                      // Extract time, month, and day
                      time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                      month = date.getMonth() + 1; // Months are 0-indexed in JavaScript
                      day = date.getDate();
                  }
                  
                  return (
                  <li key={transaction.id}>
                  <h1>{description}</h1>
                  <p>${transactionAmount}- {transactionType} - {month}/{day} {time}</p>
                  </li>
                  )
              })}
            </ul>
      </div>
    </div>
  )
}

export default Expensetracker
