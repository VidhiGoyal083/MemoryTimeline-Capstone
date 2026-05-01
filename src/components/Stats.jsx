function Stat({ title, value }) {
  return (
    <article className="stat-card">
      <p># {title}</p>
      <strong>{value}</strong>
    </article>
  );
}

function Stats({ memories }) {
  const years = new Set(memories.map((memory) => new Date(memory.date).getFullYear())).size;
  const moodCount = new Set(memories.map((memory) => memory.mood)).size;

  return (
    <section className="stats">
      <Stat title="Memories" value={memories.length} />
      <Stat title="Years Spanned" value={years} />
      <Stat title="Moods Captured" value={moodCount} />
    </section>
  );
}

export default Stats;
