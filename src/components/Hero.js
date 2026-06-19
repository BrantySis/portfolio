import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  "checking credentials ........ ok",
  "loading stack: php, laravel, mysql ........ ok",
  "loading stack: power platform ........ ok",
  "status: available for work",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 320);
    return () => clearTimeout(t);
  }, [visibleLines]);

  // The new hover-to-replay mechanism
  const handleReplay = () => {
    setIsHovering(true);
    setVisibleLines(0);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-16 bg-zinc-950 dark:bg-slate-50 transition-colors duration-300 ease-in-out"
    >
      {/* Grid Container split across 12 cols on desktop */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Right Side: Avatar + Terminal Stack */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full order-first lg:order-last">
          
          {/* Large Profile Picture Component */}
          <div className="w-full flex flex-col items-center lg:items-start group">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-2xl overflow-hidden border-4 border-amber-500 dark:border-amber-400 shadow-2xl shadow-amber-900/30 dark:shadow-amber-200/20 bg-zinc-900 dark:bg-slate-100 transition-all duration-500 ease-in-out transform hover:shadow-amber-500/20">
              
              <img 
                src={process.env.PUBLIC_URL + '/pic.jpg'} 
                alt="Rembrant Pasardan" 
                className="h-full w-full object-contain bg-zinc-950 dark:bg-[#e2e8f0] contrast-[1.15] dark:contrast-100 transition-all duration-500 ease-in-out group-hover:scale-105"
              />
              
              {/* Pulse status indicator overlapping picture */}
              <span className="absolute bottom-3 right-3 block h-5 w-5 rounded-full bg-green-500 ring-4 ring-zinc-950 dark:ring-slate-50 animate-pulse shadow-lg shadow-green-500/50 transition-all duration-500" />
              
              {/* Clean overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent opacity-100 dark:opacity-0 pointer-events-none transition-opacity duration-500" />
            </div>
            
            {/* User Info Below Avatar */}
            <div className="mt-6 text-center lg:text-left w-full px-4 lg:px-0">
              <p className="text-xs font-mono text-zinc-500 dark:text-slate-600 tracking-wider uppercase transition-colors duration-300 ease-in-out">
                SYSTEM USER
              </p>
              <h3 className="text-lg font-bold text-white dark:text-zinc-900 tracking-wide mt-1 transition-colors duration-300 ease-in-out">
                BrantySis
              </h3>
              <p className="text-sm text-zinc-400 dark:text-slate-600 mt-2 font-mono transition-colors duration-300 ease-in-out">
                BS Information Technology · Cebu, PH
              </p>
            </div>
          </div>

          {/* Terminal Console with integrated interaction effects */}
          <div 
            onMouseEnter={handleReplay}
            onMouseLeave={() => setIsHovering(false)}
            className="cursor-pointer bg-zinc-900 dark:bg-white border-2 border-zinc-800 dark:border-slate-200 rounded-xl shadow-2xl shadow-zinc-900/50 dark:shadow-slate-300/30 overflow-hidden font-mono text-sm transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-500/60 dark:hover:border-amber-400/60 hover:shadow-amber-500/10" 
            role="img" 
            aria-label="System status panel"
          >
            {/* Window Header */}
            <div className="bg-zinc-800 dark:bg-slate-100 px-4 py-3 border-b-2 border-zinc-700 dark:border-slate-200 flex items-center justify-between transition-colors duration-300 ease-in-out">
              <div className="flex items-center space-x-2">
                {/* Dynamically flashes amber color on hover based on your new effect logic */}
                <span className={`h-3 w-3 rounded-full block shadow-sm transition-colors duration-300 ${isHovering ? "bg-amber-500" : "bg-red-500"}`} />
                <span className="h-3 w-3 rounded-full bg-amber-500 block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-green-500 block shadow-sm" />
              </div>
              <span className="text-xs text-zinc-500 dark:text-slate-600 select-none font-bold transition-colors duration-300 ease-in-out">
                status.log
              </span>
            </div>
            
            {/* Console Output Window */}
            <div className="p-4 space-y-2 min-h-[160px] text-zinc-300 dark:text-zinc-800 bg-zinc-900/50 dark:bg-slate-50 transition-all duration-300 ease-in-out">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <p key={i} className="leading-relaxed animate-fade-in">
                  <span className="text-amber-500 dark:text-orange-600 font-bold mr-2 transition-colors duration-300 ease-in-out">&gt;</span>
                  <span className={`${i === BOOT_LINES.length - 1 ? "text-white dark:text-zinc-950 font-semibold" : "text-zinc-300 dark:text-zinc-600"}`}>
                    {line}
                  </span>
                </p>
              ))}
              {visibleLines < BOOT_LINES.length && (
                <span className="inline-block w-2 h-4 bg-amber-500 dark:bg-orange-600 animate-pulse vertical-middle ml-1 transition-colors duration-300 ease-in-out" aria-hidden="true" />
              )}
            </div>
          </div>

        </div>

        {/* Left Side: Main Text Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8 order-last lg:order-first">
          <div className="flex flex-col space-y-6">
            <p className="text-xs md:text-sm font-mono text-zinc-500 dark:text-slate-600 tracking-wider uppercase transition-colors duration-300 ease-in-out">
              Web Developer · Power Platform & Automation Developer
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-zinc-950 leading-tight transition-colors duration-300 ease-in-out">
              Rembrant
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-orange-600 dark:to-amber-500 transition-all duration-300 ease-in-out">
                Pasardan
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 dark:text-slate-700 font-normal leading-relaxed max-w-2xl transition-colors duration-300 ease-in-out">
              I build web applications and backend systems that solve real-world problems. My experience includes working on practical system development and improving business workflows through digital solutions and automation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-amber-600 dark:bg-orange-600 hover:bg-amber-500 dark:hover:bg-orange-500 text-white dark:text-white font-semibold rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-amber-900/30 dark:shadow-orange-900/30 hover:shadow-amber-900/50 dark:hover:shadow-orange-900/50"
              >
                Get in touch
              </a>
              <a 
                href="#log" 
                className="px-8 py-4 border-2 border-zinc-700 dark:border-slate-300 hover:border-zinc-500 dark:hover:border-slate-400 text-zinc-300 dark:text-zinc-900 hover:text-white dark:hover:text-zinc-950 font-semibold rounded-lg transition-all duration-300 ease-in-out bg-zinc-900/30 dark:bg-slate-100/50 backdrop-blur-sm"
              >
                See work log
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}