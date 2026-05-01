import { useState } from "react";
import { CalendarDays, X } from "lucide-react";
import { colors, moods } from "../data/memories.js";

function MemoryModal({ memory, onClose, onSave }) {
  const [form, setForm] = useState({
    id: memory?.id || null,
    title: memory?.title || "",
    date: memory?.date || "",
    story: memory?.story || "",
    mood: memory?.mood || "hopeful",
    color: memory?.color || colors[0],
    media: memory?.media || null,
    mediaType: memory?.mediaType || null,
  });

  function update(key, value) {
    setForm({ ...form, [key]: value });
  }

  function handleMediaChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm({
        ...form,
        media: reader.result,
        mediaType: file.type,
      });
    };

    reader.readAsDataURL(file);
  }

  function submit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div className="overlay">
      <form className="modal" onSubmit={submit}>
        <div className="modal-head">
          <h2>{memory ? "Edit Memory" : "New Memory"}</h2>
          <button type="button" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="form-grid">
          <label>
            Title *
            <input
              required
              placeholder="Give this moment a name..."
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </label>

          <label>
            Date *
            <span className="date-input">
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
              <CalendarDays size={15} />
            </span>
          </label>
        </div>

        <label>
          Story
          <textarea
            placeholder="What made this moment worth remembering..."
            value={form.story}
            onChange={(e) => update("story", e.target.value)}
          />
        </label>

        <div className="modal-options">
          <label>
            Mood
            <select value={form.mood} onChange={(e) => update("mood", e.target.value)}>
              {moods
                .filter((m) => m.id !== "all")
                .map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.icon} {m.label}
                  </option>
                ))}
            </select>
          </label>

          <label>
            Color Tag
            <div className="colors">
              {colors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={form.color === color ? "selected" : ""}
                  style={{ backgroundColor: color }}
                  onClick={() => update("color", color)}
                />
              ))}
            </div>
          </label>

          <label>
            Photo / Video
            <input
              className="file-input"
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
            />
          </label>
        </div>

        {form.media && (
          <div className="media-preview">
            {form.mediaType?.startsWith("video") ? (
              <video src={form.media} controls />
            ) : (
              <img src={form.media} alt="Selected memory" />
            )}

            <button
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  media: null,
                  mediaType: null,
                })
              }
            >
              Remove Media
            </button>
          </div>
        )}

        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="submit">Add to Timeline →</button>
        </div>
      </form>
    </div>
  );
}

export default MemoryModal;
