import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import { data } from '../data/resume';

// ─────────────────────────────────────────────────────────────────────────────
//  EMAILJS SETUP — replace these 3 values with yours from emailjs.com
//  Dashboard → Account → General → Public Key
//  Email Services → your service ID
//  Email Templates → your template ID
//
//  Your template must have these variables:
//    {{from_name}}   {{reply_to}}   {{subject}}   {{message}}
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_vf7rcki';
const EMAILJS_TEMPLATE_ID = 'template_5v2mm9m';
const EMAILJS_PUBLIC_KEY  = 'adBp3bdmOusEHCf_w';
// ─────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  { label: 'Email',    value: data.contact.email,           href: `mailto:${data.contact.email}`, icon: '✉'  },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishal1829', href: data.contact.linkedin,           icon: '💼' },
  { label: 'GitHub',   value: 'github.com/Vishal1829',      href: data.contact.github,             icon: '⚡' },
  { label: 'LeetCode', value: '800+ problems solved',       href: data.contact.leetcode,           icon: '🧩' },
];

const inputBase =
    'w-full bg-zinc-900/50 border border-zinc-700/60 rounded-lg px-4 py-3 text-sm text-zinc-200 ' +
    'placeholder-zinc-600 font-mono focus:outline-none focus:border-amber-400/60 ' +
    'focus:bg-zinc-900 focus:shadow-[0_0_0_2px_rgba(251,191,36,0.08)] ' +
    'transition-all duration-200 disabled:opacity-40 resize-none';

export default function Contact() {
  const formRef = useRef(null);
  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const fieldMap = { from_name: 'name', reply_to: 'email', subject: 'subject', message: 'message' };
  const handleChange = (e) => {
    const key = fieldMap[e.target.name] || e.target.name;
    setFields(prev => ({ ...prev, [key]: e.target.value }));
  };

  const canSubmit = fields.name.trim() && fields.email.trim() && fields.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('sending');
    setErrorMsg('');
    try {
      await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(err?.text || 'Something went wrong. Please email me directly.');
    }
  };

  return (
      <section id="contact" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader number="// 06" title="Get In Touch" subtitle="Open to senior engineering roles" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: blurb + social links ───────────────────────────────── */}
          <div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-zinc-400 leading-relaxed mb-8"
            >
              I'm currently a Software Development Engineer at Goldman Sachs working on
              real-time financial systems. While I'm focused on what I'm building now,
              I'm always open to conversations about{' '}
              <span className="text-amber-400">senior backend roles</span>,{' '}
              <span className="text-amber-400">distributed systems challenges</span>, or just talking shop.
              Drop a message — I reply within 24 hours.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
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
                      transition={{ delay: i * 0.08 }}
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

          {/* ── Right: contact form ────────────────────────────────────────── */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass rounded-2xl border border-amber-400/15 overflow-hidden"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-5 py-3 bg-zinc-900/60 border-b border-zinc-800/60">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="font-mono text-xs text-zinc-500 ml-3">vishal@contact:~$ send_message</span>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">

                {/* ── Success state ── */}
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-14 text-center"
                    >
                      <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                          className="text-5xl mb-5"
                      >
                        ✅
                      </motion.div>
                      <h3 className="font-mono text-amber-400 text-lg font-bold mb-2">Message delivered!</h3>
                      <p className="text-zinc-400 text-sm mb-1">Thanks for reaching out.</p>
                      <p className="text-zinc-500 text-xs font-mono">I'll get back to you within 24 hours.</p>
                      <button
                          onClick={() => setStatus('idle')}
                          className="mt-8 font-mono text-xs text-zinc-500 hover:text-amber-400 transition-colors underline"
                      >
                        Send another message →
                      </button>
                    </motion.div>

                ) : (
                    /* ── Form ── */
                    <motion.form
                        key="form"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                        noValidate
                    >
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs text-amber-400/50 tracking-widest block mb-1.5">
                            NAME <span className="text-red-400">*</span>
                          </label>
                          <input
                              type="text"
                              name="from_name"
                              value={fields.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              required
                              disabled={status === 'sending'}
                              className={inputBase}
                          />
                        </div>
                        <div>
                          <label className="font-mono text-xs text-amber-400/50 tracking-widest block mb-1.5">
                            EMAIL <span className="text-red-400">*</span>
                          </label>
                          <input
                              type="email"
                              name="reply_to"
                              value={fields.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                              disabled={status === 'sending'}
                              className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="font-mono text-xs text-amber-400/50 tracking-widest block mb-1.5">
                          SUBJECT
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={fields.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                            disabled={status === 'sending'}
                            className={inputBase}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="font-mono text-xs text-amber-400/50 tracking-widest block mb-1.5">
                          MESSAGE <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={fields.message}
                            onChange={handleChange}
                            placeholder="Tell me about the role, project, or just say hi..."
                            required
                            rows={5}
                            disabled={status === 'sending'}
                            className={inputBase}
                        />
                      </div>

                      {/* Error banner */}
                      <AnimatePresence>
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 flex items-start gap-2"
                            >
                              <span className="mt-0.5">✗</span>
                              <span>{errorMsg}</span>
                            </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit button */}
                      <button
                          type="submit"
                          disabled={status === 'sending' || !canSubmit}
                          className={`w-full py-3.5 rounded-lg font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300
                      ${status === 'sending' || !canSubmit
                              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                              : 'bg-amber-400 text-zinc-950 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25 cursor-pointer active:scale-[0.98]'
                          }`}
                      >
                        {status === 'sending' ? (
                            <span className="flex items-center justify-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-zinc-600 border-t-zinc-950 rounded-full animate-spin inline-block" />
                        Sending...
                      </span>
                        ) : (
                            'Send Message →'
                        )}
                      </button>

                      <p className="font-mono text-xs text-zinc-600 text-center">
                        * Required fields · Response within 24 hours
                      </p>
                    </motion.form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>
  );
}