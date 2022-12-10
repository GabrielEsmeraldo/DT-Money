import { Fragment, useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormat, numberFormat } from "../../utils/formatter";
import { PriceHighlight, TableContainer, TransactionTable } from "./styles";

export function Transaction() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <Fragment>
      <Header />
      <Summary />

      <TableContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='40%'>{transaction.description}</td>
                  <td><PriceHighlight variant={transaction.type}>{transaction.type === 'outcome' && '- '}{numberFormat.format(transaction.price)}</PriceHighlight></td>
                  <td>{transaction.category}</td>
                  <td>{dateFormat.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TableContainer>
    </Fragment>
  )
}