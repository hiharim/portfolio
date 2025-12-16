import { Github, Linkedin, Mail, Code2, Sparkles, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import boxingGif from 'figma:asset/4b5f03af882bf07a903055a4667b4a5c25569195.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      icon: <Code2 size={20} />,
      title: '5년+ 경력',
      description: '모바일 앱 개발 전문성'
    },
    {
      icon: <Sparkles size={20} />,
      title: '20+ 프로젝트',
      description: '성공적인 앱 출시 경험'
    },
    {
      icon: <Users size={20} />,
      title: '100만+ 사용자',
      description: '누적 다운로드 수'
    }
  ];

  return (
    <section id="hero" className="bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Hero Content */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start items-center gap-3">
              {/* Boxing GIF */}
              <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-rose-300 shadow-lg">
                <img 
                  src={boxingGif} 
                  alt="Boxing Animation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-[#1E293B] mb-2">
              모바일 앱 개발자<br /><span className="text-[#FB7185]">김민수</span>
            </h1>
            
            <p className="text-gray-600 mb-4">
              iOS와 Android 플랫폼에서 혁신적이고 직관적인 모바일 앱을 개발합니다.<br />
              <span className="text-sm text-gray-500">코딩과 복싱으로 몸과 마음을 단련합니다 💪</span>
            </p>

            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#FB7185] text-white rounded-lg hover:bg-[#F43F5E] transition-colors"
              >
                연락하기
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-2 bg-[#1E293B] text-white rounded-lg hover:bg-[#334155] transition-colors"
              >
                프로젝트 보기
              </button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start text-gray-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FB7185] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FB7185] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-[#FB7185] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Boxing Animation & Highlights */}
          <div className="space-y-4">
            {/* Highlights */}
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-rose-50 transition-colors shadow-sm">
                <div className="text-[#FB7185] flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1E293B] mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}