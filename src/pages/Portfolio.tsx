import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTech Compliance Platform',
      category: 'Compliance as a Service',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      description: 'Comprehensive compliance monitoring system for a leading financial institution, reducing compliance costs by 65% and ensuring 100% regulatory adherence.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      date: '2024',
      link: '#'
    },
    {
      title: 'Healthcare Privacy Shield',
      category: 'Privacy as a Service',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      description: 'HIPAA-compliant data protection solution for healthcare providers, securing patient data with advanced encryption and access controls.',
      technologies: ['Python', 'Django', 'Redis', 'Docker'],
      date: '2024',
      link: '#'
    },
    {
      title: 'Retail AI Analytics',
      category: 'AI as a Service',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description: 'Machine learning-powered inventory optimization system that increased sales by 40% and reduced waste by 30% for retail chains.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Google Cloud'],
      date: '2024',
      link: '#'
    },
    {
      title: 'Insurance Risk Assessment',
      category: 'AI as a Service',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
      description: 'AI-driven risk assessment platform that streamlined underwriting processes and improved accuracy by 45% for insurance companies.',
      technologies: ['Python', 'Scikit-learn', 'Flask', 'Azure'],
      date: '2024',
      link: '#'
    },
    {
      title: 'Manufacturing Compliance Suite',
      category: 'Compliance as a Service',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      description: 'Automated compliance monitoring for manufacturing processes, ensuring ISO certification and reducing audit time by 80%.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Kubernetes'],
      date: '2023',
      link: '#'
    },
    {
      title: 'E-commerce Privacy Manager',
      category: 'Privacy as a Service',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description: 'GDPR-compliant customer data management system for e-commerce platforms, handling consent management and data anonymization.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'AWS'],
      date: '2023',
      link: '#'
    }
  ];

  const categories = ['All', 'Compliance as a Service', 'Privacy as a Service', 'AI as a Service'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform their 
            operations with our innovative software solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category.split(' as a Service')[0]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {project.category}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our 
            proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;