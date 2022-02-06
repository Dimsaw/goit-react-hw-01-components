import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import RandomColor from '../../randomColor/RandomColor';

const Statistics = ({ title = '', stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: RandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
