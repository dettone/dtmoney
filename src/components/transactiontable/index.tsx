import { useContext} from "react";
import { Container } from "./styles";
import { TransactionContext } from "../../transactioncontext";


export function TransactionTable() {

  const {transactions} = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>  {transaction.type === 'withdraw'  ? '-': ''} {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>

              <td className={transaction.type}> {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}