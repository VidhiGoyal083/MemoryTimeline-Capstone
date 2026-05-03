import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import MoodFilters from "./components/MoodFilters.jsx";
import Timeline from "./components/Timeline.jsx";
import MemoryGrid from "./components/MemoryGrid.jsx";
import MemoryModal from "./components/MemoryModal.jsx";

import { STORAGE_KEY, defaultMemories } from "./data/memories.js";
import "./App.css";

function App() {
  const [memories, setMemories] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultMemories;
  });

  const [view, setView] = useState("timeline");
  const [query, setQuery] = useState("");
  const [mood, setMood] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  }, [memories]);

  const filtered = useMemo(() => {
    return [...memories]
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .filter((item) => {
        const q = query.toLowerCase();
        const matchMood = mood === "all" || item.mood === mood;
        const matchText =
          item.title.toLowerCase().includes(q) ||
          item.story.toLowerCase().includes(q);

        return matchMood && matchText;
      });
  }, [memories, query, mood]);

  function saveMemory(data) {
    if (data.id) {
      setMemories(memories.map((memory) => (memory.id === data.id ? data : memory)));
    } else {
      setMemories([{ ...data, id: Date.now() }, ...memories]);
    }

    setModalOpen(false);
    setEditing(null);
  }

  function deleteMemory(id) {
    setMemories(memories.filter((memory) => memory.id !== id));
  }

  function openModal(memory = null) {
    setEditing(memory);
    setModalOpen(true);
  }

  return (
    <div>
      <Header view={view} setView={setView} onAdd={() => openModal()} />

      <main className="container">
        <Stats memories={memories} />

        <div className="search">
          <span className="search-icon">⌕</span>
          <input
            placeholder="Search memories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <MoodFilters mood={mood} setMood={setMood} />

        {view === "timeline" ? (
          <Timeline memories={filtered} onEdit={openModal} onDelete={deleteMemory} />
        ) : (
          <MemoryGrid memories={filtered} onEdit={openModal} onDelete={deleteMemory} />
        )}
      </main>

      {modalOpen && (
        <MemoryModal
          memory={editing}
          onClose={() => {
            setModalOpen(false);
            setEditing(null);
          }}
          onSave={saveMemory}
        />
      )}
    </div>
  );
}

export default App;
