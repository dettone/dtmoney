import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface transactionsProps {
    id:number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  interface TransactionsProviderProps {
      children: ReactNode;
  }


type TransactionInput = Omit<transactionsProps, 'id' | 'createdAt'>;

interface TransactionsContextData {
    transactions: transactionsProps[];
    createTransaction: (transaction: TransactionInput)=>void;
}


export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData );

export function TransactionsProvider({children} : TransactionsProviderProps){
    const [transactions, setTransactions] = useState<transactionsProps[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) => {
          setTransactions(response.data.transactions);
        });
      }, []);

     function createTransaction(transaction : TransactionInput){
        api.post('/transactions', transaction);
     }     

      return (<TransactionContext.Provider value={{transactions, createTransaction}} > {children} </TransactionContext.Provider>)
}

