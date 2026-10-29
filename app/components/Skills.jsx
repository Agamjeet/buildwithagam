'use client';

import GsapButton from "./GsapButton";
import AnimatedBackground from "./AnimatedBackground";

export default function Skills() {
  const skills = [
    { name: 'Python', fillColor: '#60a5fa', textColor: '#1e40af' },
    { name: 'Machine Learning', fillColor: '#a78bfa', textColor: '#5b21b6' },
    { name: 'Deep Learning', fillColor: '#22d3ee', textColor: '#0e7490' },
    { name: 'Natural Language Processing', fillColor: '#34d399', textColor: '#047857' },
    { name: 'NextJS', fillColor: '#fbbf24', textColor: '#92400e'},
    { name: 'Data Analysis', fillColor: '#f87171', textColor: '#991b1b' },
    { name: 'SQL', fillColor: '#f472b6', textColor: '#be185d' },
    { name: 'Cloud Computing (AWS/Azure/GCP)', fillColor: '#818cf8', textColor: '#3730a3' }
  ];

  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 py-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-center">
              <GsapButton
                text={skill.name}
                startColor={skill.fillColor}
                fillColor="#3b82f6"
                textColor={skill.textColor}
                fillTextColor="#ffffff"
                size="large"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


