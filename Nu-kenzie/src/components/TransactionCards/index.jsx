import React from "react";
import lixeira from "../../assets/img/lixeira.svg";
import { StyledCards } from "./styles";

const TransactionsCards = ({ removeListTransactions, list }) => {
  return (
    <StyledCards borderLeft={list.type === "entrada" ? "#03B898" : "#E9ECEF"}>
      <h3>{list.description}</h3>
      <p>{list.type}</p>
      <span>R$ {list.value}</span>
      <button onClick={() => removeListTransactions(list.id)}>
        <img src={lixeira} />
      </button>
    </StyledCards>
  );
};

export default TransactionsCards;
