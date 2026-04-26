import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

const contactLinks = [
  {
    label: 'Email',
    value: data.contact.email,
    href: `mailto:${data.contact.email}`,
    icon: '✉',
    desc: 'Drop me a line',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishal1829',
    href: data.contact.linkedin,
    icon: '💼',
    desc: 'Professional network',
  },
  {
    label: 'GitHub',
    value: 'github.com/Vishal1829',
    href: data.contact.github,
    icon: '⚡',
    desc: 'Code & projects',
  },
  {
    label: 'LeetCode',
    value: '800+ problems solved',
    href: data.contact.leetcode,
    icon: '🧩',
    desc: 'Competitive programming',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader number="// 06" title="Get In Touch" subtitle="Open to senior engineering roles" />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 leading-relaxed mb-8"
          >
            I'm currently a Software Development Engineer at Goldman Sachs working on 
            real-time financial systems. While I'm focused on what I'm building now, 
            I'm always open to conversations about <span className="text-amber-400">senior backend roles</span>, 
            {' '}<span className="text-amber-400">distributed systems challenges</span>, or just talking shop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-5 p-4 glass glass-hover rounded-xl border border-zinc-800/60 group"
                data-hover
              >
                <span className="text-xl w-8 text-center">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-amber-400/60 tracking-widest">{link.label}</div>
                  <div className="text-sm text-zinc-300 truncate group-hover:text-amber-400 transition-colors">{link.value}</div>
                </div>
                <span className="text-zinc-600 group-hover:text-amber-400 transition-colors text-sm">↗</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal-style message box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass rounded-2xl border border-amber-400/15 overflow-hidden"
        >
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-5 py-3 bg-zinc-900/60 border-b border-zinc-800/60">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="font-mono text-xs text-zinc-500 ml-3">vishal@contact:~</span>
          </div>

          <div className="p-8 font-mono text-sm space-y-3">
            <div>
              <span className="text-amber-400">$ </span>
              <span className="text-zinc-400">whoami</span>
            </div>
            <div className="text-zinc-500 pl-4">→ Vishal Gupta, SDE @ Goldman Sachs</div>

            <div className="mt-2">
              <span className="text-amber-400">$ </span>
              <span className="text-zinc-400">cat availability.txt</span>
            </div>
            <div className="text-zinc-500 pl-4 leading-relaxed">
              → Open to: Senior SDE, Staff Engineer, <br />
              &nbsp;&nbsp;Backend / Distributed Systems roles
            </div>

            <div className="mt-2">
              <span className="text-amber-400">$ </span>
              <span className="text-zinc-400">ping {data.contact.email}</span>
            </div>
            <div className="text-green-400 pl-4">
              → PONG: Response time &lt; 24h
            </div>

            <div className="flex items-center gap-1 mt-4">
              <span className="text-amber-400">$ </span>
              <span className="animate-cursor-blink text-amber-400">▌</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
