/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit, Document } from './types';

export const DISCORD_CONFIG = {
  guildId: '123456789012345678', // Replace with real GSMC Guild ID
  vanityCode: 'gsmc',
  fallbackBanner: 'https://images.unsplash.com/photo-1579346487030-dfb613ac3673?auto=format&fit=crop&q=80&w=2000',
  logoUrl: '/logos/GSMC_Logov2.webp',
};

export const GSMC_DESCRIPTION = "The Ground Service Medical Corps is responsible for supporting the wider Stratocratic military by providing emergency medical care to wounded servicemen and servicewomen. They can be found near the frontlines, often providing treatment to a wide range of injuries.\n\nThe GSMC does a combination of LARP and combat on external & internal maps through the battalion system with the 29th Battalion focusing on the LARP aspects & the 33rd Battalion focusing on the Combat Medic aspect with a variety of unique sub-divisions under each with both catering to a different play-style!";

export const DOCUMENTS: Document[] = [
  {
    id: 'sop-01',
    title: 'Standard Operating Procedures (SOP)',
    summary: 'Core guidelines for field operations, communication protocols, and chain of command within GSMC.',
    url: '#',
    category: 'Operational',
  },
  {
    id: 'fm-med-01',
    title: 'Field Manual: Battlefield Medicine',
    summary: 'Comprehensive guide to stabilizing trauma patients in high-intensity combat zones.',
    url: '#',
    category: 'Medical',
  },
  {
    id: 'gs-01',
    title: 'Grooming & Uniform Standards',
    summary: 'Regulatory documentation regarding visual identity and professionalism of GSMC personnel.',
    url: '#',
    category: 'Administrative',
  },
  {
    id: 'tc-01',
    title: 'Tactical Communications',
    summary: 'Encryption keys, radio codes, and distress signal protocols for remote operations.',
    url: '#',
    category: 'Operational',
  }
];

export const UNITS: Unit[] = [
  {
    id: 'gsmc',
    name: 'Ground Service Medical Corps (GSMC)',
    description: 'The primary command and coordination unit of the corps, ensuring all medical operations across all battalions are standardized and supported.',
    logoUrl: '/logos/GSMC_Logov2.webp',
    children: [
      {
        id: 'medcom',
        name: 'Medical Command (MEDCOM)',
        description: 'The secondary command layer, overseeing operational readiness and tactical execution of medical battalions.',
        children: [
          {
            id: '29cmb',
            name: '29th Combat Medic Battalion',
            description: 'The 29th Battalion focuses on the LARP aspects of the Ground Service Medical Corps through the battalion system, emphasizing immersive roleplay and standard medical procedures.',
            logoUrl: '/logos/29th_Logo_Large.webp',
          },
          {
            id: '33cmb',
            name: '33rd Combat Medic Battalion',
            description: 'The 33rd Combat Medic Battalion focuses on the Combat Medic aspect of the corps with a variety of unique sub-divisions. Members act as frontline healers during high-intensity engagements.',
            logoUrl: '/logos/33rd_Logo_Large.webp',
            children: [
              {
                id: 'medsoc',
                name: 'Medical Special Operations Command (MEDSOC)',
                description: 'Elite medical rapid response team specializing in high-intensity combat extractions and behind-enemy-lines stabilization.',
              }
            ]
          },
          {
            id: 'oam',
            name: 'Office of Administration and Management (OAM)',
            description: 'Responsible for the overarching strategic planning, logistics, and resource management and personnel oversight within the Ground Service Medical Corps.',
            logoUrl: '/logos/oam.webp',
          }
        ]
      }
    ]
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Units', href: '/units' },
  { label: 'Documents', href: '/documents' },
  { label: 'About Us', href: '/about' },
  { label: 'How to Join', href: '/join' },
];
