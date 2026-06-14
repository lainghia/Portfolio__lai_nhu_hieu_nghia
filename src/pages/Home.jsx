import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Cpu, Globe, Brain, Zap, Target, Compass, BookOpen } from 'lucide-react';
import avatarMain from '../assets/avatar3.jpg';
import avatar2 from '../assets/avatar2.jpg';
import SectionTitle from '../components/SectionTitle';

const TYPED_STRINGS = [
  'Công nghệ kỹ thuật cơ điện tử',
  'AI & Machine Learning enthusiast',
  'Digital Product Builder',
];

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = TYPED_STRINGS[textIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTextIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, textIndex]);

  return (
    <span className="text-primary-400 font-mono">
      {displayed}<span className="cursor-blink text-primary-500">|</span>
    </span>
  );
}

const goals = [
  {
    icon: <Target size={24} className="text-primary-400" />,
    title: 'Mục tiêu học tập',
    desc: 'Nắm vững kiến thức nền tảng về Công nghệ số, AI và cách ứng dụng chúng trong ngành Cơ điện tử. Xây dựng tư duy số và kỹ năng làm việc trong môi trường số hóa.',
  },
  {
    icon: <Compass size={24} className="text-primary-400" />,
    title: 'Định hướng phát triển',
    desc: 'Trở thành kỹ sư cơ điện tử ứng dụng AI: phát triển hệ thống tự động hóa thông minh, robot, và sản phẩm IoT kết hợp trí tuệ nhân tạo.',
  },
  {
    icon: <BookOpen size={24} className="text-primary-400" />,
    title: 'Mục đích Portfolio',
    desc: 'Tổng hợp và trình bày có hệ thống các dự án thực hành môn học, thể hiện quá trình học tập, kỹ năng số và khả năng ứng dụng AI trong thực tiễn.',
  },
];

const interests = [
  { icon: <Cpu size={18} />, label: 'Lập trình' },
  { icon: <Brain size={18} />, label: 'Trí tuệ nhân tạo' },
  { icon: <Zap size={18} />, label: 'Tự động hóa' },
  { icon: <Globe size={18} />, label: 'Phát triển số' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0 bg-radial-green opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-mono mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  VNU1001_E252018 · Nhập môn Công nghệ số & AI
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Lại Như<br />
                  <span className="text-gradient">Hiếu Nghĩa</span>
                </h1>

                <div className="text-lg sm:text-xl text-gray-400 mb-2 h-8">
                  <TypingEffect />
                </div>

                <p className="text-gray-500 text-sm mb-6 font-mono">
                  Đại học Công nghệ – ĐHQGHN
                </p>

                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                  Xin chào, tôi là <span className="text-primary-400 font-medium">Lại Như Hiếu Nghĩa</span>. 
                  Tôi đang theo học ngành Công nghệ kỹ thuật cơ điện tử, 
                  yêu thích công nghệ, AI và phát triển các sản phẩm số.
                </p>

                {/* Interests */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {interests.map(item => (
                    <div key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700/50 border border-gray-800 text-gray-400 text-sm">
                      <span className="text-primary-500">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link to="/projects" className="btn-primary">
                    Xem dự án
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    <Mail size={16} />
                    Liên hệ
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 rounded-full border border-primary-700/20"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(34,197,94,0.1), transparent)',
                  }}
                />
                
                {/* Main avatar */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-72 h-72 sm:w-80 sm:h-80"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-700/30 to-transparent" />
                  <img
                    src={avatarMain}
                    alt="Lại Như Hiếu Nghĩa"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                  
                  {/* Info badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                    <div className="text-white font-semibold text-sm">Lại Như Hiếu Nghĩa</div>
                    <div className="text-primary-400 text-xs font-mono">MSV: 25021420</div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-primary-700/30"
                >
                  <div className="text-xs text-gray-400">Khoa</div>
                  <div className="text-primary-400 text-xs font-semibold">Cơ học KT & TĐH</div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass rounded-xl p-3 border border-primary-700/30"
                >
                  <div className="text-xs text-gray-400">6 Dự án</div>
                  <div className="text-white text-xs font-semibold">Đã hoàn thành ✓</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
          >
            <span className="text-xs font-mono">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals section */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            eyebrow="Định hướng"
            title="Mục tiêu & Tầm nhìn"
            subtitle="Những định hướng dẫn dắt hành trình học tập và phát triển trong kỷ nguyên số"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-900/40 border border-primary-800/30 flex items-center justify-center mb-4 group-hover:bg-primary-900/60 transition-colors">
                  {goal.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{goal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick preview */}
      <section className="section-padding border-t border-gray-800/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                eyebrow="Dự án"
                title="6 Bài thực hành đã hoàn thành"
                subtitle="Từ kỹ năng cơ bản đến ứng dụng AI nâng cao, mỗi dự án là một bước tiến trong hành trình số hóa."
              />
              <Link to="/projects" className="btn-primary inline-flex">
                Xem tất cả dự án
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src={avatar2}
                alt="Tà Xùa - Hành trình"
                className="w-full h-72 object-cover rounded-2xl"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-dark-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-bold">Tà Xùa – 1758m</div>
                <div className="text-primary-400 text-sm">Luôn hướng đến đỉnh cao mới</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
