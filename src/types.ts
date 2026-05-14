/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SubUnit {
  id: string;
  name: string;
  description: string;
}

export interface Unit {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  children?: Unit[];
}

export interface Document {
  id: string;
  title: string;
  summary: string;
  url: string;
  category: string;
}
