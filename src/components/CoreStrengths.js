import React from "react";
import { MdCode, MdStorage, MdAutoAwesome, MdTrendingUp, MdBuild, MdRocket } from "react-icons/md";

const STRENGTHS = [
  { label: "Web Application Development", icon: MdCode, color: "from-blue-500 to-cyan-500" },
  { label: "Backend Development", icon: MdBuild, color: "from-purple-500 to-pink-500" },
  { label: "Database Design", icon: MdStorage, color: "from-green-500 to-emerald-500" },
  { label: "Workflow Automation", icon: MdAutoAwesome, color: "from-orange-500 to-red-500" },
  { label: "Business Process Improvement", icon: MdTrendingUp, color: "from-indigo-500 to-blue-500" },
  { label: "Power Platform Solutions", icon: MdRocket, color: "from-pink-500 to-rose-500" },
];

// Duplicate the strengths array for seamless looping
const STRENGTHS_DUPLICATED = [...STRENGTHS, ...STRENGTHS];

export default function CoreStrengths() {
  return (
    <section id="strengths" className="py-16 bg-zinc-950 dark:bg-slate-50 transition-colors duration-300 ease-in-out overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-mono text-zinc-700 dark:text-slate-500 tracking-wider uppercase transition-colors duration-300 ease-in-out">
            Core Competencies
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-zinc-950 mt-3 leading-tight transition-colors duration-300 ease-in-out">
            What I Build
          </h2>
          <p className="text-lg text-zinc-400 dark:text-slate-600 mt-4 max-w-2xl mx-auto transition-colors duration-300 ease-in-out">
            Specialized skills that drive business results
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          
          {/* Fade gradient overlays for seamless edge effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-zinc-950 dark:from-slate-50 to-transparent z-10 pointer-events-none transition-colors duration-300 ease-in-out" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-zinc-950 dark:from-slate-50 to-transparent z-10 pointer-events-none transition-colors duration-300 ease-in-out" />

          {/* FIXED: Inner Wrapper enforces strict track measurement */}
          <div className="flex w-max min-w-full items-center">
            {/* Marquee Track */}
            <div className="flex shrink-0 gap-6 sm:gap-8 px-4 animate-marquee">
              {STRENGTHS_DUPLICATED.map((strength, index) => {
                const IconComponent = strength.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 sm:w-96"
                  >
                    <div className="group h-full bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-slate-100 dark:to-slate-50 border border-zinc-800 dark:border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 dark:hover:shadow-orange-600/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
                      
                      {/* Icon Container */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${strength.color} shadow-lg mb-4 transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>

                      {/* Label */}
                      <h3 className="text-lg sm:text-xl font-bold text-white dark:text-zinc-900 transition-colors duration-300 ease-in-out">
                        {strength.label}
                      </h3>

                      {/* Hover Indicator */}
                      <div className="mt-4 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-600 dark:from-orange-600 dark:to-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics/Highlights */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="text-center p-4 bg-zinc-900/50 dark:bg-slate-100/50 rounded-lg border border-zinc-800 dark:border-slate-200 transition-all duration-300 ease-in-out">
            <p className="text-2xl sm:text-3xl font-bold text-amber-500 dark:text-orange-600">6+</p>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-slate-600 mt-2">Core Skills</p>
          </div>
          <div className="text-center p-4 bg-zinc-900/50 dark:bg-slate-100/50 rounded-lg border border-zinc-800 dark:border-slate-200 transition-all duration-300 ease-in-out">
            <p className="text-2xl sm:text-3xl font-bold text-amber-500 dark:text-orange-600">100%</p>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-slate-600 mt-2">Dedication</p>
          </div>
          <div className="text-center p-4 bg-zinc-900/50 dark:bg-slate-100/50 rounded-lg border border-zinc-800 dark:border-slate-200 transition-all duration-300 ease-in-out col-span-2 sm:col-span-1">
            <p className="text-2xl sm:text-3xl font-bold text-amber-500 dark:text-orange-600">∞</p>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-slate-600 mt-2">Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}