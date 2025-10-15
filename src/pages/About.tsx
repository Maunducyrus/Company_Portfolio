import { Users, Target, Award, Globe } from 'lucide-react';
import Counter from '../components/Counter';

const About = () => {
  const stats = [
    { number: 500, label: 'Happy Clients', suffix: '+' },
    { number: 1200, label: 'Projects Completed', suffix: '+' },
    { number: 40000, label: 'Hours of Support', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EverseTech</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help businesses unlock hidden knowledge through 
            innovative software solutions in compliance, privacy, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <Counter target={stat.number} duration={2} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg"
                alt="Our mission"
                className="rounded-lg shadow-lg h-100"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                    <p className="text-gray-600">
                      Obtain Hidden Value - At EverseTech, we help businesses unlock their full potential through innovative AI solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-8 w-8 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                    <p className="text-gray-600">
                      To become the global leader in enterprise software solutions, helping 
                      organizations worldwide navigate the complex digital landscape with 
                      confidence and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EverseTech</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values drive everything we do, ensuring we deliver exceptional 
              value to our clients and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that exceed 
                expectations and drive real business value.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration, working closely with our clients 
                to understand their unique needs and challenges.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and cutting-edge technology to solve complex problems 
                and create competitive advantages for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </div>
  );
};

export default About;