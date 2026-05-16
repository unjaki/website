/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cross } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { DISCORD_CONFIG, NAV_LINKS } from '../constants';

export default function Navigation() {
  return (
    <nav className="border-b border-[#1a1a1a]/10 py-4 px-8 flex items-center justify-between sticky top-0 bg-[#f2efea]/90 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#1a1a1a]/20 bg-white p-1.5 overflow-hidden transition-all group-hover:border-[#1a1a1a]">
            <img 
              src={DISCORD_CONFIG.logoUrl} 
              alt="GSMC" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-45"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg></div>`;
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter uppercase font-display leading-none text-[#1a1a1a]">GSMC</span>
            <span className="text-[8px] font-mono tracking-[0.2em] text-[#2c5d3f] font-black italic">STRATOCRACY_MED_CORPS</span>
          </div>
        </NavLink>
      </div>

      <div className="flex gap-1 items-center">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) => 
              `text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 transition-all font-mono border-b-2 hover:bg-[#1a1a1a]/5 ${
                isActive 
                  ? 'border-[#1a1a1a] text-[#1a1a1a] bg-[#1a1a1a]/5' 
                  : 'border-transparent text-gray-500 hover:text-[#1a1a1a]'
              }`
            }
            id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
