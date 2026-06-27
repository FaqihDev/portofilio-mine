"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import { useState } from "react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Mari Berkolaborasi</h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Terbuka untuk peluang full-time, kontrak, maupun freelance. 
            Silakan hubungi saya melalui email atau platform profesional di bawah ini.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
        >
          <button 
            onClick={handleCopyEmail}
            className="flex flex-col items-center justify-center p-8 bg-bg-secondary/50 border border-border-subtle rounded-2xl hover:border-accent hover:bg-bg-secondary transition-all group relative overflow-hidden"
          >
            <div className="p-4 bg-bg-primary rounded-full mb-4 group-hover:scale-110 group-hover:text-accent transition-all text-text-secondary">
              <Mail size={24} />
            </div>
            <h3 className="text-text-primary font-medium mb-1">Email</h3>
            <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{profile.email}</p>
            
            {/* Copied toast */}
            <div className={`absolute inset-0 bg-accent flex items-center justify-center transition-transform duration-300 ${copied ? 'translate-y-0' : 'translate-y-full'}`}>
              <span className="text-white font-medium">Email Copied!</span>
            </div>
          </button>

          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-bg-secondary/50 border border-border-subtle rounded-2xl hover:border-[#0a66c2] hover:bg-bg-secondary transition-all group"
          >
            <div className="p-4 bg-bg-primary rounded-full mb-4 group-hover:scale-110 group-hover:text-[#0a66c2] transition-all text-text-secondary">
              <FaLinkedin size={24} />
            </div>
            <h3 className="text-text-primary font-medium mb-1">LinkedIn</h3>
            <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors text-center break-all">faqih-abdulrachman-03483b1b7</p>
          </a>

          <a 
            href={profile.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-bg-secondary/50 border border-border-subtle rounded-2xl hover:border-white hover:bg-bg-secondary transition-all group sm:col-span-2 md:col-span-1"
          >
            <div className="p-4 bg-bg-primary rounded-full mb-4 group-hover:scale-110 group-hover:text-white transition-all text-text-secondary">
              <FaGithub size={24} />
            </div>
            <h3 className="text-text-primary font-medium mb-1">GitHub</h3>
            <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors text-center break-all">FaqihDev</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://wa.me/6289514523914"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-glow hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
          >
            <Send size={18} />
            Kirim Pesan
          </a>
        </motion.div>
      </div>
    </section>
  );
};
