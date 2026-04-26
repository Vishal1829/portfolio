import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/resume';

const roles = [
  'Software Development Engineer',
  'Backend Systems Architect',
  'Distributed Systems Builder',
  'Fintech Infrastructure Engineer',
];

function TypingText({ texts }) {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[roleIdx];
    const speed = deleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx(r => (r + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx, texts]);

  return (
    <span className="text-amber-400 font-mono">
      {displayed}
      <span className="animate-cursor-blink text-amber-400">|</span>
    </span>
  );
}

// Animated background particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-400"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.05,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-400/5 via-transparent to-transparent" style={{ backgroundSize: '800px 800px', backgroundPosition: 'center' }} />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        />
      </div>

      <Particles />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 lg:left-12 font-mono text-xs text-amber-400/20 space-y-1 hidden md:block">
        <div>LAT: 12.9716° N</div>
        <div>LON: 77.5946° E</div>
        <div>LOC: BENGALURU</div>
      </div>

      <div className="absolute bottom-12 right-6 lg:right-12 font-mono text-xs text-amber-400/20 text-right hidden md:block">
        <div>STATUS: EMPLOYED</div>
        <div>COMPANY: GS</div>
        <div>MODE: BUILDING</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-amber-400" />
              <span className="font-mono text-xs text-amber-400/60 tracking-[0.3em] uppercase">
                Available for Senior Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl lg:text-8xl font-black leading-none mb-4"
            >
              <span className="block text-white">Vishal</span>
              <span className="block text-gradient">Gupta</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl lg:text-2xl mb-6 h-8"
            >
              <TypingText texts={roles} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10"
            >
              {data.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-amber-400 text-obsidian-950 text-sm font-mono font-bold tracking-widest uppercase overflow-hidden transition-all hover:shadow-lg hover:shadow-amber-400/30"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-amber-400/40 text-amber-400 text-sm font-mono tracking-widest uppercase hover:border-amber-400 hover:bg-amber-400/5 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-6 mt-10"
            >
              {[
                { label: 'GitHub', href: data.contact.github },
                { label: 'LinkedIn', href: data.contact.linkedin },
                { label: 'LeetCode', href: data.contact.leetcode },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-zinc-500 hover:text-amber-400 transition-colors tracking-widest uppercase"
                >
                  {link.label} ↗
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="glass rounded-2xl p-8 border border-amber-400/10 relative">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-16 bg-amber-400/40" />
                <div className="absolute top-0 right-0 w-16 h-px bg-amber-400/40" />
              </div>

              <p className="font-mono text-xs text-amber-400/40 tracking-widest mb-6">// SYSTEM.STATUS</p>

              {[
                { label: 'Current Company', value: 'Goldman Sachs', accent: true },
                { label: 'Role', value: 'SDE', accent: false },
                { label: 'Location', value: 'Bengaluru, IN', accent: false },
                { label: 'Experience', value: '2+ Years', accent: false },
                { label: 'Education', value: 'NIT Karnataka', accent: false },
                { label: 'CGPA', value: '8.73 / 10', accent: true },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-zinc-800/60 last:border-0">
                  <span className="text-xs font-mono text-zinc-500">{item.label}</span>
                  <span className={`text-sm font-mono font-medium ${item.accent ? 'text-amber-400' : 'text-zinc-200'}`}>
                    {item.value}
                  </span>
                </div>
              ))}

              <div className="mt-6 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-green-400">SYSTEM ONLINE</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-1.5 bg-amber-400 rounded-sm"
                      style={{ opacity: Math.random() * 0.7 + 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-zinc-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-amber-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
