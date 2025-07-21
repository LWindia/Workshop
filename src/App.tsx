import React from 'react';
import HeroSection from './components/HeroSection';
import WhyAttendSection from './components/WhyAttendSection';
import WhoShouldAttendSection from './components/WhoShouldAttendSection';
import ModulesSection from './components/ModulesSection';
import MentorSection from './components/MentorSection';
import RegistrationSection from './components/RegistrationSection';
import VideoTestimonialSection from './components/VideoTestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <HeroSection />
      <ModulesSection />
      <WhyAttendSection />
      <WhoShouldAttendSection />
      <MentorSection />
      <RegistrationSection />
      <VideoTestimonialSection />
      <Footer />
    </div>
  );
}

export default App;