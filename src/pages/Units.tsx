/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { UNITS, GSMC_DESCRIPTION } from '../constants';
import UnitTree from '../components/UnitTree';

export default function Units() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 mb-6 border border-black/10 text-[10px] font-mono uppercase tracking-[0.2em] rounded-full bg-white shadow-sm"
          >
            GSMC Organization CHART
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-black to-gray-500"
          >
            Structure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-lg mx-auto leading-relaxed border-l-2 border-red-600 pl-4 text-left"
          >
            Inter-departmental hierarchy of the Ground Service Medical Corps. Click nodes to expand divisions and view operational data.
          </motion.p>
        </header>

        <section className="relative">
          <UnitTree tree={UNITS} />
        </section>
      </div>
    </main>
  );
}
