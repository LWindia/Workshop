import React from 'react';
import { Quote, Star, Users, Award } from 'lucide-react';

const MentorSection = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10,00,000+", label: "Careers Transformed" },
    { icon: <Award className="w-5 h-5" />, value: "15+", label: "Years Experience" },
    { icon: <Star className="w-5 h-5" />, value: "World Record", label: "Holder" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Delivered Live & Hands-On by
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-2xl font-bold text-white">VD</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Vimal Daga</h3>
                <p className="text-red-500 font-medium mb-4">World Record Holder | India's Most Loved Technical Mentor</p>
                <p className="text-gray-600 mb-6">
                  Learn directly from the one who's transformed 10,00,000+ careers! 
                  Delivered LIVE & HANDS-ON by the most loved technical mentor in India.
                </p>

                <div className="flex gap-6 justify-center lg:justify-start">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center text-red-500 mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border rounded-lg p-6">
                <Quote className="w-8 h-8 text-red-500 mb-4" />
                <blockquote className="text-gray-800 mb-4 italic">
                  "Let's build things that work in the real world. Every line of code 
                  should solve a real problem and create value."
                </blockquote>
                <div className="text-red-500 font-medium">- Vimal Daga</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;