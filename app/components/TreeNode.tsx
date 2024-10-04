/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { TreeNodeProps } from '@/types/type';

export const TreeNode: React.FC<TreeNodeProps> = ({ node, onCheck }) => {
  const [expanded, setExpanded] = useState(false); // 子要素の展開状態を管理
  const checkBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = node.indeterminate || false;
    }
  }, [node.indeterminate]);

  const handleCheck = (newChecked: boolean) => {
    onCheck(node.id, newChecked, true);
  };

  const handleChildCheck = (childId: string, childChecked: boolean) => {
    onCheck(childId, childChecked, false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2">
      <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
        {node.children && node.children.length > 0 ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-6 h-6 p-0 text-gray-500" 
            onClick={toggleExpand}
          >
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        ) : (
          <div className="w-6" />
        )}
        <Checkbox
          checked={node.checked}
          onCheckedChange={handleCheck}
          // @ts-expect-error
          ref={checkBoxRef}
        />
        {node.icon && <span className="text-xl mr-2">{node.icon}</span>}
        <span className="text-lg font-medium">{node.label}</span>
      </div>
      {node.children && expanded && (
        <div className="ml-6 mt-1 border-l-2 border-gray-200 pl-2">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              onCheck={handleChildCheck}
              parentChecked={node.checked && !node.indeterminate}
            />
          ))}
        </div>
      )}
    </div>
  );
};
