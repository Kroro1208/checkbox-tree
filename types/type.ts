export interface TreeCheckboxProps {
    data: MusicData[];
  }

export interface MusicData {
    id: string;
    label: string;
    icon?: string;
    checked?: boolean;
    indeterminate?: boolean;
    children?: MusicData[]; // 階層構造の子要素なので配列
  }
  
export interface TreeNodeProps {
node: MusicData;
onCheck: (id: string, checked: boolean, isParent: boolean) => void; 
parentChecked?: boolean;
}