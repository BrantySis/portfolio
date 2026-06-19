import React from "react";
import { FaAward } from "react-icons/fa";

const ENTRIES = [
  {
    role: "IT Intern — On-the-Job Training",
    org: "Lexmark Research and Development Corporation",
    period: "Feb 2026 – Jun 2026",
    summary:
      "Four-month internship in Traditional Services, contributing to business process optimization, SharePoint solutions, Power Platform development, and enterprise workflow improvements.",
    achievement: {
      title: "Traditional Services Appreciation Award",
      issuer: "Lexmark Research and Development Corporation",
      date: "June 2026",
      description:
        "Awarded for outstanding contributions, dedication, operational excellence, and impactful support in process optimization, SharePoint solutions, and asset management.",
    },
    details: [
      "Designed and developed a Power Apps solution that streamlined team operations, improved process efficiency, and reduced manual workload for business users.",
      "Contributed to the Optimization of Consolidated Issues and Ticket Management by improving workflows and supporting operational excellence initiatives.",
      "Automated business processes using Power Automate, enabling faster task execution and improved data consistency across teams.",
      "Migrated and organized business data from Excel into SharePoint Lists, improving accessibility, reporting, and data accuracy.",
      "Enhanced project presentations and documentation, helping communicate technical solutions and business improvements effectively.",
      "Processed and maintained over 23,788 asset updates with a strong focus on accuracy, attention to detail, and data integrity.",
      "Collaborated with cross-functional teams to identify process improvements, troubleshoot issues, and implement digital solutions.",
      "Received the Traditional Services Appreciation Award for demonstrating Customer Focus, Proactive and Empowered thinking, Accountability, and Collaboration throughout the internship."
    ],
  },
  {
    role: "Capstone Project (Hacker)",
    org: "AITAS: AI-Enhanced Teacher-Based Attendance Monitoring System",
    period: "2025 – 2026",
    summary:
      "Led development of an AI-powered attendance monitoring system with InsightFace integration and UCLM Portal connection, designed to streamline faculty attendance tracking with real-time monitoring and automated validation.",
    details: [
      "Designed and developed AITAS with AI-powered check-ins, geofencing validation, and real-time notifications for attendance monitoring.",
      "Integrated InsightFace for facial recognition and implemented role-based access controls for enhanced security.",
      "Conducted descriptive research with 404 faculty respondents, achieving positive feedback on efficiency, transparency, and traceability.",
      "Implemented automated validation system, reducing manual workload and attendance errors significantly.",
      "Received acceptance testing ratings highlighting system reliability, stability, intuitive interface, and error-free operation.",
      "Delivered data-driven solution supporting administrative decision-making with geofencing and automated record management.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="log" className="w-full max-w-5xl mx-auto px-4 py-16 text-zinc-300">
      <div className="mb-14">
        <span className="text-sm font-mono text-amber-500 tracking-wider block mb-1">03</span>
        {/* INCREASED: Section title size */}
        <h2 className="text-4xl font-extrabold text-white dark:text-zinc-950">Work log</h2>
        <p className="text-base text-zinc-500 mt-2">
          Where I've put the stack to use so far.
        </p>
      </div>

      <div className="flex flex-col space-y-14 relative border-l-2 border-zinc-800 dark:border-slate-200 ml-4 pl-6 sm:pl-8">
        {ENTRIES.map((entry) => (
          <article className="relative group" key={entry.org}>
            {/* Timeline node */}
            <div className="absolute -left-[32px] sm:-left-[40px] top-2 bg-zinc-950 dark:bg-slate-50 h-4 w-4 rounded-full border-2 border-amber-500" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
              {/* INCREASED: Role heading from text-xl to text-2xl */}
              <h3 className="text-2xl font-bold text-white dark:text-zinc-900 leading-tight">
                {entry.role}
              </h3>
              {/* INCREASED: Date visibility from text-xs to text-sm */}
              <span className="text-sm font-mono text-zinc-500 whitespace-nowrap">
                {entry.period}
              </span>
            </div>
            
            {/* INCREASED: Organization name from text-sm to text-base */}
            <p className="text-base font-semibold text-amber-500 dark:text-orange-600 mb-4">
              {entry.org}
            </p>

            {/* Dynamic Achievement Box */}
            {entry.achievement && (
              <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent dark:from-amber-500/5 border border-amber-500/20 backdrop-blur-sm shadow-lg shadow-amber-950/10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-amber-500/20 rounded-lg text-amber-500 shrink-0 mt-0.5 animate-pulse">
                    <FaAward size={20} />
                  </div>
                  <div>
                    {/* INCREASED: Award title from text-sm to text-base */}
                    <h4 className="text-base font-bold text-white dark:text-zinc-900 tracking-wide">
                      {entry.achievement.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">
                      {entry.achievement.issuer} · {entry.achievement.date}
                    </p>
                    {/* INCREASED: Award description text-xs to text-sm */}
                    <p className="text-sm text-zinc-400 dark:text-slate-700 mt-2 leading-relaxed">
                      {entry.achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* INCREASED: Role summary overview text-sm to text-base */}
            <p className="text-base text-zinc-400 dark:text-slate-700 mb-5 leading-relaxed">
              {entry.summary}
            </p>
            
            {/* INCREASED: Bullet points from text-xs to text-sm/base layout mapping */}
            <ul className="space-y-3 list-disc list-inside text-sm text-zinc-500 dark:text-slate-600 pl-2 leading-relaxed">
              {entry.details.map((d, i) => (
                <li key={i} className="marker:text-zinc-700 dark:marker:text-slate-300">
                  <span className="text-zinc-400 dark:text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* Placeholder entry */}
        <div className="relative opacity-60">
          <div className="absolute -left-[32px] sm:-left-[40px] top-2 bg-zinc-950 dark:bg-slate-50 h-4 w-4 rounded-full border-2 border-zinc-700" />
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
            <p className="text-base font-mono text-zinc-500 italic">Open to opportunities...</p>
            <span className="text-sm font-mono text-zinc-600">Next</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
            Open to internships and entry-level roles in software development or IT operations.
          </p>
        </div>
      </div>
    </section>
  );
}