import { moods } from "../data/memories.js";

function MoodFilters({ mood, setMood }) {
  return (
    <div className="chips">
      {moods.map((item) => (
        <button
          key={item.id}
          className={mood === item.id ? "active" : ""}
          onClick={() => setMood(item.id)}
        >
          {item.icon} {item.label}
        </button>
      ))}
    </div>
  );
}

export default MoodFilters;
