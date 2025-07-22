import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Phone, School, MessageSquare, CheckCircle, Clock, Award, Users, MapPin } from 'lucide-react';

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  currentQualification: string;
  collegeUniversity: string;
  city: string;
  motivation: string;
  howDidYouHear: string[];
}

const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      console.log('Form data:', data);
      
      // Google Apps Script deployment URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzMuZd6hpL6u4DN9nt5Ieb9LtXxGhdxg8ik4LXjI4rC-v_-n12hyMPN0qwcMqldTw-4Kg/exec';
      
      // Create FormData instead of JSON for better compatibility
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('mobileNumber', data.mobileNumber);
      formData.append('email', data.email);
      formData.append('currentQualification', data.currentQualification);
      formData.append('collegeUniversity', data.collegeUniversity);
      formData.append('city', data.city);
      formData.append('motivation', data.motivation);
      formData.append('howDidYouHear', data.howDidYouHear.join(', '));

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData
      });

      // Check if response is ok
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 animate-bounce-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 icon-bounce" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">Registration Successful!</h2>
              <p className="text-gray-700 mb-4 animate-fade-in-up stagger-1">
                Welcome to the workshop! You'll receive a confirmation email soon.
              </p>
              <p className="text-green-600 font-medium animate-fade-in-up stagger-2">
                See you on Saturday, 26th July 2025! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
            Limited Seats - Only 1000 Participants
          </h2>
          <p className="text-gray-600 animate-fade-in-up stagger-1">
            Register now to secure your spot in this transformative learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Registration Form - Left Side */}
          <div className="animate-fade-in-up stagger-2">
            <div className="bg-white border rounded-lg p-8 shadow-sm card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up stagger-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2 icon-bounce" />
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="animate-fade-in-up stagger-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2 icon-bounce" />
                      Mobile Number *
                    </label>
                    <input
                      {...register('mobileNumber', { 
                        required: 'Mobile number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit mobile number'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                      placeholder="10-digit mobile number"
                    />
                    {errors.mobileNumber && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.mobileNumber.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up stagger-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2 icon-bounce" />
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="animate-fade-in-up stagger-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Qualification *
                    </label>
                    <select
                      {...register('currentQualification', { required: 'Please select your qualification' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                    >
                      <option value="">Select your qualification</option>
                      <option value="B.Tech (CSE/IT/Other)">B.Tech (CSE/IT/Other)</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="Diploma Student">Diploma Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.currentQualification && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.currentQualification.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up stagger-7">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <School className="w-4 h-4 inline mr-2 icon-bounce" />
                      College/University Name *
                    </label>
                    <input
                      {...register('collegeUniversity', { required: 'College/University name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                      placeholder="Enter your college/university name"
                    />
                    {errors.collegeUniversity && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.collegeUniversity.message}</p>
                    )}
                  </div>

                  <div className="animate-fade-in-up stagger-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2 icon-bounce" />
                      City *
                    </label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none hover-scale"
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1 animate-bounce-in">{errors.city.message}</p>
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2 icon-bounce" />
                    Why do you want to attend this workshop? (Optional but helps filter serious ones)
                  </label>
                  <textarea
                    {...register('motivation')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none resize-none hover-scale"
                    placeholder="Share your learning goals and what you hope to achieve..."
                  />
                </div>

                <div className="animate-fade-in-up">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about this workshop? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'WhatsApp',
                      'College Group',
                      'Instagram',
                      'Facebook',
                      'Telegram',
                      'From a Friend',
                      'Other'
                    ].map((option, index) => (
                      <label key={option} className="flex items-center space-x-2 hover-scale">
                        <input
                          type="checkbox"
                          value={option}
                          {...register('howDidYouHear')}
                          className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.howDidYouHear && (
                    <p className="text-red-500 text-sm mt-1 animate-bounce-in">Please select at least one option</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-4 rounded-lg text-lg font-medium transition-colors btn-animate hover-scale"
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve My Free Seat'}
                </button>

                <p className="text-center text-gray-600 text-sm animate-fade-in-up">
                  * Required fields. Your data is secure and will only be used for workshop communication.
                </p>
              </form>
            </div>
          </div>

          {/* Information Sections - Right Side */}
          <div className="space-y-6 animate-fade-in-up stagger-3">
            {/* Workshop Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workshop Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Hands-on Docker containerization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>AI & Machine Learning fundamentals</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Real-world project building</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Networking with tech enthusiasts</span>
                </li>
              </ul>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Laptop with Windows/Mac/Linux</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Charger and power bank</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Notebook and pen</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Enthusiasm to learn</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white card-hover">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-red-100 mb-4">
                Have questions about the workshop? Contact us:
              </p>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>workshop@lwindia.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;