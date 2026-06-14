import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Wrench, Target, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/projects" />;

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-400 text-sm transition-colors"
          >
            <ArrowLeft size={15} />
            Quay lại danh sách
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl overflow-hidden mb-8"
        >
          <div className={`h-2 bg-gradient-to-r ${project.color}`} />
          <div className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shrink-0`}>
                {project.icon}
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 mb-1">Dự án 0{project.id} · {project.subtitle}</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{project.title}</h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target size={18} className="text-primary-400" />
              <h2 className="text-white font-bold text-lg">Mục tiêu</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">{project.objective}</p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-white font-bold text-lg mb-5">Các bước thực hiện</h2>
            <div className="space-y-3">
              {project.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-900/50 border border-primary-700/40 text-primary-400 text-xs font-mono shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={18} className="text-primary-400" />
              <h2 className="text-white font-bold text-lg">Công cụ sử dụng</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-4 py-2 rounded-lg bg-dark-700/50 border border-gray-800 text-gray-300 text-sm font-medium hover:border-primary-700/40 hover:text-primary-300 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-white font-bold text-lg mb-5">Kết quả đạt được</h2>
            <div className="space-y-3">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={17} className="text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Drive link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-primary-800/30"
          >
            <h2 className="text-white font-bold text-lg mb-3">Tài liệu dự án</h2>
            <p className="text-gray-500 text-sm mb-4">Toàn bộ báo cáo, hình ảnh và tài liệu minh họa được lưu trữ trên Google Drive.</p>
            <a
              href={project.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <ExternalLink size={15} />
              Xem tài liệu trên Google Drive
            </a>
          </motion.div>
        </div>

        {/* Prev / Next */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="glass rounded-xl p-4 hover:border-primary-700/40 transition-all group"
            >
              <div className="text-xs text-gray-600 mb-1">← Dự án trước</div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors line-clamp-1">{prev.title}</div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="glass rounded-xl p-4 hover:border-primary-700/40 transition-all group text-right"
            >
              <div className="text-xs text-gray-600 mb-1">Dự án tiếp →</div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors line-clamp-1">{next.title}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
