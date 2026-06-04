import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

const categoryIcons = {
    'Languages': '{ }',
    'Frameworks & Libraries': '⚙',
    'Infrastructure & Messaging': '🔌',
    'Databases & Search': '🗄',
    'DevOps & Tools': '🛠',
    'Auth & Security': '🔐',
    'AI Tools': '🤖',           // ← add this
    'Core Expertise': '🧠',     // ← add this
};

export default function Skills() {
  const categories = Object.entries(data.skills);

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 03" title="Technical Skills" subtitle="Tools of the trade" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([cat, skills], catIdx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: catIdx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass glass-hover rounded-2xl p-6 border border-zinc-800/60 group"
            data-hover
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">{categoryIcons[cat]}</span>
              <h3 className="text-sm font-mono text-amber-400/80 tracking-widest uppercase">{cat}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08 + i * 0.04 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(251,191,36,0.1)', borderColor: 'rgba(251,191,36,0.4)', color: '#FBBF24' }}
                  className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-zinc-800/40 rounded-lg border border-zinc-700/40 cursor-default transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured skill highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 glass rounded-2xl p-8 border border-amber-400/15 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent pointer-events-none" />
        <p className="font-mono text-xs text-amber-400/40 mb-3">// EXPERTISE.HIGHLIGHT</p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Core competency in <span className="text-amber-400">Java backend systems</span>, 
          {' '}<span className="text-amber-400">Apache Kafka</span> event streaming, 
          {' '}<span className="text-amber-400">real-time financial infrastructure</span>, 
          and <span className="text-amber-400">distributed system design</span>. 
          Deep experience in fintech-grade reliability and scale.
        </p>
      </motion.div>
    </section>
  );
}
