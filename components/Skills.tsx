
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  // Fun additional skills to sprinkle in
  const funSkills = [
    { name: "Coffee Consumption", value: "Expert" },
    { name: "Fixing bugs at 3 AM", value: "Grandmaster" },
    { name: "Searching StackOverflow", value: "God-tier" },
    { name: "Explaining it to Rubber Duck", value: "Senior" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">The Toolset.</h2>
          <p className="text-xl text-[#86868b]">A mix of logic, magic, and late nights.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="p-8 rounded-[2rem] bg-[#f5f5f7] hover:bg-white border-2 border-transparent hover:border-gray-200 transition-all duration-500 card-shadow group">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 flex items-center">
                {category.title}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">⚡️</span>
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-[#424245] font-medium flex items-center justify-between group/item">
                    <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#0071e3] mr-3 scale-0 group-hover/item:scale-100 transition-transform"></span>
                        {skill}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#86868b] opacity-0 group-hover/item:opacity-100 transition-opacity">
                        100%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-black text-white flex flex-col md:flex-row items-center justify-between reveal overflow-hidden relative">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">The "Honest" Skills</h3>
                <p className="text-gray-400 mb-8 md:mb-0">What really keeps the code running.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
                {funSkills.map((s) => (
                    <div key={s.name} className="px-4 py-3 bg-white/10 rounded-2xl backdrop-blur-md hover:bg-white/20 transition-all cursor-default">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{s.name}</p>
                        <p className="text-lg font-bold">{s.value}</p>
                    </div>
                ))}
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 rotate-12 select-none">☕️</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
