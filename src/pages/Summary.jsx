import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Heart, Star, TrendingUp, Users, Brain, Search, FileText, Lightbulb, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const skills = [
  { icon: <Search size={20} />, title: 'Tìm kiếm thông tin', desc: 'Thành thạo tìm kiếm nâng cao trên Google Scholar, Semantic Scholar với toán tử Boolean. Đánh giá nguồn bằng CRAAP Test.', level: 90 },
  { icon: <Shield size={20} />, title: 'Đánh giá nguồn dữ liệu', desc: 'Phân biệt thông tin chính thống và tin giả, kiểm chứng độ tin cậy của tài liệu học thuật và thông tin số.', level: 85 },
  { icon: <Brain size={20} />, title: 'Sử dụng AI hiệu quả', desc: 'Tương tác và khai thác tối đa tiềm năng của ChatGPT, DALL-E 3 và các mô hình AI tạo sinh trong học tập.', level: 88 },
  { icon: <Lightbulb size={20} />, title: 'Viết Prompt', desc: 'Xây dựng Prompt theo 3 cấp độ: đơn giản → cải tiến → nâng cao. Áp dụng 7 nguyên tắc Prompt Engineering hiệu quả.', level: 92 },
  { icon: <Users size={20} />, title: 'Làm việc nhóm online', desc: 'Sử dụng Trello, Google Docs, Slack để quản lý dự án nhóm. Xây dựng quy trình Kanban và giao tiếp hiệu quả.', level: 80 },
  { icon: <FileText size={20} />, title: 'Sáng tạo nội dung số', desc: 'Tạo hình ảnh với DALL-E 3, thiết kế slide với Gamma.app, xây dựng workflow sáng tạo tích hợp AI.', level: 83 },
];

const challenges = [
  {
    icon: '🔧',
    title: 'Làm quen công cụ mới',
    desc: 'Ban đầu gặp khó khăn khi tiếp cận nhiều nền tảng cùng lúc. Đã vượt qua bằng cách học từng công cụ theo thứ tự ưu tiên và tra cứu tài liệu hướng dẫn.',
  },
  {
    icon: '🔍',
    title: 'Chọn lọc thông tin',
    desc: 'Khó đánh giá độ tin cậy của thông tin trong biển dữ liệu trực tuyến. Đã học và áp dụng phương pháp CRAAP Test để kiểm chứng nguồn.',
  },
  {
    icon: '🤖',
    title: 'Tối ưu cách sử dụng AI',
    desc: 'AI không phải lúc nào cũng cho kết quả như kỳ vọng với Prompt đơn giản. Đã nghiên cứu và thực hành Prompt Engineering để nâng cao chất lượng output.',
  },
];

const timeline = [
  { week: 'Tuần 1-2', title: 'Kỹ năng số cơ bản', desc: 'Quản lý tệp, thư mục và tìm kiếm thông tin học thuật' },
  { week: 'Tuần 3-4', title: 'Prompt Engineering', desc: 'Viết và tối ưu Prompt cho các tác vụ học tập với ChatGPT' },
  { week: 'Tuần 5-6', title: 'Hợp tác & Sáng tạo', desc: 'Làm việc nhóm trực tuyến và sáng tạo nội dung với AI' },
  { week: 'Tuần 7-8', title: 'Đạo đức AI & Tổng kết', desc: 'Nghiên cứu đạo đức AI và xây dựng Portfolio' },
];

export default function Summary() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-mono mb-6">
            Tổng kết môn học
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hành trình <span className="text-gradient">Học tập</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nhìn lại quá trình, kỹ năng đạt được và những bài học từ môn Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo.
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mb-20">
          <SectionTitle eyebrow="Tiến trình" title="Lộ trình học tập" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-700 via-primary-800/50 to-transparent" />
            <div className="space-y-6 pl-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative glass rounded-xl p-5"
                >
                  <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-primary-600 border-2 border-dark-900 shadow-lg shadow-primary-900/50" />
                  <div className="text-xs font-mono text-primary-500 mb-1">{item.week}</div>
                  <div className="text-white font-semibold mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <SectionTitle eyebrow="Kỹ năng" title="Kỹ năng đạt được" />
          <div className="grid md:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-900/40 border border-primary-800/30 flex items-center justify-center text-primary-400 shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white font-semibold text-sm">{skill.title}</h3>
                      <span className="text-primary-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress */}
                    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-20">
          <SectionTitle eyebrow="Khó khăn" title="Thách thức & Cách vượt qua" />
          <div className="grid md:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border-l-2 border-amber-600/40"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal reflection */}
        <section className="mb-20">
          <SectionTitle eyebrow="Cảm nhận" title="Cảm nhận cá nhân" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Heart size={20} className="text-rose-400" />
                <span className="text-white font-bold">Lại Như Hiếu Nghĩa · MSV: 25021420</span>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Môn học <span className="text-primary-400 font-medium">"Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo"</span> đã mở ra cho tôi một góc nhìn hoàn toàn mới về cách học tập và làm việc trong kỷ nguyên số. Từ một sinh viên còn xa lạ với khái niệm Prompt Engineering hay AI tạo sinh, tôi đã dần xây dựng được nền tảng kỹ năng số vững chắc qua từng bài thực hành.
                </p>
                <p>
                  Điều ấn tượng nhất trong hành trình này là việc nhận ra rằng <span className="text-white font-medium">AI không thay thế tư duy của con người, mà là công cụ khuếch đại nó.</span> Khi biết cách viết Prompt đúng, một mô hình AI có thể trở thành trợ lý học tập cực kỳ hiệu quả – từ tóm tắt tài liệu, giải thích khái niệm phức tạp đến tạo bộ câu hỏi ôn tập có cấu trúc rõ ràng.
                </p>
                <p>
                  Với chuyên ngành Công nghệ kỹ thuật cơ điện tử, những kỹ năng số này càng trở nên thiết yếu. Tôi hình dung tương lai sẽ phát triển các hệ thống tự động hóa thông minh kết hợp AI – và môn học này chính là bước đầu tiên trên con đường đó. Cảm ơn các thầy cô đã thiết kế một chương trình học thiết thực, giúp sinh viên không chỉ biết dùng công nghệ mà còn hiểu cách sử dụng <span className="text-primary-400 font-medium">có trách nhiệm và có đạo đức.</span>
                </p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-6">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={16} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-gray-500 text-sm ml-2">Đánh giá tổng thể môn học</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '6', label: 'Dự án', sub: 'hoàn thành' },
            { value: '7', label: 'Nguyên tắc', sub: 'Prompt Engineering' },
            { value: '10+', label: 'Công cụ', sub: 'đã sử dụng' },
            { value: '100%', label: 'Nỗ lực', sub: 'đã bỏ ra' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="text-2xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-white text-sm font-semibold">{s.label}</div>
              <div className="text-gray-600 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
