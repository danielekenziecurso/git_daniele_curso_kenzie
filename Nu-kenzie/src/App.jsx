import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageTransaction from "./page";
import { GlobalStyles } from "./styles/GlogalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const addListTransactions = (list) => {
    const newList = { ...list, id: uuidv4() };
    setListTransactions([...listTransactions, newList]);
  };
  const removeListTransactions = (listId) => {
    const newListTransactions = listTransactions.filter(
      (list) => list.id !== listId
    );
    setListTransactions(newListTransactions);
  };

  const total = listTransactions.reduce((previousValue, currentItemList) => {
    if (currentItemList.type == "entrada") {
      return previousValue + Number(currentItemList.value);
    } else if (currentItemList.type == "saida") {
      return previousValue - Number(currentItemList.value);
    }
  }, 0);

  return (
    <div className="App">
      <GlobalStyles />
      <PageTransaction
        addListTransactions={addListTransactions}
        listTransactions={listTransactions}
        total={total}
        removeListTransactions={removeListTransactions}
      />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343B41",
          color: "#F8F9FA",
        }}
      />
    </div>
  );
}

export default App;
