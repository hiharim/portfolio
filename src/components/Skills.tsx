export function Skills() {
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Expo']
    },
    {
      category: 'Frontend & Backend',
      skills: ['React.js', 'TypeScript', 'JavaScript', 'Node.js', 'Firebase', 'REST API']
    },
    {
      category: 'Tools & Design',
      skills: ['Git & GitHub', 'Figma', 'Xcode', 'Android Studio', 'VS Code']
    },
    {
      category: 'App Services',
      skills: ['App Store Connect', 'Google Play Console', 'Push Notifications', 'Analytics']
    }
  ];

  return (
    <section id="skills" className="py-8 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-white mb-2">스킬</h2>
          <p className="text-gray-300">
            다양한 기술 스택과 도구를 활용하여 최고의 모바일 앱을 개발합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-[#1E293B] mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-rose-50 text-[#FB7185] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}