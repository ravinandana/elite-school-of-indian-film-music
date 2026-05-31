import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { CoursesSection } from '../components/CoursesSection';
import { BSMBSection } from '../components/BSMBSection';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../utils/constants';
import { ArrowRight, Users, Trophy, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
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
              <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-4xl font-serif font-bold my-4 text-black">
                Your Gateway to <span className="text-gradient">Film Music Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our music classes are led by a qualified Carnatic vocal artist and accomplished keyboard and guitar player with over 10 years of experience. Having trained numerous students and performed at various concerts and events, our instructor combines technical expertise with practical performance knowledge to deliver a well-rounded musical education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to create a new generation of music professionals who can compete at the highest levels in the Indian film industry.
              </p>
              
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 group">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl p-8 text-white shadow-lg">
                <Users size={40} className="mb-4" />
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-sm">Students Trained</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-8 text-white shadow-lg">
                <Trophy size={40} className="mb-4 text-yellow-400" />
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p className="text-sm">Awards Won</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-8 text-white shadow-lg col-span-2">
                <Music size={40} className="mb-4 text-yellow-400" />
                <h3 className="text-3xl font-bold mb-2"></h3>
                <p className="text-sm">Expert Faculty Members</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <CoursesSection />

      {/* BSMB Band Section */}
      <BSMBSection />

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold uppercase tracking-widest text-sm">Success Stories</span>
            <h2 className="text-4xl font-serif font-bold my-4 text-black">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Musical Journey?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of successful students. Book your free demo class today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Join Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="btn-outline inline-flex items-center justify-center gap-2">
                Explore Courses
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;