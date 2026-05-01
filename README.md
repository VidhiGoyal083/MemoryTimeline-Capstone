# Chronicle - Memory Timeline

Chronicle is a React-based memory timeline app inspired by a clean personal journal UI. Users can view memories in timeline or grid layout, filter by mood, search memories, and add/edit/delete memories.

This project uses browser localStorage, so it does not need MongoDB or any backend.

## Features

- Timeline view for year-wise memories
- Grid view toggle
- Add new memory
- Edit existing memory
- Delete memory
- Search memories by title or story
- Filter memories by mood
- Add mood and color tag
- Optional photo/video upload support
- Data saved in browser localStorage
- Responsive design
- Built without Tailwind CSS
- Built without MongoDB

## Tech Stack

- React
- Vite
- CSS
- localStorage
- lucide-react icons

## Folder Structure

Memory-Timeline/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MemoryCard.jsx
│   │   ├── MemoryGrid.jsx
│   │   ├── MemoryModal.jsx
│   │   ├── MoodFilters.jsx
│   │   ├── Stats.jsx
│   │   └── Timeline.jsx
│   ├── data/
│   │   └── memories.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

## Installation

Open the project folder in terminal and run:

npm install

## Run Project

npm run dev

After running, open the local URL shown in terminal.

Usually:

http://localhost:5173

## Build Project

npm run build

## Preview Build

npm run preview

## Important Notes

This project does not use MongoDB. All memory data is stored in browser localStorage.

If you clear browser storage, saved memories will be removed.

Large videos may not save properly in localStorage because browser storage has a size limit. Images work better for this setup.

## Components

### Header.jsx

Contains the app logo, grid/timeline toggle button, and add memory button.

### Stats.jsx

Shows total memories, years spanned, and moods captured.

### MoodFilters.jsx

Displays mood filter chips like Hopeful, Joyful, Proud, True, Nostalgic, Grateful, Adventurous, and Peaceful.

### Timeline.jsx

Displays memories in vertical timeline format.

### MemoryGrid.jsx

Displays memories in card grid layout.

### MemoryCard.jsx

Displays a single memory card with title, date, story, mood, edit, and delete options.

### MemoryModal.jsx

Contains the form for adding and editing memories.

## Author

Created as a React clone project for a memory timeline website.
