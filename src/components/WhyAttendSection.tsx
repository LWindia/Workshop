import React from 'react';
import { Settings, User, Award, Laptop, Users } from 'lucide-react';

const WhyAttendSection = () => {
  const reasons = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "100% Practical Learning",
      description: "No theory overload, just pure hands-on on AI, Docker, Computer Vision & Cloud"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Build a Real Project in 1 Day",
      description: "Learn by doing and walk away with something you built"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificate of Excellence",
      description: "Stand out in your resume with a workshop certificate by Mr. Vimal Daga"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network with 1000+ Tech Enthusiasts",
      description: "Collaborate, learn & connect with the best minds"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Delivered by a World Record Holder",
      description: "Learn directly from Mr. Vimal Daga, the DevOps & AI Guru"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Absolutely Free of Cost",
      description: "Zero fee. Unlimited learning. One powerful Saturday."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
            Why You Can't Miss This!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            This isn't just a workshop — it's a launchpad for your technical career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-red-500 mb-3 icon-bounce">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;