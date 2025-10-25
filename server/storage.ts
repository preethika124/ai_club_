import {
  type TeamMember,
  type InsertTeamMember,
  type Event,
  type InsertEvent,
  type Article,
  type InsertArticle,
  type Achievement,
  type InsertAchievement,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Team Members
  getTeamMembers(category?: string): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;

  // Events
  getEvents(year?: string): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Articles
  getArticles(category?: string, search?: string): Promise<Article[]>;
  getArticle(id: string): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;

  // Achievements
  getAchievements(): Promise<Achievement[]>;
  getAchievement(id: string): Promise<Achievement | undefined>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
}

export class MemStorage implements IStorage {
  private teamMembers: Map<string, TeamMember>;
  private events: Map<string, Event>;
  private articles: Map<string, Article>;
  private achievements: Map<string, Achievement>;

  constructor() {
    this.teamMembers = new Map();
    this.events = new Map();
    this.articles = new Map();
    this.achievements = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed Team Members
    const teamMembersData: InsertTeamMember[] = [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Faculty Advisor',
        category: 'faculty',
        department: 'CSE Dept.',
        year: undefined,
        linkedIn: 'https://linkedin.com',
        avatarColor: '#0891b2',
      },
      {
        name: 'Prof. Priya Sharma',
        role: 'Co-Advisor',
        category: 'faculty',
        department: 'IT Dept.',
        year: undefined,
        linkedIn: 'https://linkedin.com',
        avatarColor: '#059669',
      },
      {
        name: 'Aditya Verma',
        role: 'President',
        category: 'student',
        department: '4th Year CSE',
        year: '4th Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#06b6d4',
      },
      {
        name: 'Sneha Patel',
        role: 'Vice President',
        category: 'student',
        department: '3rd Year AI/ML',
        year: '3rd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#0891b2',
      },
      {
        name: 'Rohan Gupta',
        role: 'Technical Lead',
        category: 'student',
        department: '4th Year CSE',
        year: '4th Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#059669',
      },
      {
        name: 'Ananya Singh',
        role: 'Events Head',
        category: 'student',
        department: '3rd Year IT',
        year: '3rd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#10b981',
      },
      {
        name: 'Karthik Reddy',
        role: 'Media Lead',
        category: 'student',
        department: '2nd Year CSE',
        year: '2nd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#0891b2',
      },
      {
        name: 'Vikram Joshi',
        role: 'Workshop Coordinator',
        category: 'core',
        department: '3rd Year CSE',
        year: '3rd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#06b6d4',
      },
      {
        name: 'Meera Nair',
        role: 'Project Manager',
        category: 'core',
        department: '3rd Year AI/ML',
        year: '3rd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#059669',
      },
      {
        name: 'Arjun Malhotra',
        role: 'Content Writer',
        category: 'core',
        department: '2nd Year IT',
        year: '2nd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#0891b2',
      },
      {
        name: 'Divya Kapoor',
        role: 'Social Media Manager',
        category: 'core',
        department: '2nd Year CSE',
        year: '2nd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#10b981',
      },
      {
        name: 'Rahul Iyer',
        role: 'Technical Member',
        category: 'core',
        department: '3rd Year CSE',
        year: '3rd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#06b6d4',
      },
      {
        name: 'Pooja Desai',
        role: 'Event Organizer',
        category: 'core',
        department: '2nd Year AI/ML',
        year: '2nd Year',
        linkedIn: 'https://linkedin.com',
        avatarColor: '#059669',
      },
    ];

    teamMembersData.forEach(member => {
      const id = randomUUID();
      this.teamMembers.set(id, { ...member, id });
    });

