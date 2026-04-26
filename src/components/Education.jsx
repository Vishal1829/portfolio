import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 05" title="Education" subtitle="Academic foundation" />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education card */}
        {data.education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-8 border border-amber-400/15 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-amber-400/60 via-amber-400/30 to-transparent" />
            
            <p className="font-mono text-xs text-amber-400/40 tracking-widest mb-4">// ACADEMIC.RECORD</p>
            
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">{edu.degree}</h3>
            <p className="text-amber-400 font-semibold mb-1">{edu.institution}</p>
            <p className="text-zinc-500 text-sm font-mono mb-6">{edu.period}</p>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-zinc-800" />
              <div className="text-center">
                <div className="font-display text-4xl font-black text-gradient">{edu.cgpa}</div>
                <div className="font-mono text-xs text-zinc-500 mt-1">CGPA</div>
              </div>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <div className="mt-6 space-y-2">
              {edu.highlights.map((h, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="text-amber-400">▸</span> {h}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="font-mono text-xs text-amber-400/40 tracking-widest mb-4">// ACHIEVEMENTS</p>
          {data.achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-5 flex gap-4 border border-zinc-800/60"
              data-hover
            >
              <span className="text-2xl flex-shrink-0">{ach.icon}</span>
              <div>
                <div className="font-semibold text-zinc-200 text-sm mb-1">{ach.title}</div>
                <div className="text-xs text-zinc-500">{ach.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
