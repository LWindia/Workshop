import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 h-full">
          {/* Workshop Images Collage */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg animate-float"></div>
          <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg animate-float" style={{ animationDelay: '0.8s' }}></div>
          <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg animate-float" style={{ animationDelay: '1.8s' }}></div>
          
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg animate-float" style={{ animationDelay: '0.3s' }}></div>
          <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg animate-float" style={{ animationDelay: '1.3s' }}></div>
          <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-lg animate-float" style={{ animationDelay: '2.3s' }}></div>
          <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-lg animate-float" style={{ animationDelay: '0.7s' }}></div>
          <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-lg animate-float" style={{ animationDelay: '1.7s' }}></div>
          <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg animate-float" style={{ animationDelay: '2.7s' }}></div>
          <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg animate-float" style={{ animationDelay: '0.4s' }}></div>
          <div className="bg-gradient-to-br from-sky-200 to-sky-300 rounded-lg animate-float" style={{ animationDelay: '1.4s' }}></div>
          
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg animate-float" style={{ animationDelay: '2.4s' }}></div>
          <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-lg animate-float" style={{ animationDelay: '0.6s' }}></div>
          <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg animate-float" style={{ animationDelay: '1.6s' }}></div>
          <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg animate-float" style={{ animationDelay: '2.6s' }}></div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg animate-float" style={{ animationDelay: '0.9s' }}></div>
          <div className="bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg animate-float" style={{ animationDelay: '1.9s' }}></div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg animate-float" style={{ animationDelay: '2.9s' }}></div>
          <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg animate-float" style={{ animationDelay: '0.2s' }}></div>
          
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg animate-float" style={{ animationDelay: '1.2s' }}></div>
          <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg animate-float" style={{ animationDelay: '2.2s' }}></div>
          <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-lg animate-float" style={{ animationDelay: '0.1s' }}></div>
          <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-lg animate-float" style={{ animationDelay: '1.1s' }}></div>
          <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-lg animate-float" style={{ animationDelay: '2.1s' }}></div>
          <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="bg-gradient-to-br from-sky-200 to-sky-300 rounded-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-fade-in-up">
            <div className="leading-tight">
              <div className="animate-slide-in-left stagger-1">THE BIGGEST ONE-DAY</div>
              <div className="animate-slide-in-left stagger-2">
                <span className="text-red-500">FREE</span> TECHNICAL
              </div>
              <div className="animate-slide-in-left stagger-3">HANDS-ON WORKSHOP</div>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-red-500 font-semibold mb-2 animate-fade-in-up stagger-4">
            JAIPUR EDITION
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-4 animate-fade-in-up stagger-5">
            Learn | Build | Network – All in 1 Day!
          </p>
          
          <p className="text-lg text-gray-600 mb-8 animate-fade-in-up stagger-6">
            Hands-on Learning Experience at G D Badaya Auditorium, Mansarovar Jaipur
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border hover-lift animate-fade-in-up stagger-7">
              <Calendar className="w-4 h-4 text-red-500 icon-bounce" />
              <span>This Saturday - 26th July 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border hover-lift animate-fade-in-up stagger-8">
              <Clock className="w-4 h-4 text-red-500 icon-bounce" />
              <span>11:00 AM Onwards</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border hover-lift animate-fade-in-up">
              <Award className="w-4 h-4 text-red-500 icon-bounce" />
              <span>Participation Certificate</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border hover-lift animate-fade-in-up">
              <Users className="w-4 h-4 text-red-500 icon-bounce" />
              <span>Hands On Project</span>
            </div>
          </div>

          <button
            onClick={scrollToRegistration}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg btn-animate hover-scale animate-fade-in-up"
          >
            Register Now
          </button>

          <p className="text-green-600 font-semibold text-lg mt-4 mb-2 animate-fade-in-up">
            Absolutely FREE Entry
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;