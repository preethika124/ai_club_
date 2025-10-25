import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaHandsHelping, FaCode, FaHandshake, FaFlask, FaSeedling } from 'react-icons/fa';

const objectives = [
  {
    icon: FaLightbulb,
    title: 'Promote AI Awareness',
    description: 'Spread knowledge about AI/ML technologies and their transformative potential across various domains and industries',
  },
  {
    icon: FaHandsHelping,
    title: 'Hands-on Learning',
    description: 'Conduct interactive workshops and bootcamps that provide practical experience with industry-standard tools',
  },
  {
    icon: FaCode,
    title: 'Build Real Projects',
    description: 'Develop practical AI applications that solve real-world problems and create tangible impact',
  },
  {
    icon: FaHandshake,
    title: 'Industry Connect',
    description: 'Bridge the gap between academia and industry through partnerships, internships, and mentorship programs',
  },
  {
    icon: FaFlask,
    title: 'Research & Innovation',
    description: 'Encourage research publications, patent filings, and contributions to the global AI knowledge base',
  },
  {
    icon: FaSeedling,
    title: 'Community Growth',
    description: 'Foster a collaborative learning environment where members support and inspire each other',
  },
];

export default function Objectives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="objectives"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]"
      data-testid="section-objectives"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
            Our Objectives
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Driving innovation and excellence through focused initiatives that empower our members
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-8 border-2 border-[#e2e8f0] hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              data-testid={`card-objective-${objective.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0891b2] to-[#059669] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0.5 rounded-2xl bg-white -z-10" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ecfeff] to-[#f0fdfa] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <objective.icon className="w-8 h-8 text-[#0891b2]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-3 tracking-tight">
                {objective.title}
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
