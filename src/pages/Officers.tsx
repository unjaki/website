/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Activity, Shield, Award, Users, Crosshair } from 'lucide-react';

interface Officer {
  name: string;
  rank: string;
  role: string;
  bio: string;
  certs: string[];
  color: string;
  image?: string;
}

interface Cluster {
  id: string;
  name: string;
  logo: string;
  description: string;
  co: Officer;
  xo: Officer;
  medAdvisory: Officer;
  surgicalCoordinator?: Officer;
}

const OFFICERS_DATA: Cluster[] = [
  {
    id: "medcom",
    name: "Medical Command Headquarters (MEDCOM)",
    logo: "/logos/GSMC_Logov2.webp",
    description: "Supreme administrative and operations unit defining the strategic direction and resource management of the entire Medical Corps.",
    co: {
      name: "Colonel Ryabckawesome",
      rank: "COL / O-6",
      role: "Surgeon General (CO)",
      bio: "WIP",
      certs: ["COMMAND_OPS", "SOP_AUDIT", "TRAUMA_LEAD"],
      color: "from-emerald-950/20 via-neutral-900/40 to-[#121512]"
    },
    xo: {
      name: "VACANT",
      rank: "MAJ / O-4",
      role: "Vice Surgeon General (XO)",
      bio: "WIP",
      certs: ["TRAUMA_LEAD", "ADMIN_CHIEF", "OPERATIONS_CMD"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]"
    },
    medAdvisory: {
      name: "VACANT",
      rank: "CPT / O-3",
      role: "Surgical Director (3ic)",
      bio: "WIP",
      certs: ["FIELD_TRIAGE", "DIPLOMATIC_SEC", "ADVISORY"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]"
    }
  },
  {
    id: "33cmb",
    name: "33rd Combat Medic Battalion (Combat Ops)",
    logo: "/logos/33rd_Logo_Large.webp",
    description: "Rapid deployment TPS infantry coordination, combat defense tactics, active triage response, and high-threat medical escort duties.",
    co: {
      name: "Corporal 5sls",
      rank: "CPL / E-4",
      role: "Battalion Commander (CO)",
      bio: "WIP",
      certs: ["TPS_TACTICS_LEAD", "COMBAT_TRIAGE", "MEDSOC_DIR"],
      color: "from-[#2c5d3f]/15 via-neutral-900/40 to-[#121512]"
    },
    xo: {
      name: "Corporal shadow",
      rank: "CPL / E-4",
      role: "Battalion Executive Officer (XO)",
      bio: "WIP",
      certs: ["COMBAT_TACTICIAN", "TACTICAL_CASUALTY_CARE"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]",
      image: "/images/33rd/shadow112345678920.webp"
    },
    medAdvisory: {
      name: "VACANT",
      rank: "N/A",
      role: "Med. Advisory Officer",
      bio: "WIP",
      certs: ["ADVISORY"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]"
    },
    surgicalCoordinator: {
      name: "Squad Sgt. inter8ct",
      rank: "SQD SGT / E-6",
      role: "Surgical Coordinator",
      bio: "WIP",
      certs: ["MEDSOC_OPERATIONS", "SECURITY_DETAIL", "SURGICAL_OPS"],
      color: "from-[#2c5d3f]/10 via-neutral-900/40 to-[#121512]",
      image: "/images/33rd/inter8act.webp"
    }
  },
  {
    id: "29cmb",
    name: "29th Combat Medic Battalion (Roleplay Ops)",
    logo: "/logos/29th_Logo_Large.webp",
    description: "Specialized in high-fidelity immersive roleplay operations, complex medical certifications, epidemiology, and specialized CBRN defense.",
    co: {
      name: "Corporal Somedude",
      rank: "CPL / E-4",
      role: "Battalion Commander (CO)",
      bio: "WIP",
      certs: ["MEDLARP_INSTRUCTOR", "TRAUMA_EXPERT", "CBRN_LEAD"],
      color: "from-emerald-950/20 via-neutral-900/40 to-[#121512]",
      image: "/images/29th/Some_Dudette85.webp"
    },
    xo: {
      name: "Specialist Whitestar",
      rank: "SPC / E-4",
      role: "Battalion Executive Officer (XO)",
      bio: "WIP",
      certs: ["TRAUMA_CHIEF", "ADMIN_LOGS", "SOP-01_CERT"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]",
      image: "/images/29th/Whitestarbowler121.webp"
    },
    medAdvisory: {
      name: "VACANT",
      rank: "N/A",
      role: "Med. Advisory Officer",
      bio: "WIP",
      certs: ["CBRN_FIELD_SPEC", "FIRST_AID_TRAINER"],
      color: "from-[#2c5d3f]/10 via-neutral-900/40 to-[#121512]"
    },
    surgicalCoordinator: {
      name: "Corporal UpLikeWoah",
      rank: "CPL / E-4",
      role: "Surgical Coordinator",
      bio: "WIP",
      certs: ["SURGICAL_OPS", "CLINICAL_TRAINER", "TRAUMA_TRAINER"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]",
      image: "/images/29th/UpLikeWoah.webp"
    }
  },
  {
    id: "oam",
    name: "Office of Administration and Management (OAM)",
    logo: "/logos/oam.webp",
    description: "Acts as the command and oversight body of the Ground Service Medical Corps. Manages administrative files, moderation audits, and foreign affairs.",
    co: {
      name: "Corporal Hung",
      rank: "CPL / E-4",
      role: "Chief of Staff & OAM Lead",
      bio: "WIP",
      certs: ["ADMIN_LEAD", "MODERATION_CHIEF", "ROSTER_AUDIT"],
      color: "from-emerald-950/20 via-neutral-900/40 to-[#121512]",
      image: "/images/OAM/hung.webp"
    },
    xo: {
      name: "Hosshinova",
      rank: "Noobic Executive Staff",
      role: "Deputy OAM Lead",
      bio: "WIP",
      certs: ["ADMIN_OPS", "SOP_COMPLIANCE", "DISCIPLINARY"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]",
      image: "/images/OAM/Hosshinova.webp"
    },
    medAdvisory: {
      name: "Captain Amiareine",
      rank: "CPT / O-3",
      role: "Med. Advisory Officer",
      bio: "WIP",
      certs: ["DATA_SECURITY", "REGISTRY_MGMT", "ADVISORY"],
      color: "from-zinc-900/30 via-neutral-900/40 to-[#121512]",
      image: "/images/OAM/amiareine.webp"
    },
    surgicalCoordinator: {
      name: "Corporal be_goodplease",
      rank: "CPL / E-4",
      role: "Surgical Coordinator",
      bio: "WIP",
      certs: ["SURGICAL_OPS", "FAS_DIPLOMACY", "STAFF_COORD"],
      color: "from-[#2c5d3f]/10 via-neutral-900/40 to-[#121512]",
      image: "/images/OAM/be_goodplease.webp"
    }
  }
];

