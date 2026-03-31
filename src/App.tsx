/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Classes from './components/Classes';
import Skills from './components/Skills';
import Quests from './components/Quests';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-slate-200 selection:bg-arcane/30">
      <Navbar />
      <Hero />
      <Lore />
      <Classes />
      <Skills />
      <Quests />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
