/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, UserCheck, GraduationCap, Users, Shield, Globe, ExternalLink, HandHeart } from 'lucide-react';

interface DiscordData {
  guildName: string;
  memberCount: number;
  presenceCount: number;
  bannerUrl: string | null;
  iconUrl: string | null;
}

interface RobloxData {
  name: string;
  memberCount: number;
  description: string;
}

export default function Join() {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [robloxData, setRobloxData] = useState<RobloxData | null>(null);
  const [robloxThumb, setRobloxThumb] = useState<string | null>(null);
  const ROBLOX_GROUP_ID = '288142915';

  useEffect(() => {
    // Fetch Discord Data
    fetch('/api/discord/banner/aSXDfk9Uva')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setDiscordData(data))
      .catch(err => console.error('Discord error:', err));

    // Fetch Roblox Data
    fetch(`/api/roblox/group/${ROBLOX_GROUP_ID}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setRobloxData(data))
      .catch(err => console.error('Roblox error:', err));

    // Fetch Roblox Thumbnail
    fetch(`/api/roblox/thumbnail/${ROBLOX_GROUP_ID}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data.data && data.data[0]) {
          setRobloxThumb(data.data[0].imageUrl);
        }
      })
      .catch(err => console.error('Thumbnail error:', err));
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-32 bg-[#070907]">
      <header className="mb-16 relative">
        <div className="absolute -left-12 top-0 h-full w-[1px] bg-neutral-900 hidden lg:block" />
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-sans text-white italic uppercase leading-none">
          Enlist_GSMC
        </h1>
        <div className="flex items-center gap-3">
           <div className="h-[2px] w-12 bg-emerald-500" />
           <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] font-black font-mono">Official Recruitment Protocol v.2024</p>
        </div>
      </header>

      {/* Group Info Section (Vanguard style) */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Roblox Group Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-neutral-950 border border-neutral-900 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-emerald-400">
            <Globe className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              {robloxThumb ? (
                <img src={robloxThumb} alt="Group Logo" className="w-16 h-16 border border-neutral-800" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-500" />
                </div>
              )}
              <div>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter leading-none mb-1 text-white">
                  {robloxData?.name || 'GSMC_GROUP'}
                </h3>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Roblox_Infrastructure</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-neutral-900/40 border border-neutral-900/60">
                <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Personnel_Count</span>
                <span className="text-2xl font-black font-sans text-white">
                  {robloxData?.memberCount?.toLocaleString() || '3,000+'}
                </span>
              </div>
              <div className="p-4 bg-neutral-900/40 border border-neutral-900/60">
                <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Status</span>
                <span className="text-2xl font-black font-sans text-emerald-400">ACTIVE</span>
              </div>
            </div>

            <a 
              href={`https://www.roblox.com/groups/${ROBLOX_GROUP_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all"
            >
              Open_Group_Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Discord Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-neutral-950 border border-neutral-900 relative overflow-hidden"
        >
          {discordData?.bannerUrl && (
            <div className="absolute inset-0 z-0">
              <img src={discordData.bannerUrl} alt="Banner" className="w-full h-full object-cover opacity-20 filter grayscale" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
            </div>
          )}
          
          <div className="relative z-10 p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              {discordData?.iconUrl ? (
                <img src={discordData.iconUrl} alt="GSMC Discord Icon" className="w-16 h-16 border border-neutral-850 object-cover shadow-lg" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center rounded-lg shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
              )}
              <div>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter leading-none mb-1 text-white">
                  {discordData?.guildName || 'Discord_GSMC'}
                </h3>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Comms_Network_V3</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
              <div>
                <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Total_Members</span>
                <span className="text-xl font-black font-sans text-white">
                  {discordData?.memberCount?.toLocaleString() || '---'}
                </span>
              </div>
              <div>
                <span className="block text-[8px] font-mono text-emerald-500/60 uppercase tracking-widest mb-1">In_Lobby</span>
                <span className="text-xl font-black font-sans text-emerald-400">
                  {discordData?.presenceCount?.toLocaleString() || '---'}
                </span>
              </div>
            </div>

            <a 
              href="https://discord.gg/aSXDfk9Uva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 border-2 border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all mt-4"
            >
              Initialize_Invite <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </section>

      <div className="space-y-4">
        {[
          { icon: ClipboardList, step: '01', title: 'Application_Phase', desc: "Submit your initial request via our Discord server's enlistment channel. Ensure you meet the 3 days after enlisting into the stratocracy requirement before applying." },
          { icon: GraduationCap, step: '02', title: 'Probation_Training', desc: "Enlistees enter a probationary period (Internship) where they undergo Intern Orientation, much like the BTs covering everything you need to know about the GSMC." },
          { icon: HandHeart, step: '03', title: 'Welcome_To_GSMC!', desc: 'Welcome to the GSMC and hopefully you will enjoy your journey here with us!' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start p-10 bg-neutral-950 border border-neutral-900 hover:border-emerald-500/20 transition-all group shadow-sm"
          >
            <div className="flex-shrink-0 w-20 h-20 border-2 border-neutral-800 flex flex-col items-center justify-center font-mono font-black bg-neutral-900">
              <span className="text-[10px] text-gray-500 leading-none mb-1">STEP</span>
              <span className="text-3xl text-emerald-400 leading-none">{item.step}</span>
            </div>
            <div className="pt-2">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-4 uppercase tracking-tighter text-white font-sans">
                <item.icon className="w-6 h-6 text-emerald-400" /> {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm uppercase tracking-wider max-w-2xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-16 border-2 border-neutral-900 bg-neutral-950 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic text-white font-sans">Mandatory Induction Requirement</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
           <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 px-4 py-2 bg-neutral-900 tracking-[0.2em] font-black uppercase">Discord_Active</span>
           <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 px-4 py-2 bg-neutral-900 tracking-[0.2em] font-black uppercase">Voice_Comms_Req</span>
           <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 px-4 py-2 bg-neutral-900 tracking-[0.2em] font-black uppercase">Tactical_Aptitude</span>
        </div>
        
        <button 
          onClick={() => window.open('https://discord.gg/aSXDfk9Uva', '_blank')}
          className="relative px-16 py-6 bg-emerald-600 text-white uppercase tracking-[0.4em] font-black hover:bg-emerald-500 transition-all font-mono text-sm rounded-none border-b-4 border-neutral-950 group"
        >
          <span className="relative z-10">Process_Enlistment</span>
          <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        
        <div className="mt-12 text-[7px] font-mono text-gray-500 uppercase tracking-[0.5em]">
          Ref_Archive::Recruitment_Batch_Alpha // Authorized_By_Corps_Command
        </div>
      </motion.div>
    </main>
  );
}
