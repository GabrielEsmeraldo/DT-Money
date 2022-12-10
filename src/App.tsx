import { ThemeProvider } from "styled-components"
import { TransactionProvider } from "./contexts/TransactionContext"
import { Transaction } from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider >
  )
}

export default App
