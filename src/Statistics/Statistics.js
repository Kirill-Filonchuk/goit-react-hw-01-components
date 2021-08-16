function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      <h2 className="Title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="Item" key={stat.id}>
            <span className="Label">{stat.label}</span>
            <span className="Percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
