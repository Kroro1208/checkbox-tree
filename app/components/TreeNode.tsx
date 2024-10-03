/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export interface CuisineData {
  id: string;
  label: string;
  icon?: string;
  checked?: boolean;
  indeterminate?: boolean;
  children?: CuisineData[];
}

export interface TreeNodeProps {
  node: CuisineData;
  onCheck: (id: string, checked: boolean, isParent: boolean) => void;
  parentChecked?: boolean;
}

export const TreeNode: React.FC<TreeNodeProps> = ({ node, onCheck, parentChecked = false }) => {
  const [checked, setChecked] = useState(node.checked || false);
  const [indeterminate, setIndeterminate] = useState(node.indeterminate || false);
  const [expanded, setExpanded] = useState(false);

  const updateSelfState = useCallback(() => {
    if (node.children && node.children.length > 0) {
      const allChecked = node.children.every(child => child.checked);
      const someChecked = node.children.some(child => child.checked || child.indeterminate);
      setChecked(allChecked);
      setIndeterminate(!allChecked && someChecked);
    } else {
      setChecked(node.checked || false);
      setIndeterminate(false);
    }
  }, [node.children, node.checked]);

  useEffect(() => {
    if (parentChecked) {
      setChecked(true);
      setIndeterminate(false);
    } else {
      updateSelfState();
    }
  }, [parentChecked, updateSelfState]);

  const handleCheck = useCallback((newChecked: boolean) => {
    setChecked(newChecked);
    setIndeterminate(false);
    onCheck(node.id, newChecked, true);
  }, [node.id, onCheck]);

  const handleChildCheck = useCallback((childId: string, childChecked: boolean) => {
    onCheck(childId, childChecked, false);
    updateSelfState();
  }, [onCheck, updateSelfState]);

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
          checked={checked}
          onCheckedChange={handleCheck}
          // @ts-expect-error
          ref={(el: HTMLInputElement | null) => {
            if (el) {
              el.indeterminate = indeterminate;
            }
          }}
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
              parentChecked={checked && !indeterminate}
            />
          ))}
        </div>
      )}
    </div>
  );
};