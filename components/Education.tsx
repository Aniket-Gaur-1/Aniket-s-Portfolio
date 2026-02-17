
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-12 text-[#1d1d1f]">Education</h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-gray-200">
                <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-[#0071e3]"></div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">{edu.school}</h3>
                <p className="text-lg font-medium text-[#424245] mt-1">{edu.degree}</p>
                <div className="flex justify-between items-center mt-2 text-[#86868b] text-sm">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.coursework && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map(course => (
                        <span key={course} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-[#1d1d1f]">Certifications</h2>
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl card-shadow border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1d1d1f] leading-snug">{cert.title}</h3>
                  <span className="text-xs font-medium text-[#86868b] whitespace-nowrap ml-4">{cert.date}</span>
                </div>
                <p className="text-sm text-[#0071e3] font-medium">{cert.issuer}</p>
                {cert.focus && (
                  <p className="text-xs text-[#86868b] mt-3 italic">Focus: {cert.focus}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
