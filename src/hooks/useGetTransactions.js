import {useEffect, useState} from 'react'
import { useGetUserInfo } from './useGetUserInfo'
import {db} from "../firebase/config"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";


export const useGetTransactions = ()=> {
    const [transactions, setTransactions] = useState([])
    const {userID} = useGetUserInfo()
    const transactionRef = collection(db, "transactions")

    const getTransaction = ()=> {
        const q = query(transactionRef, where("userID", "==", userID), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const transactionsData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                const id = doc.id
                transactionsData.push({...data, id});
            });
            setTransactions(transactionsData);
        });
        return ()=> unsubscribe();

    }
    useEffect(()=> {
        getTransaction()
    }, [userID])

    return {transactions}
}