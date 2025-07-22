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
    "/assets/13.jpg", "/assets/14.jpg", "/assets/15.jpg", "/assets/16.jpg"
  ];

  const gradients = [
    "from-blue-200 to-blue-300", "from-red-200 to-red-300", "from-green-200 to-green-300", "from-purple-200 to-purple-300",
    "from-yellow-200 to-yellow-300", "from-indigo-200 to-indigo-300", "from-pink-200 to-pink-300", "from-teal-200 to-teal-300",
    "from-orange-200 to-orange-300", "from-cyan-200 to-cyan-300", "from-lime-200 to-lime-300", "from-rose-200 to-rose-300",
    "from-violet-200 to-violet-300", "from-emerald-200 to-emerald-300", "from-amber-200 to-amber-300", "from-sky-200 to-sky-300"
  ];

  const animationDelays = [
    '0s', '1s', '2s', '0.5s', '1.5s', '2.5s', '0.8s', '1.8s',
    '0.3s', '1.3s', '2.3s', '0.7s', '1.7s', '2.7s', '0.4s', '1.4s'
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes icon-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-3px); }
          60% { transform: translateY(-2px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .icon-bounce {
          animation: icon-bounce 2s infinite;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
      `}</style>
      
      <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 h-full p-4">
            {workshopImages.map((imageSrc, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradients[index]} rounded-lg overflow-hidden animate-float relative group`}
                style={{ 
                  animationDelay: animationDelays[index],
                  minHeight: '120px'
                }}
              >
                <img 
                  src={imageSrc} 
                  alt={`Workshop moment ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // If image fails to load, show gradient background
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            ))}
            
            {/* Fill remaining spaces with gradient boxes */}
            {Array.from({ length: 16 }, (_, index) => (
              <div
                key={`extra-${index}`}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg animate-float`}
                style={{ 
                  animationDelay: `${2 + (index * 0.1)}s`,
                  minHeight: '120px'
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
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
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up stagger-7">
                <Calendar className="w-4 h-4 text-red-500 icon-bounce" />
                <span className="font-medium">This Saturday - 26th July 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up stagger-8">
                <Clock className="w-4 h-4 text-red-500 icon-bounce" />
                <span className="font-medium">11:00 AM Onwards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up">
                <Award className="w-4 h-4 text-red-500 icon-bounce" />
                <span className="font-medium">Participation Certificate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border hover-lift animate-fade-in-up">
                <Users className="w-4 h-4 text-red-500 icon-bounce" />
                <span className="font-medium">Hands On Project</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={scrollToRegistration}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-xl hover-scale animate-fade-in-up transform hover:shadow-2xl"
              >
                Register Now - FREE Entry
              </button>

              <p className="text-green-600 font-bold text-xl animate-fade-in-up">
                🎉 Absolutely FREE Entry 🎉
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-6">
                <span className="flex items-center gap-1">
                  ✅ <strong>Free Registration</strong>
                </span>
                <span className="flex items-center gap-1">
                  ✅ <strong>Free Certificate</strong>
                </span>
                <span className="flex items-center gap-1">
                  ✅ <strong>Free Learning Materials</strong>
                </span>
                <span className="flex items-center gap-1">
                  ✅ <strong>Free Networking</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;