// Tactical Bio-Scanner Render component
function TacticalAvatar({ name, rank }: { name: string; rank: string }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#0c0e0c] flex items-center justify-center overflow-hidden">
      {/* Grid Overlay block inside portrait container */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '12px 12px'
        }}
      />
      
      {/* Biometric Laser Scanning Line */}
      <motion.div
        animate={{
          y: ["-5%", "105%", "-5%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 h-[1.5px] bg-[#22c55e]/70 shadow-[0_0_10px_rgba(34,197,94,0.6)] z-10"
      />

      {/* Reticle Radar Circle */}
      <div className="absolute w-36 h-36 border border-[#22c55e]/15 rounded-full flex items-center justify-center">
        <div className="absolute w-24 h-24 border border-[#22c55e]/10 border-dashed rounded-full" />
        <div className="absolute w-44 h-44 border-[0.5px] border-dashed border-[#22c55e]/5 rounded-full animate-spin [animation-duration:30s]" />
      </div>

      {/* Stylized Combat Infantry / Medic emblem */}
      <div className="relative z-10 text-emerald-500/80 flex flex-col items-center select-none">
        <div className="w-10 h-10 relative flex items-center justify-center scale-90 filter drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">
          {/* Vertical bar */}
          <div className="absolute w-2.5 h-10 bg-emerald-400 rounded-sm" />
          {/* Horizontal bar */}
          <div className="absolute w-10 h-2.5 bg-emerald-400 rounded-sm" />
          {/* Outer diamond frame to give medical larp/combat elite touch */}
          <div className="absolute w-7 h-7 border border-emerald-300 rotate-45 opacity-60" />
        </div>
        <span className="text-[7px] tracking-[0.25em] font-bold text-emerald-400/70 mt-2 font-mono uppercase">L_BIO_ACTIVE</span>
      </div>

      {/* Tactical Corner Brackets */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#22c55e]/30" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#22c55e]/30" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#22c55e]/30" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#22c55e]/30" />
    </div>
  );
}

// Single Officer Card rendering (upright and straight, no diagonals/tilts)
function OfficerCard({ member, isApex = false }: { member: Officer; isApex?: boolean }) {
  return (
    <div 
      className="group relative flex flex-col justify-between transition-all duration-300 bg-neutral-950 border border-neutral-800/80 hover:border-[#22c55e]/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] rounded-xl overflow-hidden h-[340px] w-full cursor-pointer"
      id={`officer-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${member.color} -z-10`} />

      {/* Card Content Stage: The Full Portrait Image or Hologram Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {member.image ? (
          <div className="relative w-full h-full">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover object-top filter brightness-[0.85] group-hover:brightness-[0.35] transition-all duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark shadow at bottom overlaying non-hover state */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        ) : (
          <div className="relative w-full h-full opacity-65 group-hover:opacity-20 transition-opacity duration-300">
            <TacticalAvatar name={member.name} rank={member.rank} />
          </div>
        )}
      </div>

      {/* Hover Info Overlay -reveals detailed biometric, bio and qualifications */}
      <div className="absolute inset-0 bg-[#070907]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-between p-5 pb-8">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3">
            <span className="text-[8px] font-mono tracking-widest text-[#22c55e] font-black uppercase">
              {member.role}
            </span>
            <span className="text-[7px] font-mono text-gray-500 uppercase">SYS_ACTIVE</span>
          </div>
          
          <p className="text-[11px] text-gray-300 leading-relaxed font-sans font-medium line-clamp-[7]">
            {member.bio}
          </p>
        </div>

        <div>
          <span className="text-[8px] font-mono text-gray-500 uppercase block mb-1.5 font-bold">Approved Qualifications</span>
          <div className="flex flex-wrap gap-1">
            {member.certs.map((cert) => (
              <span 
                key={cert} 
                className="text-[7px] font-mono tracking-wider font-bold bg-[#141b14] text-emerald-400 px-1.5 py-0.5 border border-emerald-500/10 rounded-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Name - Rank tags under each member (Centered and clean, locked on top) */}
      <div 
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-neutral-950 border border-neutral-800 group-hover:border-emerald-400 px-3.5 py-1.5 rounded-md min-w-[85%] shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3 text-xs tracking-wide transition-all duration-300 z-20"
      >
        <span className="font-bold text-gray-200 truncate">{member.name}</span>
        <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-900/40 px-1 border border-emerald-500/20 rounded-xs uppercase whitespace-nowrap">
          {member.rank}
        </span>
      </div>

      {/* Top right corner status light */}
      <div className="absolute top-3 right-3 flex gap-1 items-center z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors duration-300 animate-pulse" />
        <span className="text-[7px] font-mono text-gray-500 group-hover:text-emerald-400 transition-colors duration-300 uppercase">RDY</span>
      </div>
    </div>
  );
}

/// Compact, highly optimized Cluster Section Layout
function ClusterSection({ 
  cluster, 
  index 
}: { 
  cluster: Cluster; 
  index: number; 
}) {
  // Determine structured base operations responsive grid classes based on member content & wrapper column width
  let baseGridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 w-full max-w-5xl mx-auto mt-2 pb-6 justify-items-center";
  if (!cluster.surgicalCoordinator) {
    // 3-member cluster: MEDCOM
    baseGridClass = "grid grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-24 max-w-3xl mx-auto w-full mt-2 pb-6 justify-items-center";
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full h-full flex flex-col p-6 md:p-8 bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800/60 rounded-2xl transition-all duration-500 backdrop-blur-md relative"
    >
      {/* Cluster Metadata Header with Logo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-neutral-900 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Logo element directly placed in the top block of each cluster */}
          <div className="relative group/logo shrink-0 mx-auto sm:mx-0">
            <div className="w-20 h-20 md:w-24 md:h-24 border border-neutral-800 hover:border-[#22c55e]/40 bg-neutral-900/80 p-3 rounded-xl transition-all duration-300 flex items-center justify-center relative shadow-lg">
              <img 
                src={cluster.logo} 
                alt={cluster.name} 
                className="w-full h-full object-contain filter brightness-95 contrast-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-75"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>`;
                }}
              />
              <div className="absolute top-0 left-0 w-2 h-1 bg-[#22c55e]/40" />
              <div className="absolute bottom-0 right-0 w-2 h-1 bg-[#22c55e]/40" />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="text-[9px] font-mono uppercase bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-sm">
                SEC_LEVEL // NETWORK_GRID_{index + 1}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display uppercase">{cluster.name}</h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl font-sans leading-relaxed">{cluster.description}</p>
          </div>
        </div>
        
        <div className="text-center md:text-right hidden md:block shrink-0">
          <span className="text-[10px] font-mono text-gray-500 block">UNIT_REGISTRY</span>
          <span className="text-xs font-mono font-bold text-gray-300 uppercase">{cluster.id}_OP_GRID</span>
        </div>
      </div>

      {/* Spearhead Formation within Cluster: Triangular shape with generous spacing */}
      <div className="w-full flex flex-col items-center">
        
        {/* Top/Apex command row: Centered Apical Command (CO) card, matching structural dimensions of other members */}
        <div className="flex flex-col items-center justify-center mb-20 md:mb-24 w-full">
          {/* CO Card - Apex */}
          <div className="w-full max-w-[290px] mx-auto">
            <div className="text-center text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">Apical Command</div>
            <OfficerCard member={cluster.co} isApex={true} />
          </div>
        </div>

        {/* Base of Triangle:arranged horizontally according to responsive dynamic grid with massive spacing */}
        <div className={baseGridClass}>
          <div className="w-full max-w-[290px] mx-auto">
            <div className="text-center text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Base Operations // XO</div>
            <OfficerCard member={cluster.xo} />
          </div>
          <div className="w-full max-w-[290px] mx-auto">
            <div className="text-center text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">
              Base Operations // MED. ADVISORY OFFICER
            </div>
            <OfficerCard member={cluster.medAdvisory} />
          </div>
          {cluster.surgicalCoordinator && (
            <div className="w-full max-w-[290px] mx-auto">
              <div className="text-center text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                Base Operations // SURGICAL COORDINATOR
              </div>
              <OfficerCard member={cluster.surgicalCoordinator} />
            </div>
          )}
        </div>

      </div>
    </motion.section>
  );
}

export default function Officers() {
  return (
    <main 
      className="min-h-screen text-gray-200 relative overflow-hidden"
      style={{
        backgroundColor: '#070907',
        backgroundImage: `
          linear-gradient(to right, rgba(34, 197, 94, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    >
      {/* Decorative Blueprint elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-30">
        {/* Subtle grid elements in corners */}
        <div className="absolute top-[10%] left-6 w-32 h-32 border-l border-t border-[#22c55e]/10" />
        <div className="absolute bottom-[10%] right-6 w-32 h-32 border-r border-b border-[#22c55e]/10" />
        {/* Radial dark vignette to soften the edges */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#050705_100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        
        {/* Page Header */}
        <header className="mb-20 text-center relative max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#22c55e]/20 text-[9px] font-mono uppercase tracking-[0.2em] rounded-full bg-neutral-900/60 text-emerald-400 backdrop-blur-xs shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <Activity className="w-3 h-3 text-emerald-400" />
            GSMC COMMAND REGISTRY
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-500 bg-clip-text text-transparent font-display uppercase"
          >
            Officers Directory
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-gray-400 leading-relaxed font-sans"
          >
            Authorized roster of the Ground Service Medical Corps command networks. Under MEDCOM authorization, these officers supervise clinical certifications, administrative audits, and tactical deployments.
          </motion.p>

          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#22c55e]/20" />
        </header>

        {/* Centered stacked display layout with massive spacing */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 relative w-full items-stretch">
          
          {/* Background Blueprint Connection Lines (Desktop-only) */}
          <div className="absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block -z-10 w-[2.5px]">
            <div className="h-full border-l-[2px] border-dashed border-emerald-500/10" />
          </div>

          {/* 1. MEDCOM CLUSTER (Centered and spacious) */}
          <div className="w-full max-w-5xl mx-auto z-10">
            <div className="text-center mb-6 text-xs font-mono font-bold tracking-[0.25em] text-emerald-400/50 uppercase select-none">
              ▲ SUPREME COMMAND HEADQUARTERS ▲
            </div>
            <ClusterSection cluster={OFFICERS_DATA[0]} index={0} />
          </div>

          {/* 2. 33rd COMBAT BATTALION (Centered and spacious) */}
          <div className="w-full max-w-5xl mx-auto z-10">
            <div className="text-center mb-6 text-xs font-mono font-bold tracking-[0.25em] text-emerald-400/50 uppercase select-none">
              ◀ TACTICAL COMBAT UNIT ◀
            </div>
            <ClusterSection cluster={OFFICERS_DATA[1]} index={1} />
          </div>

          {/* 3. 29th COMBAT BATTALION (Centered and spacious) */}
          <div className="w-full max-w-5xl mx-auto z-10">
            <div className="text-center mb-6 text-xs font-mono font-bold tracking-[0.25em] text-[#22c55e]/50 uppercase select-none">
              ▶ ROLEPLAY SYSTEM BRIGADE ▶
            </div>
            <ClusterSection cluster={OFFICERS_DATA[2]} index={2} />
          </div>

          {/* 4. OAM HEADQUARTERS PLATOON (Centered and spacious) */}
          <div className="w-full max-w-5xl mx-auto z-10">
            <div className="text-center mb-6 text-xs font-mono font-bold tracking-[0.25em] text-emerald-400/50 uppercase select-none">
              ▼ GENERAL STAFF & POLICY ADMINISTRATION ▼
            </div>
            <ClusterSection cluster={OFFICERS_DATA[3]} index={3} />
          </div>

        </div>

      </div>
    </main>
  );
}
