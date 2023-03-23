import React from 'react'
import Form from '../components/Form';
import Header from '../components/Header';
import TotalList from '../components/TotalList';
import Transactions from '../components/Transactions';

const PageTransaction = ({addListTransactions, listTransactions, total, removeListTransactions}) => {
  return (
    <div>
      <Header/>
      <Form addListTransactions={addListTransactions} listTransactions={listTransactions} total={total}/>
      <TotalList  listTransactions={listTransactions} total={total}/>
      <Transactions removeListTransactions={removeListTransactions} listTransactions={listTransactions}/>
    </div>
  )
}

export default PageTransaction;