import { createContext, ReactNode, useEffect, useState } from "react";

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
    const url = new URL('http://localhost:3000/transactions')

    if(query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
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