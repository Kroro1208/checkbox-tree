"use client"
import { useCallback, useState } from "react";
import { TreeNode } from "./TreeNode";
import type { MusicData, TreeCheckboxProps } from "@/types/type";

const TreeCheckbox: React.FC<TreeCheckboxProps> = ({ data }) => {
  const [treeData, setTreeData] = useState<MusicData[]>(data);

  // ノードを深く更新するためのヘルパー関数
  const updateNode = useCallback((nodes: MusicData[], id: string, checked: boolean): MusicData[] => {
    return nodes.map(node => {
      if (node.id === id) {
        // 親ノードがチェック/アンチェックされた場合
        const updatedNode = { 
          ...node, 
          checked, 
          indeterminate: false,
          children: node.children ? setChildrenChecked(node.children, checked) : node.children
        };
        return updatedNode;
      }
      if (node.children) {
        // 子ノードの更新
        const updatedChildren = updateNode(node.children, id, checked);
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

  // 子孫ノードを再帰的にチェック/アンチェックするヘルパー関数
  const setChildrenChecked = (nodes: MusicData[], checked: boolean): MusicData[] => {
    return nodes.map(node => ({
      ...node,
      checked,
      indeterminate: false,
      children: node.children ? setChildrenChecked(node.children, checked) : node.children
    }));
  };

  const handleCheck = useCallback((id: string, checked: boolean) => {
    setTreeData(prevData => updateNode(prevData, id, checked));
  }, [updateNode]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">World Music</h2>
      {treeData.map(node => (
        <TreeNode key={node.id} node={node} onCheck={handleCheck} />
      ))}
    </div>
  );
};

export default TreeCheckbox;
