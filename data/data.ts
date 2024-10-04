import type { CuisineData } from "@/app/components/TreeNode";

export const worldCuisinesData: CuisineData[] = [
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