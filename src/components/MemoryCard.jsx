import { X } from "lucide-react";
import { moods } from "../data/memories.js";

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function yearOf(value) {
  return new Date(value + "T00:00:00").getFullYear();
}

function MemoryCard({ memory, type, onEdit, onDelete }) {
  const currentMood = moods.find((m) => m.id === memory.mood);

  return (
    <article className={`card ${type}`} style={{ borderTopColor: memory.color }}>
      <div className="card-head">
        <span>{currentMood?.icon}</span>
        {type === "grid" && <small>{yearOf(memory.date)}</small>}
      </div>

      {memory.media && (
        <div className="card-media">
          {memory.mediaType?.startsWith("video") ? (
            <video src={memory.media} controls />
          ) : (
            <img src={memory.media} alt={memory.title} />
          )}
        </div>
      )}

      <h2>{memory.title}</h2>
      <time>{formatDate(memory.date)}</time>
      <p>{memory.story}</p>

      <div className="card-actions">
        <button onClick={() => onEdit(memory)}>Edit</button>

        <button className="delete" onClick={() => onDelete(memory.id)}>
          <X size={13} />
        </button>

        {type === "timeline" && (
          <em>
            {currentMood?.icon} {currentMood?.label}
          </em>
        )}
      </div>
    </article>
  );
}

export default MemoryCard;
