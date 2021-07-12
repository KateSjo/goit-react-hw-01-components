import React from 'react';
import TransactionsData from '../../transactions.json';
import TransactionsLine from './TransactionsLine';
import styles from './TransactionsList.module.css';

const TransactionsList = () => (
  <table className={styles.transaction__history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {TransactionsData.map(TransactionData => (
        <TransactionsLine
          id={TransactionData.id}
          type={TransactionData.type}
          amount={TransactionData.amount}
          currency={TransactionData.currency}
        />
      ))}
    </tbody>
  </table>
);
export default TransactionsList;
