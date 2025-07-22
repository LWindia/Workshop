import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Quote,
  Star,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const VideoTestimonialSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videoTestimonials = [
    {
      id: 1,
      title: "Priya's Success Story",
      subtitle: "B.Tech CSE Student - Placed at 12 LPA",
      videoUrl: "/assets/Testimonial/T1.mp4",
      quote: "The hands-on project building experience was incredible. I learned Docker and AI in just one day!",
      name: "Priya Sharma",
      role: "B.Tech CSE, 3rd Year",
      college: "Rajasthan Technical University",
      rating: 5
    },
    {
      id: 2,
      title: "Rahul's Career Transformation",
      subtitle: "BCA Student - Now Working at Top Tech Company",
      videoUrl: "/assets/Testimonial/T2.mp4",
      quote: "Mr. Vimal Daga's teaching style is amazing. I got placed with a 12 LPA package after this workshop!",
      name: "Rahul Kumar",
      role: "BCA Student",
      college: "Maharaja College, Jaipur",
      rating: 5
    },
    {
      id: 3,
      title: "Anjali's Professional Growth",
      subtitle: "Working Professional - Enhanced Skills",
      videoUrl: "/assets/Testimonial/T3.mp4",
      quote: "Best investment of my Saturday. Learned practical skills that I use daily in my job.",
      name: "Anjali Patel",
      role: "Working Professional",
      college: "Software Developer",
      rating: 5
    },
    {
      id: 4,
      title: "Amit's Learning Journey",
      subtitle: "Final Year Student - Ready for Placements",
      videoUrl: "/assets/Testimonial/T4.mp4",
      quote: "This workshop gave me the confidence to face technical interviews. Highly recommended!",
      name: "Amit Singh",
      role: "Final Year Student",
      college: "MNIT Jaipur",
      rating: 5
    },
    {
      id: 5,
      title: "Neha's Skill Development",
      subtitle: "MCA Student - Mastered New Technologies",
      videoUrl: "/assets/Testimonial/T5.mp4",
      quote: "The practical approach helped me understand complex concepts easily. Great learning experience!",
      name: "Neha Gupta",
      role: "MCA Student",
      college: "BITS Pilani",
      rating: 5
    }
  ];

  const testimonialData = {
    title: "What Our Previous Workshop Attendees Say",
    subtitle: "Real feedback from students who transformed their careers",
    stats: [
      { icon: <Users className="w-5 h-5" />, value: "10,000+", label: "Students Trained" },
      { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Average Rating" },
      { icon: <Award className="w-5 h-5" />, value: "95%", label: "Success Rate" }
    ]
  };

  const renderStars = (rating: number = 0): JSX.Element[] => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
    />
  ));
};

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const goToVideo = (index: React.SetStateAction<number>) => {
    setCurrentVideoIndex(index);
  };

  const currentVideo = videoTestimonials[currentVideoIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {testimonialData.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {testimonialData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Video Player Section */}
          <div className="relative">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                  key={currentVideoIndex}
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Navigation Arrows */}
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Video dots indicator */}
            <div className="mt-6">
              <div className="flex justify-center space-x-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex ? 'bg-red-500 scale-125' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {testimonialData.stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
                  <div className="text-red-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Current Video Testimonial */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-3">
                <Quote className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-700 mb-3 italic">
                    "{currentVideo.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{currentVideo.name}</h4>
                      <p className="text-sm text-gray-600">{currentVideo.role}</p>
                      <p className="text-xs text-gray-500">{currentVideo.college}</p>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(currentVideo.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Status */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Video Progress
                </span>
                <span className="text-sm text-gray-500">{currentVideoIndex + 1} of {videoTestimonials.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500 ease-out bg-red-500"
                  style={{ width: `${((currentVideoIndex + 1) / videoTestimonials.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who have already taken the first step towards their dream tech career
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Reserve My Free Seat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
