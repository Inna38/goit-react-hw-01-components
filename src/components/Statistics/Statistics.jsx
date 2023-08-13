import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from '../../utils/statistics';

export const Statistics = ({ stat, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stat.map(({ id, label, percentage }, index) => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
            key={id}
          >
            <span className={css.label}>{label}: </span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stat: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
