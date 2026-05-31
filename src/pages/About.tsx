import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: '🎵', title: 'Excellence', description: 'Highest standards in music education' },
    { icon: '👥', title: 'Community', description: 'Supportive learning environment' },
    { icon: '🎯', title: 'Innovation', description: 'Modern teaching techniques' },
    { icon: '⭐', title: 'Quality', description: 'Industry-experienced instructors' },
  ];

  const features = [
    'State-of-the-art recording studios',
    'Professional-grade instruments',
    'Industry expert faculty',
    'Small batch sizes for personalized attention',
    'Regular performances and showcases',
    'Job placement assistance',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="text-gradient">Elite School</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our mission, vision, and commitment to excellence in music education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class music education that empowers students to become accomplished musicians and composers in the Indian film music industry. We are committed to nurturing talent, fostering creativity, and building a community of passionate music professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-yellow-600/10 p-8 rounded-xl border border-yellow-600"
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the premier institution for Indian film music education, recognized nationally and internationally for producing skilled musicians and composers who contribute meaningfully to the Indian cinema industry and global music landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center mb-16 text-black"
          >
            Our Core <span className="text-gradient">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold text-black mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-black mb-8">
                Why Choose <span className="text-gradient">Elite School?</span>
              </h2>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-600/20 to-black/10 p-12 rounded-2xl"
            >
              <div className="text-center">
                <p className="text-6xl font-bold text-yellow-600 mb-2">100%</p>
                <p className="text-xl font-serif text-black">Student Satisfaction</p>
                <p className="text-gray-600 mt-4">Join our community of successful musicians</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;