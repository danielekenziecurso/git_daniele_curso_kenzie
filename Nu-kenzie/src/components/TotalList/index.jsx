import React from "react";
import { StyledList } from "./styles";

const TotalList = ({ listTransactions, total }) => {

  
  return (
    <StyledList>
          <div className="divValue">
            <h3>Valor total:</h3>
            <span>R$:{total},00</span>
          </div>
          <p>O valor se refere ao saldo</p>
      
    </StyledList>
    
  );
};

export default TotalList;