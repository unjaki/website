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
    title: 'Operating Procedures & Regulations (OP&R)',
    summary: 'Core guidelines for field operations, communication protocols, and chain of command within GSMC.',
    url: 'https://docs.google.com/document/d/1Qq5clu6VuMCpwNRq6oLzA8Jd2Lv42SnKJefeaVRPfV0/edit?usp=sharing',
    category: 'Operational',
  },
  {
    id: 'promo-01',
    title: 'Promotional Document',
    summary: 'Comprehensive guide to stabilizing trauma patients in high-intensity combat zones.',
    url: 'https://docs.google.com/document/d/1ht5Jt3RgsTbYdngya2hHQclYXtkJMUxGq_fYZ7BP1jk/edit?usp=sharing',
    category: 'Promotional',
  },
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
            description: 'The 29th Combat Medic Battalion is the Ground Service Medical Corps’ roleplay-focused battalion. Members of the 29th are trained in realistic medical procedures and are expected to complete three key certifications: First Aid, Trauma, and Medical.',
            logoUrl: '/logos/29th_Logo_Large.webp',
            children: [
              {
              id: 'cbrn',
              name: '7th CBRN Defense Regiment',
              description: 'The 7th CBRN is a group of people which are committed to studying epidemiology, virus control, causes, signs and anything in relation to infectious viruses. It’s a more centralized and complicated detachment of the 29th battalion; which in turn makes it highly selective and is really only good for members which are truly interested in MEDLARP.',
              logoUrl: '/logos/7th_CBRN_Logo.webp',
              }
            ]
          },
          {
            id: '33cmb',
            name: '33rd Combat Medic Battalion',
            description: 'The 33rd Combat Medic Battalion serves as the Ground Service Medical Corps combat-oriented battalion, specializing in third-person shooter and field medical support. Members of the 33rd act as frontline healers during raids, defences, and Stratocracy events, ensuring sustained combat readiness across all engagements.',
            logoUrl: '/logos/33rd_Logo_Large.webp',
            children: [
              {
                id: 'medsoc',
                name: 'Medical Special Operations Command (MEDSOC)',
                description: 'The Medical Special Operations (MEDSOC) serves as the primary elite healing-oriented division of the Noobic Stratocracy. Tasked with providing supporting to both Ground Service Personnel and the 5th Noobic Special Operations Command, MEDSOC operatives are always prepared to assist their fellow Noobians; on any battlefield, at any time.',
                logoUrl: '/logos/MEDSOC_Logo.webp',
              }
            ]
          },
          {
            id: 'oam',
            name: 'Office of Administration and Management (OAM)',
            description: 'The Office of Administration and Management serves as the Headquarters Platoon under MEDCOM, functioning as the command and oversight body of the Ground Service Medical Corps in lore. Its members oversee essential administrative operations, including moderation, promotions, media, auditing, and internal reporting.',
            logoUrl: '/logos/oam.webp',
            children: [
              {
                id: 'fas',
                name: 'Foreign Affairs Sector (FAS)',
                description: 'The FAS is the custom made sub-divison for foreign affairs related issues, it could only be joined by officers.'
              }
            ]
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
