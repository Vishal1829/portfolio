import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 04" title="Key Projects" subtitle="Systems I've architected and shipped" />

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative glass glass-hover rounded-2xl p-8 border group cursor-default overflow-hidden ${
              proj.highlight
                ? 'border-amber-400/20 hover:border-amber-400/40'
                : 'border-zinc-800/60'
            }`}
            data-hover
          >
            {/* Highlight glow */}
            {proj.highlight && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
            )}

            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-5 pointer-events-none">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-amber-400" />
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-amber-400" />
            </div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-xs text-amber-400/50 tracking-widest">{proj.type}</span>
                  <h3 className="text-lg font-semibold text-zinc-100 mt-1 group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                </div>
                {proj.highlight && (
                  <span className="text-amber-400/60 text-xl">⭐</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{proj.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map(t => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/60 rounded border border-zinc-700/40 group-hover:border-amber-400/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note about proprietary work */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="font-mono text-xs text-zinc-600">
          // Most work is proprietary to Goldman Sachs & Perfios. Projects represent system-level contributions.
        </p>
      </motion.div>
    </section>
  );
}
