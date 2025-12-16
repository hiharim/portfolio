import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="mb-3">김민수</h3>
            <p className="text-gray-400 leading-relaxed">
              모바일 앱 개발자<br />
              사용자 경험을 최우선으로 생각하는<br />
              크리에이터
            </p>
          </div>

          <div>
            <h3 className="mb-3">빠른 링크</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#skills" className="hover:text-[#FB7185] transition-colors">스킬</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FB7185] transition-colors">경력</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FB7185] transition-colors">프로젝트</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FB7185] transition-colors">연락처</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">소셜 미디어</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FB7185] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FB7185] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FB7185] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-[#FB7185]" /> by 김민수 © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}