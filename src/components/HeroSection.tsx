import React from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const workshopImages = [
    "/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg",
    "/assets/5.jpg", "/assets/6.jpg", "/assets/7.jpg", "/assets/8.jpg",
    "/assets/9.jpg", "/assets/10.jpg", "/assets/11.jpg", "/assets/12.jpg",
    "/assets/13.jpg", "/assets/14.jpg", "/assets/15.jpg", "/assets/16.jpg",
    "/assets/17.jpg", "/assets/18.jpg", "/assets/19.jpg", "/assets/20.jpg",
    "/assets/21.jpg", "/assets/22.jpg", "/assets/23.jpg", "/assets/24.jpg",
    "/assets/25.jpg", "/assets/26.jpg", "/assets/27.jpg", "/assets/28.jpg",
    "/assets/29.jpg", "/assets/30.jpg", "/assets/31.jpg", "/assets/32.jpg"
  ];

  const gradients = [
    "from-blue-200 to-blue-300", "from-red-200 to-red-300", "from-green-200 to-green-300", "from-purple-200 to-purple-300",
    "from-yellow-200 to-yellow-300", "from-indigo-200 to-indigo-300", "from-pink-200 to-pink-300", "from-teal-200 to-teal-300",
    "from-orange-200 to-orange-300", "from-cyan-200 to-cyan-300", "from-lime-200 to-lime-300", "from-rose-200 to-rose-300",
    "from-violet-200 to-violet-300", "from-emerald-200 to-emerald-300", "from-amber-200 to-amber-300", "from-sky-200 to-sky-300",
    "from-indigo-300 to-indigo-400", "from-pink-300 to-pink-400", "from-teal-300 to-teal-400", "from-orange-300 to-orange-400",
    "from-cyan-300 to-cyan-400", "from-lime-300 to-lime-400", "from-rose-300 to-rose-400", "from-violet-300 to-violet-400",
    "from-emerald-300 to-emerald-400", "from-amber-300 to-amber-400", "from-sky-300 to-sky-400", "from-blue-300 to-blue-400",
    "from-red-300 to-red-400", "from-green-300 to-green-400", "from-purple-300 to-purple-400", "from-yellow-300 to-yellow-400"
  ];

  const animationDelays = [
    '0s', '1s', '2s', '0.5s', '1.5s', '2.5s', '0.8s', '1.8s',
    '0.3s', '1.3s', '2.3s', '0.7s', '1.7s', '2.7s', '0.4s', '1.4s',
    '0.6s', '1.6s', '2.6s', '0.9s', '1.9s', '2.9s', '0.2s', '1.2s',
    '2.2s', '0.4s', '1.4s', '2.4s', '0.7s', '1.7s', '2.7s', '1.1s'
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes icon-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-3px); }
          60% { transform: translateY(-2px); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; opacity: 0; }
        .icon-bounce { animation: icon-bounce 2s infinite; }
        .hover-lift:hover { transform: translateY(-2px); transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); transition: transform 0.3s ease; }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        
        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .mobile-bg-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
          }
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0 opacity-14.5 z-0">
          <div className="mobile-bg-grid grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-2 h-full p-2 md:p-4">
            {workshopImages.map((imageSrc, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradients[index]} rounded-lg overflow-hidden animate-float relative group h-full`}
                style={{ 
                  animationDelay: animationDelays[index],
                  minHeight: 'calc(100vh / 8)'
                }}
              >
                <img 
                  src={imageSrc} 
                  alt={`Workshop moment ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 text-center z-20 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              <div className="leading-tight">
                <div className="animate-slide-in-left stagger-1">THE BIGGEST ONE-DAY</div>
                <div className="animate-slide-in-left stagger-2">
                  <span className="text-[#FF0000]">FREE</span> TECHNICAL
                </div>
                <div className="animate-slide-in-left stagger-3">HANDS-ON WORKSHOP</div>
              </div>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 animate-fade-in-up stagger-4">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 shadow-lg text-[#FF0000] rounded-full">
                JAIPUR EDITION
              </span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white font-bold mb-3 md:mb-4 animate-fade-in-up stagger-5">
              Learn | Build | Network – All in 1 Day!
            </p>

            <p className="text-lg sm:text-xl font-bold text-white mb-6 md:mb-8 animate-fade-in-up stagger-6 px-2">
              Hands-on Learning Experience at G D Badaya Auditorium, Mansarovar Jaipur
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 text-xs sm:text-sm px-2">
              <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up stagger-7">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 icon-bounce" />
                <span className="font-bold">This Saturday - 26th July 2025</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up stagger-8">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 icon-bounce" />
                <span className="font-bold">11:00 AM Onwards</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 icon-bounce" />
                <span className="font-bold">Participation Certificate</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 icon-bounce" />
                <span className="font-bold">Hands On Project</span>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 px-4">
              <button
                onClick={scrollToRegistration}
                className="bg-[#FF0000] hover:bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 shadow-xl hover-scale animate-fade-in-up transform hover:shadow-2xl w-full sm:w-auto"
              >
                Register Now - FREE Entry
              </button>

              <p className="text-green-400 font-bold text-lg sm:text-xl animate-fade-in-up">
                Absolutely FREE Entry
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white mt-4 md:mt-6">
                <span className="flex items-center gap-1 font-bold justify-center sm:justify-start">✅ <strong>Free Registration</strong></span>
                <span className="flex items-center gap-1 font-bold justify-center sm:justify-start">✅ <strong>Free Certificate</strong></span>
                <span className="flex items-center gap-1 font-bold justify-center sm:justify-start">✅ <strong>Free Learning Materials</strong></span>
                <span className="flex items-center gap-1 font-bold justify-center sm:justify-start">✅ <strong>Free Networking</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;