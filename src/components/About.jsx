import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

const strengths = [
  { icon: '⚡', title: 'Real-time Systems', desc: 'Pricing engines, low-latency pipelines, and automated trading controls' },
  { icon: '🏗️', title: 'Backend Architecture', desc: 'Microservices, event-driven design, and distributed systems' },
  { icon: '📊', title: 'Fintech Domain', desc: 'Trading systems, financial data pipelines, and banking integrations' },
  { icon: '🔧', title: 'Platform Engineering', desc: 'Kafka, Spring Boot, Java 21, Docker' },
];

export default function About() {
  const paragraphs = data.about.split('\n\n');

  return (
    <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 01" title="About Me" subtitle="Background & strengths" />

      <div className="grid lg:grid-cols-5 gap-16">
        {/* Text */}
        <div className="lg:col-span-3 space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-zinc-400 leading-relaxed text-base"
            >
              {p}
            </motion.p>
          ))}

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            {[
              { num: '3+', label: 'Years Exp' },
              { num: '800+', label: 'LeetCode Solved' },
              { num: '3×', label: 'Best Performer' },
            ].map(s => (
              <div key={s.label} className="text-center p-4 glass rounded-xl border border-amber-400/10">
                <div className="font-display text-3xl font-black text-gradient">{s.num}</div>
                <div className="font-mono text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Strengths */}
        <div className="lg:col-span-2 space-y-3">
          <p className="font-mono text-xs text-amber-400/40 tracking-widest mb-4">// CORE.STRENGTHS</p>
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-5 flex gap-4 items-start cursor-default"
              data-hover
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-sm font-semibold text-zinc-200 mb-1">{s.title}</div>
                <div className="text-xs text-zinc-500 leading-relaxed">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
