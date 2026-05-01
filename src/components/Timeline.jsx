import MemoryCard from "./MemoryCard.jsx";

function yearOf(value) {
  return new Date(value + "T00:00:00").getFullYear();
}

function Timeline({ memories, onEdit, onDelete }) {
  return (
    <section className="timeline">
      {memories.map((memory) => (
        <div className="timeline-row" key={memory.id}>
          <p>{yearOf(memory.date)}</p>
          <span style={{ backgroundColor: memory.color }} />
          <MemoryCard
            memory={memory}
            type="timeline"
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </section>
  );
}

export default Timeline;
