import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaTools, FaRocket, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: FaBrain,
    title: 'AI/ML Focus',
    description: 'Deep dive into machine learning, neural networks, and cutting-edge AI technologies',
  },
  {
    icon: FaTools,
    title: 'Hands-on Workshops',
    description: 'Practical sessions with industry tools and frameworks used by professionals',
  },
  {
    icon: FaRocket,
    title: 'Real Projects',
    description: 'Build production-ready applications and contribute to open-source initiatives',
  },
  {
    icon: FaUsers,
    title: 'Strong Community',
    description: 'Network with like-minded peers, mentors, and industry professionals',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-white"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
              About Our Club
            </h2>
            
            <div className="space-y-4 text-[#475569] leading-relaxed text-lg">
              <p>
                The AI Club is a student-driven organization dedicated to fostering a deep understanding 
                of artificial intelligence and machine learning technologies. We believe in learning by doing, 
                and our programs are designed to provide hands-on experience with real-world applications.
              </p>
              
              <p>
                From beginners taking their first steps into AI to advanced practitioners working on 
                cutting-edge research, our club welcomes students at all skill levels. We organize 
                workshops, hackathons, guest lectures, and collaborative projects that bridge the gap 
                between theoretical knowledge and practical implementation.
              </p>
              
              <p>
                Our mission is to create a vibrant ecosystem where innovation thrives, ideas are 
                exchanged freely, and members support each other in their journey to become the 
                next generation of AI leaders.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 bg-[#ecfeff] border-l-4 border-[#0891b2] p-6 rounded-lg">
              <p className="text-[#0f172a] font-semibold text-lg">
                "Empowering students to shape the future through artificial intelligence, 
                one project at a time."
              </p>
            </div>

            {/* Established Badge */}
            <div className="mt-6">
              <span className="inline-block bg-gradient-to-r from-[#0891b2] to-[#059669] text-white px-6 py-2 rounded-full font-semibold text-sm">
                Established: 2023
              </span>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\//g, '-')}`}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#475569]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
