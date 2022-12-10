import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionContext"
import { useSummary } from "../../hooks/useSummary"
import { numberFormat } from "../../utils/formatter"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {

  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{numberFormat.format(summary.income) }</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{numberFormat.format(summary.outcome) }</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{numberFormat.format(summary.total) }</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}