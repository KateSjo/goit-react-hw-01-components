import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticCard.module.css';

const StatisticCard = ({ label, percentage, key }) => {
  return (
    <li key={key} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticCard.propTypes = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticCard;
