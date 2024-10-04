"use client";
import { useCallback, useState } from "react";
import { TreeNode } from "./TreeNode";
import type { MusicData, TreeCheckboxProps } from "@/types/type";

const TreeCheckbox: React.FC<TreeCheckboxProps> = ({ data }) => {
  const [treeData, setTreeData] = useState<MusicData[]>(data);

  // setChildrenCheckedのメモ化
  const setChildrenChecked = useCallback((children: MusicData[], checked: boolean): MusicData[] => {
    return children.map(child => ({
      ...child,
      checked,
      indeterminate: false,
      children: child.children ? setChildrenChecked(child.children, checked) : child.children,
    }));
  }, []);

  const updateNode = useCallback(
    (nodes: MusicData[], id: string, checked: boolean): MusicData[] => {
      return nodes.map(node => {
        if (node.id === id) {
          // 親がチェックされたかどうか
          const updatedNode = {
            ...node,
            checked,
            indeterminate: false,
            children: node.children ? setChildrenChecked(node.children, checked) : node.children,
          };
          return updatedNode;
        }
        if (node.children) {
          // ツリー構造になってるので再起的にupdateNodeを呼び出して親がチェックされたら子は全てチェック
          const updatedChildren = updateNode(node.children, id, checked);
          const allChecked = updatedChildren.every(child => child.checked);
          const someChecked = updatedChildren.some(child => child.checked || child.indeterminate);
          return {
            ...node,
            children: updatedChildren,
            checked: allChecked,
            indeterminate: !allChecked && someChecked,
          };
        }
        return node;
      });
    },
    [setChildrenChecked]
  );

  const handleRootCheck = useCallback((id: string, checked: boolean) => {
    setTreeData(prevData => updateNode(prevData, id, checked));
  }, [updateNode]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">World Music</h2>
      {treeData.map(node => (
        <TreeNode key={node.id} node={node} onCheck={handleRootCheck} />
      ))}
    </div>
  );
};

export default TreeCheckbox;
