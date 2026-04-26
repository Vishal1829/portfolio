import { motion } from 'framer-motion';

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-3"
      >
        <span className="font-mono text-xs text-amber-400/40 tracking-[0.3em]">{number}</span>
        <div className="h-px flex-1 max-w-12 bg-amber-400/30" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl lg:text-5xl font-black"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 === 1 ? 'text-gradient' : 'text-white'}>{word} </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 mt-3 font-mono text-sm"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
