import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import type { TeamMember } from '@shared/schema';

const categories = [
  { id: 'all', label: 'All Members' },
  { id: 'faculty', label: 'Faculty Coordinators' },
  { id: 'student', label: 'Student Leaders' },
  { id: 'core', label: 'Core Team' },
];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const { data: allMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ['/api/team'],
  });

  const teamMembers = activeCategory === 'all' 
    ? allMembers 
    : allMembers.filter(member => member.category === activeCategory);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  if (isLoading) {
    return (
      <section id="team" className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5]"
      data-testid="section-team"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={inView ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              } : {}}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-[#0891b2] via-[#059669] to-[#0891b2] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
            >
              Meet Our Team
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-[#475569] max-w-2xl mx-auto overflow-hidden"
          >
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {['Passionate', 'individuals', 'driving', 'innovation', 'and', 'fostering', 'a', 'vibrant', 'AI', 'community'].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.08,
                    ease: "easeOut"
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-lg'
                  : 'bg-white text-[#475569] hover:bg-[#f1f5f9]'
              }`}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0891b2] to-[#059669] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0.5 rounded-2xl bg-white -z-10" />

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Outer Gradient Ring */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] p-1">
                    {/* White Ring */}
                    <div className="w-full h-full rounded-full bg-white p-1">
                      {/* Avatar */}
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center text-white text-2xl font-bold"
                        style={{ backgroundColor: member.avatarColor }}
                      >
                        {getInitials(member.name)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#0f172a] mb-1" data-testid={`text-member-name-${member.id}`}>
                  {member.name}
                </h3>
                <p className="text-base font-semibold mb-1 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent" data-testid={`text-member-role-${member.id}`}>
                  {member.role}
                </p>
                {member.department && (
                  <p className="text-sm text-[#475569] mb-4" data-testid={`text-member-department-${member.id}`}>
                    {member.department}
                  </p>
                )}

                {/* LinkedIn */}
                <a
                  href={member.linkedIn || "#"}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f1f5f9] text-[#475569] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                  data-testid={`link-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
