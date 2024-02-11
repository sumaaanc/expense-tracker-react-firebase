import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "../firebase/config"
import {useGetUserInfo} from "../hooks/useGetUserInfo"

export function useAddTransaction  (){
    const transactionCollectionRef = collection(db, "transactions")
    const {userID} = useGetUserInfo()

    const addTransaction = async({
        description,
        transactionAmount,
        transactionType
    })=> {
        await addDoc(transactionCollectionRef, {
            userID,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()

        });
    }

    return {addTransaction}
}

