import PropTypes from 'prop-types';
import s from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.header}>Type</th>
          <th className={s.header}>Amount</th>
          <th className={s.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