    // Seed Events
    const eventsData: InsertEvent[] = [
      {
        title: 'AI/ML Workshop Series 2025',
        description: 'Comprehensive hands-on workshop covering fundamentals of machine learning, deep learning frameworks, and practical implementation of neural networks.',
        category: 'Workshop',
        date: 'Jan 15',
        month: 'January',
        year: '2025',
        participants: 120,
        tags: ['Machine Learning', 'Python', 'TensorFlow'],
        images: 4,
      },
      {
        title: 'Smart India Hackathon 2025',
        description: 'National-level hackathon where our team developed an AI-powered healthcare solution, securing first place in the AI/ML category.',
        category: 'Hackathon',
        date: 'Feb 22',
        month: 'February',
        year: '2025',
        participants: 80,
        tags: ['Healthcare', 'Computer Vision', 'Innovation'],
        images: 3,
      },
      {
        title: 'Guest Lecture: Future of AI',
        description: 'Industry expert from a leading tech company shared insights on emerging AI trends, career opportunities, and the future of artificial intelligence.',
        category: 'Seminar',
        date: 'Mar 10',
        month: 'March',
        year: '2025',
        participants: 200,
        tags: ['Industry Insights', 'Career', 'Trends'],
        images: 3,
      },
      {
        title: 'Computer Vision Showcase',
        description: 'Final year project presentations showcasing innovative applications of computer vision in real-world scenarios including object detection and image segmentation.',
        category: 'Project',
        date: 'Apr 18',
        month: 'April',
        year: '2025',
        participants: 60,
        tags: ['Computer Vision', 'Projects', 'Innovation'],
        images: 4,
      },
      {
        title: 'Deep Learning Bootcamp',
        description: 'Intensive 3-day bootcamp covering advanced deep learning concepts, architectures, and hands-on implementation of state-of-the-art models.',
        category: 'Workshop',
        date: 'Aug 5',
        month: 'August',
        year: '2024',
        participants: 100,
        tags: ['Deep Learning', 'Neural Networks', 'Hands-on'],
        images: 3,
      },
      {
        title: 'Inter-College AI Competition',
        description: 'Hosted a regional AI competition bringing together students from 15 colleges to solve real-world problems using machine learning.',
        category: 'Competition',
        date: 'Sep 14',
        month: 'September',
        year: '2024',
        participants: 250,
        tags: ['Competition', 'Inter-College', 'ML'],
        images: 4,
      },
      {
        title: 'Tech Company Visit',
        description: 'Organized visit to a leading AI startup, providing members with insights into industry practices and networking opportunities.',
        category: 'Event',
        date: 'Oct 8',
        month: 'October',
        year: '2024',
        participants: 40,
        tags: ['Industry Visit', 'Networking', 'Career'],
        images: 3,
      },
      {
        title: 'Research Paper Workshop',
        description: 'Workshop on writing and publishing research papers in AI/ML, with guidance from faculty and published researchers.',
        category: 'Workshop',
        date: 'Nov 12',
        month: 'November',
        year: '2024',
        participants: 75,
        tags: ['Research', 'Academic', 'Publications'],
        images: 3,
      },
      {
        title: 'Annual Tech Fest',
        description: 'Organized AI exhibition showcasing student projects, hosting technical talks, and conducting coding competitions.',
        category: 'Event',
        date: 'Dec 20',
        month: 'December',
        year: '2024',
        participants: 300,
        tags: ['Exhibition', 'Projects', 'Fest'],
        images: 4,
      },
      {
        title: 'Club Inauguration',
        description: 'Grand launch of the AI Club with distinguished guests, faculty support, and enthusiastic student participation.',
        category: 'Event',
        date: 'Jul 1',
        month: 'July',
        year: '2023',
        participants: 150,
        tags: ['Inauguration', 'Milestone', 'Launch'],
        images: 4,
      },
      {
        title: 'Python for AI Workshop',
        description: 'Foundational workshop introducing Python programming for AI applications, covering NumPy, Pandas, and Scikit-learn.',
        category: 'Workshop',
        date: 'Aug 20',
        month: 'August',
        year: '2023',
        participants: 90,
        tags: ['Python', 'Basics', 'Programming'],
        images: 3,
      },
      {
        title: 'First ML Project Demo',
        description: 'Student teams presented their first machine learning projects, demonstrating practical applications of course concepts.',
        category: 'Project',
        date: 'Nov 25',
        month: 'November',
        year: '2023',
        participants: 50,
        tags: ['Projects', 'ML', 'Demo'],
        images: 3,
      },
    ];

    eventsData.forEach(event => {
      const id = randomUUID();
      this.events.set(id, { ...event, id });
    });

