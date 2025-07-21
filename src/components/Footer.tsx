import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-white mb-2 animate-fade-in-up stagger-1">
              Brought to you by:
            </h3>
            <div className="mb-4 animate-fade-in-up stagger-2">
              <h4 className="text-lg font-bold text-red-500 mb-1 animate-fade-in-up stagger-3">
                LinuxWorld Informatics Pvt Ltd
              </h4>
              <p className="text-white animate-fade-in-up stagger-4">
                Empowering Learners | Building Tech Leaders
              </p>
            </div>
            <p className="text-white max-w-2xl mx-auto animate-fade-in-up stagger-5">
              Join 1000+ passionate learners in Jaipur for hands-on technical learning 
              with industry expert Vimal Daga.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors icon-bounce hover-scale"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors icon-bounce hover-scale"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@workshop.com"
              className="text-gray-300 hover:text-red-500 transition-colors icon-bounce hover-scale"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6 animate-fade-in-up stagger-6">
            <p className="text-white flex items-center justify-center gap-2 animate-fade-in-up stagger-7">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" /> for India's Tech Learners By{' '}
              <a
                href="https://www.linkedin.com/in/jibbran-ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors font-semibold hover-scale"
              >
                Jibbran Ali
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;