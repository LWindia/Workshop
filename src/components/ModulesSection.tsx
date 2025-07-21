import React from 'react';
import { Clock } from 'lucide-react';

const ModulesSection = () => {
  const modules = [
    {
      hour: "Module 1",
      title: "Docker – Containers Made Simple",
      description: "Learn containerization fundamentals and deployment"
    },
    {
      hour: "Module 2", 
      title: "Cloud Technologies – Real-Time Deployment",
      description: "Master cloud infrastructure and live deployment"
    },
    {
      hour: "Module 3",
      title: "Artificial Intelligence & Computer Vision",
      description: "Hands-on AI and computer vision implementation"
    },
    {
      hour: "Module 4",
      title: "Build a Real Industry-Level Project LIVE!",
      description: "Create a complete project for your portfolio"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
            What You'll Learn
          </h2>
          <p className="text-gray-600 animate-fade-in-up stagger-1">
            7 hours of structured, hands-on learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-6 hover:shadow-sm transition-shadow card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 icon-bounce">
                  <Clock className="w-4 h-4" />
                  {module.hour}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;