export const STORAGE_KEY = 'chronicle-memories';

export const moods = [
  { id: 'all', label: 'All', icon: '' },
  { id: 'hopeful', label: 'Hopeful', icon: '🌱' },
  { id: 'joyful', label: 'Joyful', icon: '✨' },
  { id: 'proud', label: 'Proud', icon: '🏆' },
  { id: 'true', label: 'True', icon: '🌊' },
  { id: 'nostalgic', label: 'Nostalgic', icon: '🕰️' },
  { id: 'grateful', label: 'Grateful', icon: '🌸' },
  { id: 'adventurous', label: 'Adventurous', icon: '⛰️' },
  { id: 'peaceful', label: 'Peaceful', icon: '🕊️' }
];

export const colors = [
  '#bd845d',
  '#6f917f',
  '#8fa9bf',
  '#74699a',
  '#c17b86',
  '#a39a76',
  '#7a9891',
  '#7e7385'
];

export const defaultMemories = [
  {
    id: 1,
    title: 'First Day in the City',
    date: '2019-09-01',
    story:
      'Stepped off the train with one suitcase and a hundred dreams. The city smelled like rain and possibility.',
    mood: 'hopeful',
    color: '#bd845d'
  },
  {
    id: 2,
    title: 'Met My Best Friend',
    date: '2020-02-14',
    story:
      'A rainy cafe, a shared table, and a conversation that lasted six hours. Some people just feel like home.',
    mood: 'joyful',
    color: '#6f917f'
  },
  {
    id: 3,
    title: 'The Big Promotion',
    date: '2021-06-10',
    story:
      'Three years of late nights, early mornings, and believing in the work even when no one else did.',
    mood: 'proud',
    color: '#74699a'
  },
  {
    id: 4,
    title: 'Road Trip to the Coast',
    date: '2022-08-20',
    story:
      'Windows down, playlist on shuffle, nowhere to be. The ocean looked like everything we had been chasing.',
    mood: 'true',
    color: '#6fa6b9'
  }
];
