/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Units from './pages/Units';
import Officers from './pages/Officers';
import Documents from './pages/Documents';
import About from './pages/About';
import Join from './pages/Join';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070907] text-gray-200 selection:bg-emerald-500/20">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Routes>

        <footer className="mt-32 pb-12 text-center text-xs text-gray-600 font-mono uppercase tracking-[0.3em] border-t border-white/5 pt-12">
          GSMC // Property of the Office of Administration and Management // {new Date().getFullYear()} // SYSTEM_ROOT_AUTH
        </footer>
      </div>
    </BrowserRouter>
  );
}
