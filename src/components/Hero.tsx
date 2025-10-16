// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-primary via-gray-800 to-brand-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Simplify AI  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {" "}Adoption
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Unlock the power of compliance, privacy, and AI with EverseTech's 
              cutting-edge software solutions. Transform your business with 
              hidden insights and advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              // src="https://cdn.pixabay.com/photo/2018/05/22/09/47/hexagon-3420941_1280.jpg"

              src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
              
              alt="Technology and Innovation"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <Brain className="h-8 w-8 text-emerald-600" />
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Trusted by 500+ companies</p>
                  <p className="text-gray-600 text-sm">Industry-leading solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;