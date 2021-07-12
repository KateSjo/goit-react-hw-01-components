import React from 'react';
import Statistics from '../../statistical-data.json';
import StatisticCard from './StatisticCard';
import styles from './Statistics.module.css';

const StatisticsList = () => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.stat__list}>
      {Statistics.map(Statistic => (
        <StatisticCard
          key={Statistic.id}
          label={Statistic.label}
          percentage={Statistic.percentage}
        />
      ))}
    </ul>
  </section>
);
export default StatisticsList;
