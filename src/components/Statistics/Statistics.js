import PropTypes from 'prop-types';
import Title from './Title/Title';
import randomColor from '../Statistics/randomcolor';
import s from '../Statistics/Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <Title title={title} />}
      <ul className={s.StatList}>
        {stats.map(stat => (
          <li className={s.Item} style={{ backgroundColor: randomColor() }} key={stat.id}>
            <span className={s.Label}>{stat.label}</span>
            <span className={s.Percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      persentag: PropTypes.number,
    }),
  ),
};

export default Statistics;
