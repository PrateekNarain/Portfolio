import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, Download, CheckCircle, Briefcase, FileCode, Server, Monitor, Users, MessageSquare, Code, Code2, Rocket, Smile, Globe, ChevronRight, Building2, Paintbrush, ArrowRight, Send, Calendar, GraduationCap, BarChart, Layers, TrendingUp, Share2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNodedotjs, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { projects } from '../data/projects';
import { skills, certifications } from '../data/skills';
import { experiences } from '../data/experience';

const handleEmailClick = (e: any) => {
  e.preventDefault();
  const toEmail = "prateeknaraindeveloper@gmail.com";
  const bodyText = "Hi Prateek,";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&body=${encodeURIComponent(bodyText)}`;
  const opened = window.open(gmailUrl, '_blank');

  if (!opened) {
    const mailtoLink = `mailto:${toEmail}?body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
  }
};

export const Section = ({ id, className, children }: { id: string, className?: string, children: React.ReactNode }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className || ''}`}>
    {children}
  </section>
);

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
  >
    {children}
  </motion.h2>
);

export const Hero = () => {
  const roles = ["A Software Developer", "A Full-Stack Developer", "A Web Designer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <Section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-32 gap-12">
      <div className="flex-1 space-y-6">

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-bold leading-tight">
          <span className="block text-3xl md:text-5xl text-[#fce29f] mb-2 font-normal tracking-wide">Hi, I'm</span>
          <span className="block text-4xl sm:text-5xl md:text-7xl text-[#f4f1eb] pb-2 whitespace-nowrap">Prateek Narain</span>
          <div className="text-2xl md:text-4xl mt-4 h-[1.5em] relative text-[#df9b31] whitespace-nowrap font-medium">
            {text}<span className="animate-pulse border-r-4 border-[#df9b31] ml-1"></span>
          </div>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 md:max-w-xl">
          Designing & building modern websites and web applications that help businesses grow online.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-8">
          <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-accent text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all">Get a Quote</a>
          <a href="#projects" className="px-8 py-3 rounded-full glass-card hover:bg-white/5 transition-all font-semibold">View Projects</a>
          <a href="/Resume.pdf" download="Prateek_Narain_Resume.pdf" target="_blank" className="px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-800 transition-all font-semibold flex items-center gap-2">
            <Download size={18} /> Resume
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-6 text-slate-400">
          <a href="https://github.com/PrateekNarain" target="_blank" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/prateeknarain" target="_blank" className="hover:text-[#df9b31] transition-colors"><FaLinkedin size={24} /></a>
          <a href="#" onClick={handleEmailClick} className="hover:text-[#df9b31] transition-colors"><Mail size={24} /></a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex justify-center relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img src="/pic.png" alt="Prateek Narain" className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl relative z-10" />
        </div>
      </motion.div>
    </Section>
  );
};

export const About = () => (
  <Section id="about">
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">About <span className="text-[#df9b31]">Me</span></h2>
    </div>

    {/* Top Grid: Left Image & Right Bio / Why us */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">
      {/* Left Image: Exact Image Dimensions */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-slate-800/60 shadow-2xl relative w-full">
        <img src="/about.png" alt="About Prateek" className="w-full h-auto block rounded-2xl" />
      </motion.div>

      {/* Right Content */}
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-between h-full">
        <div>
          <div className="text-[#df9b31] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Web Developer & Designer</div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">I'm Prateek Narain</h3>

          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm mb-4">
            I'm Prateek Narain, a <span className="text-[#df9b31] italic font-medium">web developer</span> specializing in <span className="text-[#df9b31] italic font-medium">custom-coded, responsive websites and web applications</span> for businesses. I turn ideas into clean, interactive, and user-friendly digital experiences that help businesses build a strong online presence, connect with customers, and grow in today's digital world.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: 'React', icon: <FaReact className="text-[#61dafb]" size={13} /> },
              { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" size={13} /> },
              { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" size={13} /> },
              { name: 'Next.js', icon: <SiNextdotjs className="text-white" size={13} /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06b6d4]" size={13} /> }
            ].map(tech => (
              <span key={tech.name} className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 text-[11px] font-medium hover:border-[#df9b31] transition-colors flex items-center gap-1.5">
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>

          {/* Why us Heading */}
          <div className="flex justify-between items-end mb-3 border-b border-slate-800 pb-1.5">
            <h4 className="text-lg font-bold text-white font-heading">Why us?</h4>
          </div>

          {/* Stats Cards: Differentiated Glass Cards */}
          <div className="grid grid-cols-2 gap-3.5 w-full items-stretch">
            <div className="rounded-2xl overflow-hidden border border-[#df9b31]/30 bg-[#0c1222] shadow-lg hover:border-[#df9b31]/70 hover:shadow-[0_0_20px_rgba(223,155,49,0.15)] transition-all duration-300 flex items-center justify-center p-2.5">
              <img src="/satisfied.png" alt="Satisfied Clients" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#df9b31]/30 bg-[#0c1222] shadow-lg hover:border-[#df9b31]/70 hover:shadow-[0_0_20px_rgba(223,155,49,0.15)] transition-all duration-300 flex items-center justify-center p-2.5">
              <img src="/India.png" alt="India based, Serving the world" className="w-full h-full object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* How We Work Section (Full Width matching reference design) */}
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 pt-4">
      {/* Heading Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            How we <span className="text-[#df9b31]">Work</span>
          </h3>
          <div className="w-16 h-1 bg-[#df9b31] rounded-full shadow-[0_0_12px_#df9b31] mt-2"></div>
        </div>
      </div>

      {/* 3 Step Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 relative">
        {/* Desktop Connecting SVG Line & Chevron Badges */}
        <div className="hidden md:block absolute -top-10 left-0 right-0 h-20 pointer-events-none z-10">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none">
            <defs>
              <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Animated dotted line 1 -> 2 */}
            <path
              d="M 215 40 Q 275 62 333 40 T 452 40"
              stroke="#df9b31"
              strokeWidth="2.5"
              fill="none"
              className="animated-dash-line opacity-95"
              filter="url(#glow-gold)"
            />
            {/* Animated dotted line 2 -> 3 */}
            <path
              d="M 548 40 Q 608 62 666 40 T 785 40"
              stroke="#df9b31"
              strokeWidth="2.5"
              fill="none"
              className="animated-dash-line opacity-95"
              filter="url(#glow-gold)"
            />

            {/* Glowing dots at line ends connecting to circle badges */}
            <circle cx="215" cy="40" r="4.5" fill="#df9b31" />
            <circle cx="452" cy="40" r="4.5" fill="#df9b31" />
            <circle cx="548" cy="40" r="4.5" fill="#df9b31" />
            <circle cx="785" cy="40" r="4.5" fill="#df9b31" />
          </svg>

          {/* Chevron > badges in center of paths */}
          <div className="absolute top-[26px] left-[33.3%] -translate-x-1/2 w-7 h-7 rounded-full border border-[#df9b31] bg-[#0c1222] shadow-[0_0_15px_rgba(223,155,49,0.6)] flex items-center justify-center pointer-events-auto z-20">
            <ChevronRight size={13} className="text-[#df9b31]" />
          </div>
          <div className="absolute top-[26px] left-[66.6%] -translate-x-1/2 w-7 h-7 rounded-full border border-[#df9b31] bg-[#0c1222] shadow-[0_0_15px_rgba(223,155,49,0.6)] flex items-center justify-center pointer-events-auto z-20">
            <ChevronRight size={13} className="text-[#df9b31]" />
          </div>
        </div>

        {/* Step 1 Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#df9b31]/35 bg-[#0c1222]/90 backdrop-blur-md shadow-[0_0_25px_rgba(223,155,49,0.12)] hover:border-[#df9b31]/70 hover:shadow-[0_0_35px_rgba(223,155,49,0.22)] transition-all duration-300 relative pt-12 flex flex-col justify-start">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-[#df9b31] bg-[#0c1222] shadow-[0_0_20px_rgba(223,155,49,0.4)] flex items-center justify-center z-20">
            <div className="w-16 h-16 rounded-full border border-[#df9b31]/40 bg-gradient-to-b from-[#df9b31]/20 to-transparent flex items-center justify-center">
              <MessageSquare size={24} className="text-[#df9b31]" />
            </div>
          </div>

          <span className="text-[#df9b31] font-heading text-2xl font-bold mb-1">01</span>
          <h4 className="text-white font-heading text-xl font-bold mb-1">Discuss</h4>
          <div className="w-6 h-[2px] bg-[#df9b31] rounded-full mb-4"></div>
          <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
            We discuss your goals, requirements and ideas to understand your vision.
          </p>
        </div>

        {/* Step 2 Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#df9b31]/35 bg-[#0c1222]/90 backdrop-blur-md shadow-[0_0_25px_rgba(223,155,49,0.12)] hover:border-[#df9b31]/70 hover:shadow-[0_0_35px_rgba(223,155,49,0.22)] transition-all duration-300 relative pt-12 flex flex-col justify-start">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-[#df9b31] bg-[#0c1222] shadow-[0_0_20px_rgba(223,155,49,0.4)] flex items-center justify-center z-20">
            <div className="w-16 h-16 rounded-full border border-[#df9b31]/40 bg-gradient-to-b from-[#df9b31]/20 to-transparent flex items-center justify-center">
              <Code2 size={24} className="text-[#df9b31]" />
            </div>
          </div>

          <span className="text-[#df9b31] font-heading text-2xl font-bold mb-1">02</span>
          <h4 className="text-white font-heading text-xl font-bold mb-1">Design & Develop</h4>
          <div className="w-6 h-[2px] bg-[#df9b31] rounded-full mb-4"></div>
          <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
            I design and build a modern, scalable solution that matches your goals.
          </p>
        </div>

        {/* Step 3 Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#df9b31]/35 bg-[#0c1222]/90 backdrop-blur-md shadow-[0_0_25px_rgba(223,155,49,0.12)] hover:border-[#df9b31]/70 hover:shadow-[0_0_35px_rgba(223,155,49,0.22)] transition-all duration-300 relative pt-12 flex flex-col justify-start">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-[#df9b31] bg-[#0c1222] shadow-[0_0_20px_rgba(223,155,49,0.4)] flex items-center justify-center z-20">
            <div className="w-16 h-16 rounded-full border border-[#df9b31]/40 bg-gradient-to-b from-[#df9b31]/20 to-transparent flex items-center justify-center">
              <Rocket size={24} className="text-[#df9b31]" />
            </div>
          </div>

          <span className="text-[#df9b31] font-heading text-2xl font-bold mb-1">03</span>
          <h4 className="text-white font-heading text-xl font-bold mb-1">Launch</h4>
          <div className="w-6 h-[2px] bg-[#df9b31] rounded-full mb-4"></div>
          <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
            We test, refine and launch your project, ensuring everything works smoothly.
          </p>
        </div>
      </div>
    </motion.div>
  </Section>
);

export const Skills = () => (
  <Section id="skills">
    <SectionHeading>Technical Skills</SectionHeading>
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {skills.map(skill => (
        <motion.div whileHover={{ y: -5 }} key={skill.name} className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:shadow-indigo-500/20 hover:border-[#df9b31]/50 transition-all cursor-default">
          <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8" />
          <span className="font-medium text-slate-200">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Services = () => {
  return (
    <Section id="services">
      <SectionHeading>Services</SectionHeading>

      {/* 3 Unique Styled Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Gold/Amber Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-[#df9b31]/40 bg-[#0b0f19]/90 backdrop-blur-md p-7 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(223,155,49,0.08)] hover:border-[#df9b31] hover:shadow-[0_0_35px_rgba(223,155,49,0.2)] transition-all duration-300 group"
        >
          {/* Subtle Background Outline Graphic */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none text-[#df9b31]">
            <Building2 size={120} strokeWidth={1} />
          </div>

          <div>
            {/* Top Row: Icon & Number Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl border border-[#df9b31]/40 bg-[#df9b31]/10 flex items-center justify-center text-[#df9b31] shadow-[0_0_15px_rgba(223,155,49,0.2)]">
                <Building2 size={26} />
              </div>
              <span className="border border-[#df9b31]/30 bg-[#df9b31]/10 text-[#df9b31] text-xs font-bold px-3 py-1 rounded-full">
                01
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#df9b31] transition-colors">
              Business & Corporate Websites
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Professional, responsive and SEO-friendly websites to showcase your business and build trust.
            </p>
          </div>

          {/* Bottom Row: Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {['Responsive', 'Fast', 'SEO-Optimized'].map(tag => (
              <span key={tag} className="px-2.5 py-1 text-[11px] border border-[#df9b31]/30 text-slate-300 rounded-full bg-[#df9b31]/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Cyan/Blue Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[#0099ff]/40 bg-[#071325]/90 backdrop-blur-md p-7 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(0,153,255,0.08)] hover:border-[#0099ff] hover:shadow-[0_0_35px_rgba(0,153,255,0.2)] transition-all duration-300 group"
        >
          {/* Subtle Background Outline Graphic */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none text-[#0099ff]">
            <Code2 size={120} strokeWidth={1} />
          </div>

          <div>
            {/* Top Row: Icon & Number Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl border border-[#0099ff]/40 bg-[#0099ff]/10 flex items-center justify-center text-[#0099ff] shadow-[0_0_15px_rgba(0,153,255,0.2)]">
                <Code2 size={26} />
              </div>
              <span className="border border-[#0099ff]/30 bg-[#0099ff]/10 text-[#0099ff] text-xs font-bold px-3 py-1 rounded-full">
                02
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#0099ff] transition-colors">
              Custom Web Apps & Dashboards
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Tailored web applications and dashboards to simplify your workflow and turn ideas into powerful solutions.
            </p>
          </div>

          {/* Bottom Row: Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {['React', 'Node.js', 'FastAPI', 'Scalable'].map(tag => (
              <span key={tag} className="px-2.5 py-1 text-[11px] border border-[#0099ff]/30 text-slate-300 rounded-full bg-[#0099ff]/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Purple/Violet Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-[#a855f7]/40 bg-[#120822]/90 backdrop-blur-md p-7 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.08)] hover:border-[#a855f7] hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] transition-all duration-300 group"
        >
          {/* Subtle Background Outline Graphic */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none text-[#a855f7]">
            <Paintbrush size={120} strokeWidth={1} />
          </div>

          <div>
            {/* Top Row: Icon & Number Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl border border-[#a855f7]/40 bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Paintbrush size={26} />
              </div>
              <span className="border border-[#a855f7]/30 bg-[#a855f7]/10 text-[#a855f7] text-xs font-bold px-3 py-1 rounded-full">
                03
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#a855f7] transition-colors">
              Website Redesign & Optimisation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Modern, user-friendly and high-performance websites to improve user experience and drive results.
            </p>
          </div>

          {/* Bottom Row: Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {['Modern UI', 'Performance', 'SEO', 'UX'].map(tag => (
              <span key={tag} className="px-2.5 py-1 text-[11px] border border-[#a855f7]/30 text-slate-300 rounded-full bg-[#a855f7]/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e5a943] via-[#fcd777] to-[#df9b31] text-[#0a0a0a] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(223,155,49,0.35)] hover:shadow-[0_0_35px_rgba(223,155,49,0.6)] hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          <Send size={16} /> Start your project <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
};

export const ProjectsSection = () => (
  <Section id="projects">
    <SectionHeading>Featured Projects</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={p.id} className="glass-card rounded-2xl overflow-hidden group cursor-pointer" onClick={() => {
          const target = p.liveUrl || p.githubUrl;
          if (target) window.open(target, '_blank');
        }}>
          <div className="relative h-64 overflow-hidden bg-slate-800">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = `https://opengraph.githubassets.com/1/PrateekNarain/${p.id}` }} />
            <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#df9b31] transition-colors">{p.title}</h3>
            <p className="text-slate-400 mb-6 line-clamp-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(tag => <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-cyan-300">{tag}</span>)}
            </div>
            <div className="flex gap-4" onClick={e => e.stopPropagation()}>
              {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"><FaGithub size={16} /> GitHub</a>}
              {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#df9b31] hover:text-indigo-300 transition-colors"><ExternalLink size={16} /> See Live</a>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <a href="https://github.com/PrateekNarain" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:bg-white/5 transition-colors">
        <FaGithub size={20} /> View all on GitHub
      </a>
    </div>
  </Section>
);

const IconMap: Record<string, any> = {
  Globe,
  BarChart,
  Users,
  Code,
  Layers,
  TrendingUp,
  Share2,
  Calendar,
};

export const ExperienceSection = () => (
  <Section id="experience">
    <SectionHeading>Experience & Achievements</SectionHeading>

    <div className="max-w-5xl mx-auto space-y-12 relative pt-6 before:absolute before:inset-0 before:left-[19px] md:before:left-1/2 md:before:-translate-x-[1px] before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[#df9b31] before:via-[#df9b31]/50 before:to-transparent">

      {/* Top Diamond */}
      <div className="absolute top-0 left-[16px] md:left-1/2 md:-translate-x-[4px] w-[8px] h-[8px] rotate-45 bg-[#df9b31] shadow-[0_0_15px_#df9b31]"></div>

      {experiences.map((exp, i) => (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={exp.id} className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group">

          {/* Timeline Dot */}
          <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#df9b31]/10 border border-[#df9b31]/30 shadow-[0_0_15px_rgba(223,155,49,0.4)] z-10 flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-[#df9b31] shadow-[0_0_10px_#df9b31]"></div>
          </div>

          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-8 h-[1px] bg-[#df9b31]/50 group-odd:-translate-x-full group-even:translate-x-0 z-0"></div>

          {/* Timeline Dot Side Glow */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-[60px] h-[60px] rounded-full bg-[#df9b31]/20 blur-xl group-odd:-translate-x-1/2 group-even:-translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

          <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 group-odd:md:pr-10 group-even:md:pl-10">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-[#df9b31]/30 bg-[#0c1222]/90 shadow-[0_0_25px_rgba(223,155,49,0.08)] hover:border-[#df9b31]/80 hover:shadow-[0_0_35px_rgba(223,155,49,0.2)] transition-all duration-300 relative z-20">

              {/* Header: Date Badge */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#df9b31]/40 bg-[#df9b31]/10 text-[#df9b31] text-xs font-semibold tracking-wide">
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-2">{exp.role}</h3>
              <div className="text-indigo-400 font-medium mb-4 text-sm md:text-base">{exp.organization}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>

              {/* Tags */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/80">
                  {exp.tags.map((tag, i) => {
                    const IconComponent = (IconMap as any)[tag.icon] || Code;
                    return (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-800/40 text-slate-300 text-xs font-medium hover:border-[#df9b31]/50 hover:text-white transition-colors">
                        <IconComponent size={14} className="text-[#df9b31]" />
                        {tag.name}
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || 'No Subject',
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>',
          to: ['prateeknaraindeveloper@gmail.com'],
          reply_to: data.email,
          subject: data.subject,
          html: `
            <div style="background-color: #ffffff; padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width: 100%; box-sizing: border-box; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
              
              <!-- Header -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="48" style="vertical-align: middle;">
                    <img src="${window.location.origin}/Portfolio_logo.png" width="44" height="44" style="display: block; border-radius: 8px; object-fit: contain;" alt="Logo" />
                  </td>
                  <td style="padding-left: 16px; vertical-align: middle;">
                    <div style="font-size: 22px; font-weight: 800; color: #0b1120; letter-spacing: 2px; margin-bottom: 4px;">PRATEEK <span style="color:#9ca3af; font-weight: 500;">NARAIN</span></div>
                    <div style="font-size: 11px; font-weight: 700; color: #9ca3af; letter-spacing: 3px;">PORTFOLIO WEBSITE</div>
                  </td>
                </tr>
              </table>

              <!-- Sender Info -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 45px; margin-bottom: 25px;">
                <tr>
                  <td width="56" height="56" style="background-color: #eff6ff; border-radius: 50%; text-align: center; vertical-align: middle;">
                    <img src="https://img.icons8.com/ios-filled/50/3b82f6/user.png" width="24" height="24" style="display: block; margin: 0 auto;" alt="User" />
                  </td>
                  <td style="padding-left: 20px; vertical-align: middle;">
                    <div style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">${data.name}</div>
                    <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none; font-size: 16px; font-weight: 500;">${data.email}</a>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="48" style="vertical-align: top;">
                      <div style="width: 48px; height: 48px; background-color: #e0f2fe; border-radius: 50%; text-align: center; line-height: 48px;">
                        <img src="https://img.icons8.com/ios-filled/50/3b82f6/speech-bubble-with-dots.png" width="24" height="24" style="display: inline-block; vertical-align: middle;" alt="Message" />
                      </div>
                    </td>
                    <td style="padding-left: 20px; vertical-align: middle;">
                      <div style="font-size: 18px; color: #0f172a; line-height: 1.6; white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
                    </td>
                  </tr>
                </table>
              </div>

            </div>
          `
        })
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading>Let's build something great together</SectionHeading>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
          <p className="text-slate-400 mb-8">I'm currently available for new freelance projects. Let's discuss how we can elevate your business online.</p>
          <div className="space-y-4">
            <a href="#" onClick={handleEmailClick} className="flex items-center gap-4 text-slate-300 hover:text-[#df9b31] transition-colors p-4 glass-card rounded-xl cursor-pointer">
              <Mail className="text-[#df9b31]" /> prateeknaraindeveloper@gmail.com
            </a>
          </div>
        </div>
        <form className="glass-card p-8 rounded-2xl space-y-4" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg flex items-center gap-3">
              <CheckCircle size={20} />
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
              Failed to send message. Please try again or email me directly.
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#df9b31] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#df9b31] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
            <input type="text" name="subject" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#df9b31] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea name="message" rows={4} required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#df9b31] transition-colors"></textarea>
          </div>
          <button type="submit" disabled={status === 'loading'} className="w-full py-4 rounded-lg bg-gradient-accent text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  );
};

export const Footer = () => (
  <footer className="border-t border-slate-800 py-12 mt-20 text-center">
    <p className="text-slate-400 mb-4">Building digital experiences that matter.</p>
    <p className="text-slate-500 text-sm">© 2026 Prateek Narain. All rights reserved.</p>
  </footer>
);
