import React from 'react';
import PropTypes from 'prop-types';

const TransactionsLine = ({ id, type, amount, currency }) => {
  return (
    <tr rey={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionsLine.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsLine;
