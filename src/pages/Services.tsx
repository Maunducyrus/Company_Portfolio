import { Shield, Lock, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-16 w-16 text-blue-600" />,
      title: 'Compliance as a Service',
      description: 'Transform compliance from a burden into a strategic advantage.',
      image: 'https://cdn.pixabay.com/photo/2021/01/08/07/52/compliance-5899194_1280.jpg',
      features: [
        'Streamlined processes',
        'Growth opportunities',
        'ROI-focused solutions'
      ],
      benefits: ['Reduce compliance costs by up to 60%', '24/7 monitoring coverage', 'Regulatory expert support']
    },
    {
      icon: <Lock className="h-16 w-16 text-emerald-600" />,
      title: 'Privacy as a Service',
      description: 'Take control of your data and privacy management.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      features: [
        'Privacy awareness tracking',
        'Data service mapping',
        'Privacy heatmaps'
      ],
      benefits: ['Data awareness and seminars', 'Zero-trust security model', 'Data breach protection']
    },
    {
      icon: <Brain className="h-16 w-16 text-purple-600" />,
      title: 'AI as a Service',
      description: 'Simplify AI adoption for your business.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      features: [
        'Infrastructure setup',
        'Data management',
        'Model deployment'
      ],
      benefits: ['Increase efficiency by 40%', 'Predictive insights', 'Scalable AI solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to help your business navigate 
            the complex landscape of compliance, privacy, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help transform your business 
            and unlock hidden opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;