/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Unit } from '../types';
import { ChevronRight, Info, Activity } from 'lucide-react';

interface UnitTreeNodeProps {
  unit: Unit;
  level?: number;
  isFirst?: boolean;
  isLast?: boolean;
  isOnlyChild?: boolean;
  hasParent?: boolean;
}

export const UnitTreeNode: React.FC<UnitTreeNodeProps> = ({ 
  unit, 
  level = 0, 
  isFirst = false, 
  isLast = false, 
  isOnlyChild = false,
  hasParent = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const hasChildren = unit.children && unit.children.length > 0;

  return (
    <div className="relative flex flex-col items-center px-6">
      {/* Connector lines from parent */}
      {hasParent && (
        <div className="relative w-full flex justify-center h-12">
          {/* Horizontal line segments */}
          <div 
            className={`
              absolute top-0 h-[1px] bg-[#1a1a1a]/40
              ${isOnlyChild ? 'hidden' : ''}
              ${isFirst ? 'left-1/2 right-0' : isLast ? 'left-0 right-1/2' : 'left-0 right-0'}
            `} 
          />
          {/* Vertical segment entering the node */}
          <div className="w-[1px] h-full bg-[#1a1a1a]/40" />
        </div>
      )}

      {/* Unit Node */}
      <div 
        className="relative group px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          onClick={() => setShowInfo(!showInfo)}
          className={`
            relative z-10 px-8 py-5 border border-[#1a1a1a]/20 rounded-none bg-white
            hover:bg-[#fcfaf7] transition-all duration-200 flex flex-col items-start gap-2 min-w-[280px]
            ${showInfo ? 'border-[#1a1a1a] shadow-[4px_4px_0px_rgba(0,0,0,0.05)]' : 'hover:border-[#1a1a1a]/40'}
          `}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Index style tab */}
          <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#1a1a1a]/5 text-[7px] font-mono font-bold text-[#1a1a1a]/40 uppercase tracking-widest border-l border-b border-[#1a1a1a]/10">
            SEC_0{level + 1}
          </div>
          
          <div className="flex items-center gap-3 w-full">
            <div className={`w-1 h-5 ${hasChildren ? 'bg-[#2c5d3f]' : 'bg-gray-300'}`} />
            <span className="text-xs font-black uppercase tracking-[0.2em] font-sans text-[#1a1a1a] leading-tight">{unit.name}</span>
          </div>
          
          <div className="mt-1 flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-[#2c5d3f] font-mono font-black tracking-widest uppercase">Operational</span>
            </div>
            <div className="text-gray-400">
              <Info className="w-3 h-3 hover:text-[#1a1a1a] transition-colors" />
            </div>
          </div>

          {/* Stamped-look texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        </motion.button>

        {/* Logo Popup on Hover - Postcard Style */}
        <AnimatePresence>
          {isHovered && unit.logoUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: '-50%', y: -10, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: '-50%', y: -10, rotate: 2 }}
              className="absolute bottom-full left-1/2 mb-8 pointer-events-none z-50 px-4"
            >
              <div className="bg-white p-4 border border-[#1a1a1a]/20 shadow-xl w-48 h-48 flex items-center justify-center relative transform -rotate-1">
                <img 
                  src={unit.logoUrl} 
                  alt={unit.name}
                  className="w-full h-full object-contain filter contrast-125 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 right-2 text-[6px] font-mono text-[#1a1a1a]/20 tracking-widest">GSMC_PH_882</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Overlay on Click - Field Report Style */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-8 border border-[#1a1a1a]/20 bg-[#f9f7f4] text-left relative overflow-hidden shadow-sm"
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 border border-[#1a1a1a]/10 flex items-center justify-center flex-shrink-0 bg-white">
                  <Activity className="w-6 h-6 text-[#2c5d3f]" />
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]">Case_Notes</h4>
                    <div className="h-[1px] flex-grow bg-[#1a1a1a]/10" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-mono uppercase tracking-wide border-l-2 border-[#2c5d3f]/30 pl-6 py-1">
                    {unit.description}
                  </p>
                  <div className="pt-4 flex justify-between items-center text-[7px] font-mono text-gray-500 uppercase tracking-[0.4em] border-t border-[#1a1a1a]/5">
                    <span>ID: US/MED/{unit.id.substring(0, 8).toUpperCase()}</span>
                    <span>Status: ACTIVE_COMMAND</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-10px] right-[-10px] text-4xl font-black text-[#1a1a1a]/[0.02] select-none pointer-events-none uppercase">Confidential</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Children Container */}
      {hasChildren && (
        <div className="relative flex flex-col items-center">
          {/* Vertical line down from current node */}
          <div className="w-[1px] h-12 bg-[#1a1a1a]/40" />
          
          <div className="flex items-start shrink-0">
            {unit.children!.map((child, idx) => (
              <UnitTreeNode 
                key={child.id} 
                unit={child} 
                level={level + 1}
                isFirst={idx === 0}
                isLast={idx === unit.children!.length - 1}
                isOnlyChild={unit.children!.length === 1}
                hasParent={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default function UnitTree({ tree }: { tree: Unit[] }) {
  return (
    <div className="w-full overflow-x-auto pb-20 scrollbar-hide py-32">
      <div className="inline-flex min-w-full justify-center px-8">
        {tree.map(rootUnit => (
          <UnitTreeNode key={rootUnit.id} unit={rootUnit} />
        ))}
      </div>
    </div>
  );
}
