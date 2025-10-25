import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaProjectDiagram } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Counter from './Counter';

const stats = [
  { icon: FaUsers, value: 500, label: 'Members', suffix: '+' },
  { icon: FaCalendarAlt, value: 50, label: 'Events', suffix: '+' },
  { icon: FaProjectDiagram, value: 100, label: 'Projects', suffix: '+' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] via-[#f0fdf4] to-[#ecfdf5] overflow-hidden"
      data-testid="section-hero"
    >
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight leading-tight">
            AI Club
          </h1>

          {/* College Name */}
          <p className="text-xl md:text-2xl text-[#475569] mb-6 font-medium">
            Tech University Engineering College
          </p>

          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center mb-8">
            <TypeAnimation
              sequence={[
                'Innovating the Future with Artificial Intelligence',
                2000,
                'Building Tomorrow\'s Technology Today',
                2000,
                'Empowering Students Through AI & ML',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight"
              repeat={Infinity}
              data-testid="text-typing-tagline"
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our vibrant community of AI enthusiasts, innovators, and future technologists. 
            Learn, build, and grow with hands-on workshops, cutting-edge projects, and industry connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid="button-join-club"
            >
              Join Our Club
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-[#0891b2] font-semibold rounded-lg border-2 border-[#0891b2] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#06b6d4] hover:text-white hover:border-transparent transition-all duration-300"
              data-testid="button-explore-more"
            >
              Explore More
            </motion.button>
          </div>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`card-stat-${stat.label.toLowerCase()}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0f172a] mb-2">
                  {isVisible && <Counter end={stat.value} duration={2} />}
                  {stat.suffix}
                </div>
                <div className="text-[#475569] font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex flex-col items-center text-[#0891b2] hover:text-[#059669] transition-colors cursor-pointer"
          data-testid="button-scroll-down"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <HiChevronDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
}
