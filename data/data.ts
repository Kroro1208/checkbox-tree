import type { MusicData } from "@/types/type";

export const worldMusicGenres: MusicData[] = [
  {
    id: '1',
    label: 'Western Music',
    icon: '🎵',
    children: [
      {
        id: '1-1',
        label: 'Classical',
        icon: '🎻',
        children: [
          { id: '1-1-1', label: 'Baroque', icon: '🎼' },
          { id: '1-1-2', label: 'Romantic', icon: '🎹' },
          { id: '1-1-3', label: 'Contemporary', icon: '🎧' }
        ]
      },
      {
        id: '1-2',
        label: 'Popular',
        icon: '🎸',
        children: [
          {
            id: '1-2-1',
            label: 'Rock',
            icon: '🤘',
            children: [
              { id: '1-2-1-1', label: 'Classic Rock', icon: '🎸' },
              { id: '1-2-1-2', label: 'Punk Rock', icon: '🧷' },
              { id: '1-2-1-3', label: 'Alternative Rock', icon: '🎤' }
            ]
          },
          {
            id: '1-2-2',
            label: 'Electronic',
            icon: '🎛️',
            children: [
              { id: '1-2-2-1', label: 'House', icon: '🏠' },
              { id: '1-2-2-2', label: 'Techno', icon: '🤖' },
              { id: '1-2-2-3', label: 'Dubstep', icon: '💽' }
            ]
          },
          { id: '1-2-3', label: 'Hip Hop', icon: '🎤' }
        ]
      },
      { id: '1-3', label: 'Jazz', icon: '🎷' }
    ]
  },
  {
    id: '2',
    label: 'World Music',
    icon: '🌍',
    children: [
      {
        id: '2-1',
        label: 'Asian',
        icon: '🏮',
        children: [
          { id: '2-1-1', label: 'Traditional Chinese', icon: '🥁' },
          { id: '2-1-2', label: 'Bollywood', icon: '💃' },
          { id: '2-1-3', label: 'J-Pop', icon: '🗾' }
        ]
      },
      {
        id: '2-2',
        label: 'African',
        icon: '🌍',
        children: [
          { id: '2-2-1', label: 'Afrobeat', icon: '🥁' },
          { id: '2-2-2', label: 'Highlife', icon: '🎺' },
          { id: '2-2-3', label: 'Soukous', icon: '🎸' }
        ]
      },
      {
        id: '2-3',
        label: 'Latin American',
        icon: '💃',
        children: [
          { id: '2-3-1', label: 'Salsa', icon: '🌶️' },
          { id: '2-3-2', label: 'Reggaeton', icon: '🏝️' },
          { id: '2-3-3', label: 'Bossa Nova', icon: '🇧🇷' }
        ]
      }
    ]
  },
  {
    id: '3',
    label: 'Experimental',
    icon: '🧪',
    children: [
      { id: '3-1', label: 'Noise', icon: '📢' },
      { id: '3-2', label: 'Avant-Garde', icon: '🎭' },
      { id: '3-3', label: 'Musique Concrète', icon: '🔊' }
    ]
  }
];