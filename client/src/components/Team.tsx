import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import type { TeamMember } from '@shared/schema';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

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
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 0 2px rgba(8, 145, 178, 0.3)"
              }}
              animate={activeCategory === category.id ? {
                boxShadow: [
                  "0 0 0 0px rgba(8, 145, 178, 0.4)",
                  "0 0 0 8px rgba(8, 145, 178, 0)",
                  "0 0 0 0px rgba(8, 145, 178, 0)"
                ],
              } : {}}
              transition={activeCategory === category.id ? {
                boxShadow: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              } : {}}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-visible ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-lg'
                  : 'bg-white text-[#475569] border-2 border-transparent hover:border-[#0891b2]'
              }`}
              style={{ 
                cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'%230891b2\'><path d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\'/></svg>") 12 12, pointer'
              }}
              data-testid={`button-filter-${category.id}`}
            >
              <span className="relative z-10">
                {category.label}
              </span>
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0891b2]/10 to-[#059669]/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-[#0891b2]/20 border border-[#e2e8f0] w-full h-auto rounded-2xl p-6">
                  {/* Avatar */}
                  <CardItem translateZ="100" className="flex justify-center mb-4">
                    <div className="relative w-48 h-48 group/avatar">
                      {/* Sparkle Elements */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#0891b2] to-[#059669] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-opacity duration-300" />
                      <div className="absolute top-4 -left-1 w-2 h-2 bg-gradient-to-br from-[#059669] to-[#0891b2] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100" />
                      <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-gradient-to-br from-[#06b6d4] to-[#10b981] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-opacity duration-700 delay-200" />
                      
                      {/* 3D Shadow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/20 to-[#059669]/20 rounded-2xl blur-xl transform translate-y-3 translate-x-3 opacity-60" />
                      
                      {/* Main Image Container */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover/card:shadow-[0_20px_50px_rgba(8,145,178,0.3)]">
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 animate-shimmer" 
                             style={{ 
                               backgroundSize: '200% 200%',
                               animation: 'shimmer 3s ease-in-out infinite'
                             }} 
                        />
                        
                        {/* Avatar - Image or Initials */}
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                            style={{ 
                              background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}dd)`
                            }}
                          >
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardItem>

                  {/* Info */}
                  <div className="text-center">
                    <CardItem
                      translateZ="60"
                      as="h3"
                      className="text-lg font-bold text-[#0f172a] mb-1"
                      data-testid={`text-member-name-${member.id}`}
                    >
                      {member.name}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      as="p"
                      className="text-base font-semibold mb-1 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent"
                      data-testid={`text-member-role-${member.id}`}
                    >
                      {member.role}
                    </CardItem>
                    {member.department && (
                      <CardItem
                        translateZ="40"
                        as="p"
                        className="text-sm text-[#475569] mb-4"
                        data-testid={`text-member-department-${member.id}`}
                      >
                        {member.department}
                      </CardItem>
                    )}

                    {/* LinkedIn */}
                    <CardItem translateZ="70" className="flex justify-center">
                      <a
                        href={member.linkedIn || "#"}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f1f5f9] text-[#475569] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn`}
                        data-testid={`link-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
