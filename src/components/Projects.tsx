import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: '헬스케어 트래킹 앱',
      description: '일일 건강 데이터를 추적하고 분석하는 iOS/Android 앱. 50만+ 다운로드를 달성한 인기 헬스케어 앱입니다.',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: '소셜 네트워킹 플랫폼',
      description: '실시간 채팅과 미디어 공유 기능을 갖춘 소셜 미디어 앱. 직관적인 UI/UX로 사용자 만족도 4.8점을 기록했습니다.',
      tags: ['Flutter', 'Node.js', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: '이커머스 쇼핑 앱',
      description: '매끄러운 결제 시스템과 개인화된 추천 기능을 제공하는 쇼핑 앱. 월 거래액 10억원을 달성했습니다.',
      tags: ['Swift', 'Kotlin', 'AWS'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: '음악 스트리밍 서비스',
      description: '오프라인 재생과 맞춤형 플레이리스트를 제공하는 음악 앱. 고품질 오디오와 최적화된 배터리 성능이 특징입니다.',
      tags: ['React Native', 'TypeScript', 'RESTful API'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: '생산성 관리 도구',
      description: '할 일 관리, 시간 추적, 팀 협업 기능을 통합한 생산성 앱. 기업 고객 500+ 확보에 성공했습니다.',
      tags: ['Flutter', 'Firebase', 'Material Design'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: '음식 배달 플랫폼',
      description: '실시간 주문 추적과 AI 기반 맛집 추천을 제공하는 배달 앱. 일일 활성 사용자 10만명을 돌파했습니다.',
      tags: ['Swift', 'Kotlin', 'Google Maps'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#1E293B] mb-3">프로젝트</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            다양한 분야에서 성공적으로 출시한 모바일 앱 프로젝트들입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-40 bg-gray-100 overflow-hidden">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-[#1E293B] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-rose-50 text-[#FB7185] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-gray-600 hover:text-[#1E293B] transition-colors"
                  >
                    <Github size={18} />
                    <span>코드</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-[#FB7185] hover:text-[#F43F5E] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>데모</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}