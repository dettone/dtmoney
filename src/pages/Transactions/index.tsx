import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionContainer, TransactionsTable } from "./styles";


export function Transactions(){
    return (
        <div>
           <Header /> 
           <Summary />
        <TransactionContainer>
            <SearchForm />
           <TransactionsTable>
            <tbody>
                <tr>
                    <td width="50%"> Desenvolvimento de site </td>
                    <td><PriceHighLight variant = 'income'> R$ 20.200,00 </PriceHighLight></td>
                    <td> Venda </td>
                    <td> 13/04/2022</td>
                </tr>
                <tr>
                    <td width="50%"> Hambúrguer </td>
                    <td> <PriceHighLight variant = 'outcome'>- R$ 2.200,00 </PriceHighLight></td>
                    <td> Alimentação </td>
                    <td> 13/04/2022</td>
                </tr>
                <tr>
                    <td width="50%"> Desenvolvimento de site </td>
                    <td> <PriceHighLight variant = 'income'> R$ 20.200,00 </PriceHighLight> </td>
                    <td> Venda </td>
                    <td> 13/04/2022</td>
                </tr>
                <tr>
                    <td width="50%"> Desenvolvimento de site </td>
                    <td> <PriceHighLight variant = 'income'> R$ 20.200,00 </PriceHighLight> </td>
                    <td> Venda </td>
                    <td> 13/04/2022</td>
                </tr>
            </tbody>
           </TransactionsTable>
                       
        </TransactionContainer>
        </div>
    )
}