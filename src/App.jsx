import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
//import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import WhatWeDo from './components/home/WhatWeDo';
import OurJourney from './components/home/OurJourney';
import WhyChooseMGP from './components/home/WhyChooseMGP';

import About from './components/home/About';
import Projects from './components/home/Projects';

function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <OurJourney />
      <WhyChooseMGP />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        {/* Temporary fallback for pages not built yet */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;