import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:border-primary-700/40 transition-all duration-400"
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
      
      <div className="p-6">
        {/* Icon & number */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl opacity-90`}>
              {project.icon}
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600">Dự án 0{project.id}</div>
              <div className="text-xs text-gray-500">{project.subtitle}</div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to={`/projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-900/30 border border-primary-800/50 text-primary-400 text-sm font-medium hover:bg-primary-800/40 hover:border-primary-700/60 transition-all group/btn"
          >
            Xem chi tiết
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <a
            href={project.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 rounded-xl bg-dark-700/50 border border-gray-800 text-gray-500 hover:text-primary-400 hover:border-primary-800 transition-all"
            title="Mở Google Drive"
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
