import { Container } from "./styles";
import {Summary} from '../summary'
import {TransactionTable } from '../transactiontable'
export function Dashboard(){
    return (
       <Container>
           <Summary />
           <TransactionTable />
       </Container>
    )
}