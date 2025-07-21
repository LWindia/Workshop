import React from 'react';
import { GraduationCap, Users, BookOpen, Code, Lightbulb, Target, Award } from 'lucide-react';

const WhoShouldAttendSection = () => {
  const targetAudience = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Engineering Students (B.Tech – All branches)",
      description: "Computer Science, IT, Electronics, Mechanical, Civil and all other branches",
      category: "Students"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "BCA & MCA Students",
      description: "Computer Applications and Computer Science students",
      category: "Students"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diploma & Polytechnic Students",
      description: "Technical education and diploma students",
      category: "Students"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Technical Freshers Looking to Upskill",
      description: "Recent graduates and freshers wanting to enhance their skills",
      category: "Learners"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Working Professionals Exploring New Technologies",
      description: "Professionals wanting to learn new technologies and tools",
      category: "Professionals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Final Year Students Preparing for Placements",
      description: "Students in their final year preparing for job placements",
      category: "Students"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Who Should Attend?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This workshop is designed for anyone passionate about technology and eager to learn 
            cutting-edge skills from industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="text-red-500 mb-3">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <Target className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Perfect for All Skill Levels
            </h3>
            <p className="text-gray-600">
              Whether you're a complete beginner or an experienced developer, 
              this workshop will provide valuable insights and hands-on experience 
              with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttendSection; 