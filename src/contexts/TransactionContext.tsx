import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string,
}

interface TransactionContext {
  transactions: Transaction[]
  FetchTransactions: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContext)

export function TransactionProvider({children}: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function FetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })



    setTransactions(response.data)
  }

  useEffect(() => {
    FetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, FetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}