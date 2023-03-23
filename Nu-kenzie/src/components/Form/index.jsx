import React, { useState } from 'react';
import { StyledForm } from './styles';

const Form = ({addListTransactions, listTransactions, total}) => {
  const [formlistTrasactin, setFormlistTrasactin] = useState({
    description: "",
    value: Number(),
    type: "entrada",
  });
  const submit = (event) => {
    event.preventDefault();
    if (formlistTrasactin.description !== "" && formlistTrasactin.value !== "") {
      addListTransactions(formlistTrasactin);
    } else {
      toast.error("Ops, Precisa Preencher os campos!");
    }
    setFormlistTrasactin({
      description: "",
      value: Number(),
     type: "",
    });
  };

  return (
    <StyledForm onSubmit={submit}>
       <h3>Descrição</h3>
      <input
        type="text" className="description"
        placeholder="Digite aqui sua descrição"
        value={formlistTrasactin.description}
        onChange={(event) =>
          setFormlistTrasactin({ ...formlistTrasactin, description: event.target.value })
        }
      />
      <p>Ex: Compra de roupas</p>
      <h3>Valor</h3>
      <input className="value"
        type="number"
        placeholder="R$"
        value={formlistTrasactin.value}
        onChange={(event) =>
          setFormlistTrasactin({ ...formlistTrasactin, value: event.target.value })
        }
      />
      <h3>Tipo de valor</h3>
      <select
        value={formlistTrasactin.type}
        onChange={(event) =>
          setFormlistTrasactin({ ...formlistTrasactin, type: event.target.value })
        }
      >
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </StyledForm>
  )
}

export default Form;