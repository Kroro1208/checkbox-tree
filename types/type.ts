export interface TreeCheckboxProps {
    data: CuisineData[];
  }

export interface CuisineData {
    id: string;
    label: string;
    icon?: string;
    checked?: boolean;
    indeterminate?: boolean;
    children?: CuisineData[]; // 階層構造の子要素なので配列
  }
  
export interface TreeNodeProps {
node: CuisineData;
onCheck: (id: string, checked: boolean, isParent: boolean) => void; 
parentChecked?: boolean;
}