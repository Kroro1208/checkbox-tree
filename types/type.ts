export interface MusicData {
  id: string;
  label: string;
  icon?: string;
  checked?: boolean;
  indeterminate?: boolean;
  children?: MusicData[];
}

export interface TreeNodeProps {
  node: MusicData;
  onCheck: (id: string, checked: boolean, isParent: boolean) => void;
  parentChecked?: boolean;
}

export interface TreeCheckboxProps {
  data: MusicData[];
}
