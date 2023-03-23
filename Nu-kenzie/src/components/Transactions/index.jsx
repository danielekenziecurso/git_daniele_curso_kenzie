import React from "react";
import { StyledTransaction } from "./styles";
import TransactionsCards from "../TransactionCards";

const Transactions = ({ removeListTransactions, listTransactions }) => {
  return (
    <StyledTransaction>
      {listTransactions.length > 0 ? (
        <>
          <h3 className="summary">Resumo financeiro</h3>
          {listTransactions.map((list, index) => (
            <TransactionsCards
              removeListTransactions={removeListTransactions}
              key={index}
              list={list}
            />
          ))}
        </>
      ) : (
        <div>
          <h3 className="summary">Resumo financeiro</h3>
          <h2 className="divAlert">Você ainda não possui nenhum lançamento</h2>
        </div>
      )}
    </StyledTransaction>
  );
};

export default Transactions;
