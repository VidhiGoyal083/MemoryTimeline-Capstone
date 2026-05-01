import { Grid2X2, List, Plus } from 'lucide-react';

function Header({ view, setView, onAdd }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span>C</span>
        Chronicle
      </div>

      <div className="actions">
        <button onClick={() => setView(view === 'timeline' ? 'grid' : 'timeline')}>
          {view === 'timeline' ? <Grid2X2 size={14} /> : <List size={14} />}
          {view === 'timeline' ? 'Grid' : 'Timeline'}
        </button>

        <button className="add" onClick={onAdd}>
          <Plus size={14} />
          Add Memory
        </button>
      </div>
    </header>
  );
}

export default Header;
