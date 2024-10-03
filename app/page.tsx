import TreeCheckbox from "./components/TreeCheckBox";

const worldCuisinesData = [
  {
    id: '1',
    label: 'Asian Cuisine',
    icon: '🍜',
    children: [
      { id: '1-1', label: 'Japanese', icon: '🍣' },
      { id: '1-2', label: 'Chinese', icon: '🥡' },
      { id: '1-3', label: 'Thai', icon: '🍲' },
    ]
  },
  {
    id: '2',
    label: 'European Cuisine',
    icon: '🍝',
    children: [
      { id: '2-1', label: 'Italian', icon: '🍕' },
      { id: '2-2', label: 'French', icon: '🥐' },
      { id: '2-3', label: 'Spanish', icon: '🥘' },
    ]
  },
  {
    id: '3',
    label: 'American Cuisine',
    icon: '🍔',
    children: [
      { id: '3-1', label: 'USA', icon: '🌭' },
      { id: '3-2', label: 'Mexican', icon: '🌮' },
      { id: '3-3', label: 'Brazilian', icon: '🍖' },
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <TreeCheckbox data={worldCuisinesData}/>
    </div>
  );
}