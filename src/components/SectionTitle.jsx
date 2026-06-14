import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3 justify-start">
          {centered && <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary-700/50" />}
          <span className="text-xs font-mono font-medium text-primary-500 tracking-widest uppercase">
            {eyebrow}
          </span>
          <div className={`h-px bg-gradient-to-r from-primary-700/50 to-transparent ${centered ? 'flex-1' : 'w-16'}`} />
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
