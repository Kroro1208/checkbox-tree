"use client"
import { useCallback, useState } from "react";
import { type CuisineData, TreeNode } from "./TreeNode";


interface TreeCheckboxProps {
  data: CuisineData[];
}

const TreeCheckbox: React.FC<TreeCheckboxProps> = ({ data }) => {
  const [treeData, setTreeData] = useState<CuisineData[]>(data);

  const updateNodeState = useCallback((nodes: CuisineData[], id: string, checked: boolean, isParent: boolean): CuisineData[] => {
    return nodes.map(node => {
      if (node.id === id) {
        const updatedNode = { ...node, checked, indeterminate: false };
        if (isParent && node.children) {
          updatedNode.children = node.children.map(child => ({ ...child, checked, indeterminate: false }));
        }
        return updatedNode;
      }
      if (node.children) {
        const updatedChildren = updateNodeState(node.children, id, checked, isParent);
        const allChecked = updatedChildren.every(child => child.checked);
        const someChecked = updatedChildren.some(child => child.checked || child.indeterminate);
        return {
          ...node,
          children: updatedChildren,
          checked: allChecked,
          indeterminate: !allChecked && someChecked
        };
      }
      return node;
    });
  }, []);

  const handleRootCheck = useCallback((id: string, checked: boolean, isParent: boolean) => {
    setTreeData(prevData => updateNodeState(prevData, id, checked, isParent));
  }, [updateNodeState]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">World Cuisines</h2>
      {treeData.map(node => (
        <TreeNode key={node.id} node={node} onCheck={handleRootCheck} />
      ))}
    </div>
  );
};

export default TreeCheckbox;