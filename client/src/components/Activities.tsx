import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaArrowRight, FaCalendar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import type { Event } from '@shared/schema';

const years = ['All', '2023', '2024', '2025'];

const categoryColors: Record<string, string> = {
  Workshop: 'bg-[#ecfeff] text-[#0891b2]',
  Hackathon: 'bg-[#f3e8ff] text-[#9333ea]',
  Seminar: 'bg-[#dbeafe] text-[#3b82f6]',
  Project: 'bg-[#d1fae5] text-[#059669]',
  Event: 'bg-[#fef3c7] text-[#f59e0b]',
  Competition: 'bg-[#ffe4e6] text-[#e11d48]',
};

export default function Activities() {
  const [activeYear, setActiveYear] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const queryUrl = activeYear === 'All' 
    ? '/api/events' 
    : `/api/events?year=${activeYear}`;
  
  const { data: activities = [], isLoading } = useQuery<Event[]>({
    queryKey: [queryUrl],
  });

  if (isLoading) {
    return (
      <section id="activities" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" data-testid="loading-activities" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 md:py-32 bg-white"
      data-testid="section-activities"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
            Club Activities
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            A journey of innovation, learning, and collaboration through our events
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeYear === year
                  ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-lg'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
              data-testid={`button-filter-year-${year.toLowerCase()}`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0891b2] via-[#06b6d4] to-[#059669] transform -translate-x-1/2 hidden md:block" />

          {/* Activity Cards */}
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
                data-testid={`card-activity-${activity.id}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] border-4 border-white transform -translate-x-1/2 hidden md:block z-10" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* Date Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 ${categoryColors[activity.category] || 'bg-gray-100 text-gray-600'} rounded-full text-xs font-semibold`} data-testid={`badge-category-${activity.id}`}>
                      {activity.category}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white rounded-full text-xs font-semibold flex items-center gap-1" data-testid={`badge-date-${activity.id}`}>
                      <FaCalendar className="w-3 h-3" />
                      {activity.date}, {activity.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3" data-testid={`text-activity-title-${activity.id}`}>
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#475569] mb-4 leading-relaxed" data-testid={`text-activity-description-${activity.id}`}>
                    {activity.description}
                  </p>

                  {/* Image Gallery Placeholders */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Array.from({ length: activity.images || 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg bg-gradient-to-br from-[#ecfeff] to-[#d1fae5] overflow-hidden group cursor-pointer"
                        data-testid={`image-placeholder-${activity.id}-${i}`}
                      >
                        <div className="w-full h-full flex items-center justify-center text-[#0891b2] group-hover:scale-110 transition-transform duration-300">
                          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                            <span className="text-xs font-bold">{i + 1}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-[#475569] text-sm" data-testid={`text-participants-${activity.id}`}>
                      <FaUsers className="w-4 h-4" />
                      <span>{activity.participants} participants</span>
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-[#0891b2] hover:text-[#059669] font-semibold text-sm transition-colors"
                      data-testid={`link-view-details-${activity.id}`}
                    >
                      View Details
                      <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activity.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#f1f5f9] text-[#475569] rounded-full text-xs"
                        data-testid={`tag-${activity.id}-${tagIndex}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
