import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-zinc-600 text-center md:text-left"
        >
          <span className="text-amber-400/40">&gt;_</span>
          {' '}Vishal Gupta © {new Date().getFullYear()}
          {' '}· Built with React + Framer Motion
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-1"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-zinc-600">All systems operational</span>
        </motion.div>
      </div>
    </footer>
  );
}
