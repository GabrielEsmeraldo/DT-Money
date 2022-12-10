import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { useForm, Controller } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionTypeInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting } } = useForm<NewTransactionTypeInputs>({
      resolver: zodResolver(newTransactionFormSchema),
      defaultValues: {
        type: 'income'
      }
    })

  async function handleCreateNewTransaction(data: NewTransactionTypeInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            
            {...register('description')}
          />

          <input
            type="number"
            placeholder='Preço'
            
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder='Categoria'
            
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({field}) => {
              return (
                <TransactionType onValueChange={field.onChange}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />


          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}