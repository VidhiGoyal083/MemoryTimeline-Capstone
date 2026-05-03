function Header({ view, setView, onAdd }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span>C</span>
        Chronicle
      </div>

      <div className="actions">
        <button onClick={() => setView(view === "timeline" ? "grid" : "timeline")}>
          {view === "timeline" ? "▦" : "☰"}
          {view === "timeline" ? "Grid" : "Timeline"}
        </button>

        <button className="add" onClick={onAdd}>
          + Add Memory
        </button>
      </div>
    </header>
  );
}

export default Header;
