import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Brain, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Compliance as a Service',
      description: 'Transform compliance from a burden into a strategic advantage.',
      features: ['Streamlined processes', 'Growth opportunities', 'ROI-focused solutions'],
      image: 'https://cdn.pixabay.com/photo/2021/01/08/07/52/compliance-5899194_1280.jpg'
      
    },
    {
      icon: <Lock className="h-12 w-12 text-emerald-600" />,
      title: 'Privacy as a Service',
      description: 'Take control of your data and privacy management.',
      features: ['Privacy awareness tracking', 'Data service mapping', 'Privacy heatmaps'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'AI as a Service',
      description: 'Simplify AI adoption for your business.',
      features: ['Infrastructure setup', 'Data management', 'Model deployment'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to help your business navigate 
            the complex landscape of compliance, privacy, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;