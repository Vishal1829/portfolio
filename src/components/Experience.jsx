import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 02" title="Work Experience" subtitle="Where I've built things that matter" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/60 via-amber-400/20 to-transparent hidden md:block" />

        <div className="space-y-12">
          {data.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 lg:left-5 top-8 hidden md:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="w-4 h-4 rounded-full border-2 border-amber-400 bg-obsidian-950 relative"
                >
                  {i === 0 && (
                    <div className="absolute inset-1 rounded-full bg-amber-400 animate-pulse-slow" />
                  )}
                </motion.div>
              </div>

              {/* Card */}
              <div className="glass glass-hover rounded-2xl p-8 border border-zinc-800/60 group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-zinc-100">{exp.role}</h3>
                      {exp.tag === 'Current' && (
                        <span className="px-2 py-0.5 bg-amber-400/15 border border-amber-400/30 rounded text-amber-400 text-xs font-mono">
                          ● CURRENT
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-amber-400 font-semibold">{exp.company}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500">{exp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((ach, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                      className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="text-amber-400/60 mt-1.5 flex-shrink-0">▸</span>
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/60 rounded border border-zinc-700/40 group-hover:border-amber-400/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
