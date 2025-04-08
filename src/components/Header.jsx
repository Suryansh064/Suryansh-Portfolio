// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// export default function Header() {
//   return (
//     <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
//       <div className="container mx-auto px-6 py-20">
//         <div className="flex flex-col items-center text-center">
//           <img 
//             src="/images/Suryansh.jpg"
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-slate-600 shadow-xl mb-6"
//           />
//           <h1 className="text-4xl font-bold mb-2 text-slate-100">Suryansh Singh</h1>
//           <p className="text-xl mb-6 text-slate-300">
//             Web Developer | MCA Student at NIT Jamshedpur | DSA IN C++
//           </p>
//           <div className="flex gap-4">
//             <a 
//               href="https://github.com/Suryansh064" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
//             >
//               <Github size={24} className="text-white" />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/suryansh-singh-8932062aa/" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
//             >
//               <Linkedin size={24} className="text-white" />
//             </a>
//             <a 
//               href="https://mail.google.com/mail/u/0/#inbox" 
//               className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-110"
//             >
//               <Mail size={24} className="text-white" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      <Navbar />
      <header className="relative min-h-screen flex items-center bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
        {/* 3D Geometric Shapes Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/images/Suryansh.jpg"
                alt="Profile"
                className="relative w-32 h-32 rounded-full border-4 border-white/50 shadow-2xl transform transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-8 transform hover:scale-105 transition duration-500">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Suryansh Singh
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                Web Developer | MCA Student at NIT Jamshedpur | DSA IN C++
              </p>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/Suryansh064", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/suryansh-singh-8932062aa/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={label}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative p-3 bg-slate-800 rounded-full transform transition duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon size={24} className="text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </header>
    </>
  );
}