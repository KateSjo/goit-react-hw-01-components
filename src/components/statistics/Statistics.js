import React from 'react';
import StatisticCard from './StatisticCard';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat__list}>
        {stats.map(Statistic => (
          <StatisticCard
            key={Statistic.id}
            label={Statistic.label}
            percentage={Statistic.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default StatisticsList;
