import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (실제로는 백엔드 API 호출)
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-[#1E293B] to-[#334155]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-white mb-3">연락처</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">연락 정보</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FB7185] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">이메일</p>
                  <a href="mailto:contact@example.com" className="text-gray-300 hover:text-[#FB7185] transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FB7185] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">전화</p>
                  <a href="tel:+82-10-1234-5678" className="text-gray-300 hover:text-[#FB7185] transition-colors">
                    +82 10-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FB7185] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">위치</p>
                  <p className="text-gray-300">
                    서울특별시 강남구
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-white mb-4">메시지 보내기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB7185] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB7185] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB7185] focus:border-transparent resize-none text-white placeholder-gray-400"
                  placeholder="프로젝트에 대해 자세히 알려주세요..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#FB7185] text-white rounded-lg hover:bg-[#F43F5E] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                메시지 전송
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}