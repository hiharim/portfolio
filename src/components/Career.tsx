import { Briefcase } from 'lucide-react';

export function Career() {
  const careers = [
    {
      company: '네이버',
      position: 'Senior Mobile Developer',
      period: '2021.03 - 현재',
      description: '모바일 앱 개발 및 아키텍처 설계, 팀 리딩'
    },
    {
      company: '카카오',
      position: 'Mobile Developer',
      period: '2019.07 - 2021.02',
      description: 'iOS/Android 앱 개발 및 유지보수'
    },
    {
      company: '스타트업 A',
      position: 'Junior Developer',
      period: '2018.01 - 2019.06',
      description: 'React Native 기반 크로스 플랫폼 앱 개발'
    }
  ];

  return (
    <section id="career" className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-[#1E293B] mb-2">경력</h2>
          <p className="text-gray-600">
            다양한 기업에서 쌓아온 모바일 개발 실무 경험
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#FB7185] rounded-lg flex items-center justify-center text-white">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-white">{career.company}</h3>
              </div>
              <p className="text-[#FB7185] mb-1">{career.position}</p>
              <p className="text-gray-300 text-sm mb-3">{career.period}</p>
              <p className="text-gray-200 text-sm">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}