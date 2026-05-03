import MemoryCard from "./MemoryCard.jsx";

function MemoryGrid({ memories, onEdit, onDelete }) {
  return (
    <section className="grid">
      {memories.map((memory) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
          type="grid"
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default MemoryGrid;
