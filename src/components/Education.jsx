
import React from 'react';
import { GraduationCap, Building } from 'lucide-react';

export default function Education() {
  // Local SectionTitle component
  const SectionTitle = ({ icon, title }) => (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-2 text-3xl font-bold text-white">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<GraduationCap className="text-indigo-500" />} title="Education" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* MCA Card */}
          <div className="bg-slate-900 p-8 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <div className="flex items-start gap-4">
              <Building className="text-indigo-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-100">NATIONAL INSTITUTE OF TECHNOLOGY</h3>
                <p className="text-lg font-semibold text-indigo-400 mt-2">Master of Computer Application</p>
                <p className="text-slate-300 mt-2">Jamshedpur, Jharkhand, India</p>
                <div className="mt-4 flex flex-col gap-1">
                  <p className="text-slate-300">
                    <span className="font-semibold text-indigo-400">Current GPA:</span> 8.08/10.0
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold text-indigo-400">Expected Graduation:</span> June 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BSc Card */}
          <div className="bg-slate-900 p-8 rounded-lg shadow-xl hover:bg-slate-800 transition-colors">
            <div className="flex items-start gap-4">
              <Building className="text-indigo-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-100">B. S. NARAIN VOCATIONAL PG COLLEGE</h3>
                <p className="text-lg font-semibold text-indigo-400 mt-2">Bachelor of Science</p>
                <p className="text-slate-300 mt-2">Lucknow, UP, India</p>
                <div className="mt-4 flex flex-col gap-1">
                  <p className="text-slate-300">
                    <span className="font-semibold text-indigo-400">Percentage:</span> 65.83%
                  </p>
                  <p className="text-slate-300">
                    <span className="font-semibold text-indigo-400">Graduation:</span> June 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}