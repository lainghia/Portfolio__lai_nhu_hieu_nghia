import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

export default function Projects() {
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-mono mb-6">
              Môn: Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Danh sách <span className="text-gradient">Dự án</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              6 bài thực hành từ kỹ năng số cơ bản đến ứng dụng AI trong học tập và nghiên cứu.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Tìm kiếm dự án..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-3 bg-dark-700/50 border border-gray-800 rounded-xl text-gray-300 text-sm placeholder-gray-600 focus:outline-none focus:border-primary-700 transition-colors"
              />
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p>Không tìm thấy dự án phù hợp</p>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-6"
        >
          {[
            { value: '6', label: 'Dự án hoàn thành' },
            { value: '10+', label: 'Công cụ sử dụng' },
            { value: '100%', label: 'Tỷ lệ hoàn thành' },
          ].map(stat => (
            <div key={stat.label} className="text-center glass rounded-2xl p-6">
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