    // Seed Articles
    const articlesData: InsertArticle[] = [
      {
        title: 'Getting Started with Machine Learning: A Comprehensive Guide',
        excerpt: 'Discover the fundamentals of machine learning, essential algorithms, and practical tips for beginners looking to enter the exciting world of AI. Learn about supervised and unsupervised learning with hands-on examples.',
        category: 'Tutorials',
        author: 'Aditya Verma',
        authorAvatar: '#0891b2',
        date: 'Mar 15, 2025',
        readTime: '8 min read',
        featured: 1,
      },
      {
        title: 'Recap: AI Workshop 2025 Success Story',
        excerpt: 'Over 120 students participated in our latest workshop covering deep learning and neural networks. See highlights and key takeaways.',
        category: 'Events',
        author: 'Sneha Patel',
        authorAvatar: '#059669',
        date: 'Mar 10, 2025',
        readTime: '5 min read',
        featured: 0,
      },
      {
        title: 'Understanding Neural Networks: Architecture and Training',
        excerpt: 'Deep dive into neural network architectures, backpropagation, and optimization techniques used in modern deep learning.',
        category: 'Tutorials',
        author: 'Rohan Gupta',
        authorAvatar: '#06b6d4',
        date: 'Mar 5, 2025',
        readTime: '12 min read',
        featured: 0,
      },
      {
        title: 'Our Award-Winning Chatbot: Development Journey',
        excerpt: 'Learn how our team built an intelligent chatbot that won first place at the national hackathon using NLP and transformers.',
        category: 'Projects',
        author: 'Vikram Joshi',
        authorAvatar: '#10b981',
        date: 'Feb 28, 2025',
        readTime: '10 min read',
        featured: 0,
      },
      {
        title: 'Industry Trends in AI 2025: What to Expect',
        excerpt: 'Explore emerging trends in artificial intelligence including multimodal AI, edge computing, and ethical AI development.',
        category: 'Insights',
        author: 'Ananya Singh',
        authorAvatar: '#0891b2',
        date: 'Feb 20, 2025',
        readTime: '7 min read',
        featured: 0,
      },
      {
        title: 'Alumni Interview: Journey to AI Engineer at Google',
        excerpt: 'Former club president shares insights on career progression, interview preparation, and working on cutting-edge AI projects.',
        category: 'Insights',
        author: 'Divya Kapoor',
        authorAvatar: '#059669',
        date: 'Feb 15, 2025',
        readTime: '9 min read',
        featured: 0,
      },
      {
        title: 'Building Your First Convolutional Neural Network',
        excerpt: 'Step-by-step tutorial on implementing CNN for image classification using TensorFlow and Keras frameworks.',
        category: 'Tutorials',
        author: 'Karthik Reddy',
        authorAvatar: '#06b6d4',
        date: 'Feb 10, 2025',
        readTime: '15 min read',
        featured: 0,
      },
      {
        title: 'Hackathon Success Story: From Idea to Implementation',
        excerpt: 'Behind the scenes look at how we developed our winning solution in just 24 hours during Smart India Hackathon.',
        category: 'Events',
        author: 'Meera Nair',
        authorAvatar: '#10b981',
        date: 'Feb 5, 2025',
        readTime: '6 min read',
        featured: 0,
      },
      {
        title: 'Deep Dive into Transformers and Attention Mechanisms',
        excerpt: 'Comprehensive exploration of transformer architecture, self-attention, and their applications in NLP and computer vision.',
        category: 'Research',
        author: 'Arjun Malhotra',
        authorAvatar: '#0891b2',
        date: 'Jan 30, 2025',
        readTime: '14 min read',
        featured: 0,
      },
    ];

    articlesData.forEach(article => {
      const id = randomUUID();
      this.articles.set(id, { ...article, id });
    });

    // Seed Achievements
    const achievementsData: InsertAchievement[] = [
      {
        title: 'Smart India Hackathon Winner',
        description: 'First place in AI/ML category with an innovative healthcare solution using computer vision',
        category: 'Competition',
        date: 'February 2025',
        icon: 'trophy',
      },
      {
        title: 'Published in IEEE Conference',
        description: 'Research paper on neural architecture search accepted at international conference',
        category: 'Research',
        date: 'January 2025',
        icon: 'document',
      },
      {
        title: 'Collaboration with Tech Giants',
        description: 'Established partnerships with leading AI companies for mentorship and internships',
        category: 'Partnership',
        date: 'December 2024',
        icon: 'handshake',
      },
      {
        title: '15+ Members Placed in Top Companies',
        description: 'Club members secured positions at FAANG and leading AI startups worldwide',
        category: 'Placements',
        date: 'November 2024',
        icon: 'briefcase',
      },
      {
        title: 'Best Student Chapter Award',
        description: 'Recognized as the most active and impactful AI student organization in the region',
        category: 'Award',
        date: 'October 2024',
        icon: 'medal',
      },
      {
        title: 'AI Certification Program Launch',
        description: 'Launched comprehensive certification program in partnership with industry leaders',
        category: 'Certification',
        date: 'September 2024',
        icon: 'badge',
      },
    ];

    achievementsData.forEach(achievement => {
      const id = randomUUID();
      this.achievements.set(id, { ...achievement, id });
    });
  }

  // Team Members
  async getTeamMembers(category?: string): Promise<TeamMember[]> {
    const members = Array.from(this.teamMembers.values());
    if (category && category !== 'all') {
      return members.filter(m => m.category === category);
    }
    return members;
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { ...insertMember, id };
    this.teamMembers.set(id, member);
    return member;
  }

  // Events
  async getEvents(year?: string): Promise<Event[]> {
    const events = Array.from(this.events.values());
    if (year && year !== 'All') {
      return events.filter(e => e.year === year);
    }
    return events;
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }

  // Articles
  async getArticles(category?: string, search?: string): Promise<Article[]> {
    let articles = Array.from(this.articles.values());

    if (category && category !== 'All') {
      articles = articles.filter(a => a.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      articles = articles.filter(a =>
        a.title.toLowerCase().includes(searchLower) ||
        a.excerpt.toLowerCase().includes(searchLower)
      );
    }

    return articles;
  }

  async getArticle(id: string): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = randomUUID();
    const article: Article = { ...insertArticle, id };
    this.articles.set(id, article);
    return article;
  }

  // Achievements
  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values());
  }

  async getAchievement(id: string): Promise<Achievement | undefined> {
    return this.achievements.get(id);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = randomUUID();
    const achievement: Achievement = { ...insertAchievement, id };
    this.achievements.set(id, achievement);
    return achievement;
  }
}

export const storage = new MemStorage();
