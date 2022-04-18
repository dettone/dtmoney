import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';

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
    createTransaction: (transaction: TransactionInput)=>Promise<void>;
}


export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData );

export function TransactionsProvider({children} : TransactionsProviderProps){
    const [transactions, setTransactions] = useState<transactionsProps[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) => {
          setTransactions(response.data.transactions);
        });
      }, []);

    async function createTransaction(transactionInput : TransactionInput){
      const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});
      const {transaction} = response.data;
      setTransactions([...transactions, transaction]);
     }     

      return (<TransactionContext.Provider value={{transactions, createTransaction}} > {children} </TransactionContext.Provider>)
}

export function useTransaction(){
    const context = useContext(TransactionContext);

    return context;
}
