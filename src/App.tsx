/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import RouteTabs from './components/RouteTabs';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Navigation />
        <main>
          <Hero />
          <RouteTabs />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
