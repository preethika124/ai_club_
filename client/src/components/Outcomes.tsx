import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaFileAlt, FaHandshake, FaBriefcase, FaMedal, FaCertificate } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import type { Achievement } from '@shared/schema';
import Counter from './Counter';

const statistics = [
  { value: 50, label: 'Workshops Conducted', suffix: '+' },
  { value: 100, label: 'Projects Built', suffix: '+' },
  { value: 500, label: 'Students Trained', suffix: '+' },
  { value: 20, label: 'Industry Partners', suffix: '+' },
];

const iconMap: Record<string, typeof FaTrophy> = {
  trophy: FaTrophy,
  document: FaFileAlt,
  handshake: FaHandshake,
  briefcase: FaBriefcase,
  medal: FaMedal,
  badge: FaCertificate,
};

export default function Outcomes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsInView, setStatsInView] = useState(false);

  const { data: achievements = [], isLoading } = useQuery<Achievement[]>({
    queryKey: ['/api/achievements'],
  });

  useEffect(() => {
    if (inView) {
      setStatsInView(true);
    }
  }, [inView]);

  if (isLoading) {
    return (
      <section id="outcomes" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" data-testid="loading-outcomes" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="outcomes"
      ref={ref}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
      data-testid="section-outcomes"
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #0891b2 25%, transparent 25%), linear-gradient(-45deg, #059669 25%, transparent 25%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
            Our Impact & Achievements
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Measurable results and milestones that showcase our commitment to excellence
          </p>
        </motion.div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-t-gradient-to-r from-[#0891b2] to-[#059669] text-center"
              style={{ borderImage: 'linear-gradient(to right, #0891b2, #059669) 1' }}
              data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent" data-testid={`text-stat-value-${index}`}>
                {statsInView && <Counter end={stat.value} duration={2} />}
                {stat.suffix}
              </div>
              <div className="text-[#475569] font-medium" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || FaTrophy;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                data-testid={`card-achievement-${achievement.id}`}
              >
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#ecfeff] text-[#0891b2] text-xs font-semibold rounded-full" data-testid={`badge-achievement-category-${achievement.id}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0f172a] mb-2" data-testid={`text-achievement-title-${achievement.id}`}>
                  {achievement.title}
                </h3>
                <p className="text-[#475569] text-sm mb-4 leading-relaxed" data-testid={`text-achievement-description-${achievement.id}`}>
                  {achievement.description}
                </p>
                <p className="text-[#94a3b8] text-xs font-medium" data-testid={`text-achievement-date-${achievement.id}`}>
                  {achievement.date}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
