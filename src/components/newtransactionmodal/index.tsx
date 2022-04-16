import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { TransactionContext } from "../../transactioncontext";

interface NewTransactionModalProps {
  isOpen: boolean;
  handleCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isOpen,
  handleCloseNewTransactionModal,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const [type, setType] = useState("deposit");

  function handdleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({ title, amount, category, type });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handdleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  );
}