import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Khởi động hệ thống...');

  const messages = [
    'Khởi động hệ thống...',
    'Tải dữ liệu dự án...',
    'Render giao diện...',
    'Sẵn sàng!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2;
        if (next >= 25) setText(messages[1]);
        if (next >= 55) setText(messages[2]);
        if (next >= 85) setText(messages[3]);
        return Math.min(next, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-green opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary-600/30" />
          <div className="absolute inset-2 rounded-full border-2 border-primary-500/50" />
          <div className="absolute inset-4 rounded-full bg-primary-600/20 flex items-center justify-center">
            <span className="text-2xl">⚙</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gradient mb-1"
        >
          Lại Như Hiếu Nghĩa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-sm font-mono mb-10"
        >
          MSV: 25021420
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span className="font-mono">{text}</span>
            <span className="font-mono text-primary-500">{progress}%</span>
          </div>
          <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
