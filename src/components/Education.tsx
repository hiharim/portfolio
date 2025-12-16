import { GraduationCap, Globe } from 'lucide-react';

export function Education() {
  const education = [
    {
      school: '서울대학교',
      major: '컴퓨터공학과',
      period: '2015 - 2019',
      degree: '학사'
    },
    {
      school: 'KAIST',
      major: '소프트웨어공학',
      period: '2019 - 2021',
      degree: '석사'
    }
  ];

  const languages = [
    { test: 'TOEIC', score: '950' },
    { test: 'TOEIC Speaking', score: 'IH (Level 7)' },
    { test: 'OPIc', score: 'AL' }
  ];

  return (
    <section id="education" className="py-8 bg-gradient-to-r from-gray-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-[#1E293B] mb-2">학력 및 어학</h2>
          <p className="text-gray-600">
            탄탄한 학력과 우수한 어학 능력
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-[#1E293B]">학력</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#1E293B]">
                  <h4 className="text-[#1E293B] mb-1">{edu.school}</h4>
                  <p className="text-gray-700 text-sm mb-1">{edu.major}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                    <span className="px-2 py-1 bg-[#1E293B] text-white rounded text-xs">{edu.degree}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FB7185] rounded-lg flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <h3 className="text-[#1E293B]">어학</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#FB7185]">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#1E293B]">{lang.test}</h4>
                    <span className="px-3 py-1 bg-[#FB7185] text-white rounded-full text-sm">
                      {lang.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}