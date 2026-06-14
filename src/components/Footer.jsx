import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white font-bold">Lại Như Hiếu Nghĩa</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sinh viên Công nghệ kỹ thuật cơ điện tử<br />
              Đại học Công nghệ – ĐHQGHN
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-300 font-semibold text-sm mb-4">Điều hướng</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Trang chủ' },
                { path: '/projects', label: 'Dự án' },
                { path: '/summary', label: 'Tổng kết' },
                { path: '/contact', label: 'Liên hệ' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-300 font-semibold text-sm mb-4">Liên hệ</h4>
            <div className="space-y-2">
              <a href="mailto:25021420@vnu.edu.vn" className="flex items-center gap-2 text-gray-500 hover:text-primary-400 text-sm transition-colors">
                <Mail size={14} />
                25021420@vnu.edu.vn
              </a>
              <a
                href="https://drive.google.com/drive/folders/1O4Lo6m6eROXeZmDZk0cq68lA9RbxN7kh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-primary-400 text-sm transition-colors"
              >
                <ExternalLink size={14} />
                Google Drive
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs font-mono">
            © 2025 Lại Như Hiếu Nghĩa · MSV: 25021420
          </p>
          <p className="text-gray-700 text-xs">
            Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo
          </p>
        </div>
      </div>
    </footer>
  );
}
