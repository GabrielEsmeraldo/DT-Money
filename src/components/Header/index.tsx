import { HeaderContainer, HeaderContent, NewButton } from "./styles";
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewButton>
              Nova Transação
            </NewButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}