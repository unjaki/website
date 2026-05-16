/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { UNITS } from '../constants';
import { Unit } from '../types';

export default function Units() {
  const [history, setHistory] = useState<Unit[]>([UNITS[0]]);
  const currentUnit = history[history.length - 1];

  const handleSelectSubUnit = (unit: Unit) => {
    setHistory([...history, unit]);
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-black/10 text-[10px] font-mono uppercase tracking-[0.2em] rounded-full bg-white shadow-sm"
          >
            GSMC Organization VIEWER
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-black to-gray-500"
          >
            Command Structure
          </motion.h1>
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-mono uppercase tracking-[0.1em] text-gray-400 mb-8">
            {history.map((unit, index) => (
              <div key={unit.id} className="flex items-center">
                {index > 0 && <ChevronRight className="w-3 h-3 mx-1" />}
                <button 
                  onClick={() => setHistory(history.slice(0, index + 1))}
                  className={`hover:text-[#2c5d3f] transition-colors ${index === history.length - 1 ? 'text-[#2c5d3f] font-bold' : ''}`}
                >
                  {unit.id}
                </button>
              </div>
            ))}
          </nav>
        </header>

        <section className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUnit.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-black/5 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {currentUnit.logoUrl && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden p-4 border border-black/5 flex items-center justify-center"
                  >
                    <img 
                      src={currentUnit.logoUrl} 
                      alt={currentUnit.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">{currentUnit.name}</h2>
                    {history.length > 1 && (
                      <button 
                        onClick={handleGoBack}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black flex items-center gap-2 text-[10px] font-mono uppercase"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>
                    )}
                  </div>
                  
                  <div className="prose prose-sm text-gray-600 mb-12">
                    <p className="leading-relaxed whitespace-pre-wrap">{currentUnit.description}</p>
                  </div>

                  {currentUnit.children && currentUnit.children.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#2c5d3f] font-black italic flex items-center gap-2">
                        <Info className="w-3 h-3" />
                        Direct Sub-Units
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentUnit.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleSelectSubUnit(child)}
                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-[#2c5d3f]/5 border border-black/5 hover:border-[#2c5d3f]/20 rounded-xl group transition-all text-left"
                          >
                            <div className="flex flex-col">
                              <span className="font-bold text-[#1a1a1a] group-hover:text-[#2c5d3f] transition-colors">{child.name}</span>
                              <span className="text-[10px] font-mono uppercase text-gray-400">{child.id}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#2c5d3f] group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
