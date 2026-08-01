"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const SOCIAL_ICONS = {
  twitter: (
    <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 496 512" className="w-5 h-5 fill-current">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  ),
};

const FEATURES = [
  {
    title: "Full Stack Architecture",
    desc: "Building scalable, performant apps with React, Next.js, Node.js, and MongoDB.",
  },
  {
    title: "Pixel-Perfect UI",
    desc: "Crafting interfaces that feel premium — clean typography, smooth animations, precise spacing.",
  },
  {
    title: "System Design",
    desc: "Architecting cloud-native applications with a focus on high availability and clean abstractions.",
  },
  {
    title: "AI & Cloud Integrations",
    desc: "Leveraging multi-agent orchestration and integrations for intelligent workflows.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-24 overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 animate-fade-in-up">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Content Split: Left (Heading/Text/Features) & Right (Cards) */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 w-full mt-8 pb-12 justify-between">
          
          {/* Left Side: Heading, Paragraph & Features Grid */}
          <div className="w-full xl:w-5/12 flex flex-col">
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6">
                <span className="w-8 h-px bg-white/30"></span>
                About Manage My Expense
              </span>

              <TextReveal
                as="h2"
                className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-display font-bold tracking-tight leading-[0.9] text-white"
                animation="blur-in"
              >
                Engineering <br className="hidden md:block" />
                <span className="text-white/40">beyond code.</span>
              </TextReveal>
            </motion.div>

            {/* Paragraph & Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-md text-balance font-light">
                Manage My Expense was built with a simple mission: to make personal finance management elegant, seamless, and intelligent. My obsession with tearing apart systems turned into real, scalable products.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-10">
                {FEATURES.map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
                  >
                    <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Developer & Community Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full xl:w-7/12 flex flex-col pt-16 xl:pt-0 xl:pl-16"
          >
            {/* Heading */}
            <div className="mb-16">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6">
                <span className="w-8 h-px bg-white/30"></span>
                The Architect
              </span>

              <TextReveal
                as="h2"
                className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-display font-bold tracking-tight leading-[0.9] text-white"
                animation="blur-in"
              >
                Meet Our <br className="hidden md:block" />
                <span className="text-white/40">Lead Developer.</span>
              </TextReveal>
            </div>

            {/* Developer Info (No Card Wrapper) */}
            <div className="flex flex-col items-start w-full">
              
              {/* Profile Image & Name side-by-side */}
              <div className="flex items-center gap-6 mb-10">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full border-4 border-[#0a0a0a] overflow-hidden ring-4 ring-emerald-500/10">
                    <Image
                      src="https://avatars.githubusercontent.com/u/134344291?s=400&u=7bc94d3ad2997d65ae19eecc1ff672e647f7d5a0&v=4"
                      alt="Priyanshu Kesharwani"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 128px, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white mb-3">
                    Priyanshu Kesharwani
                  </h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-indigo-500 uppercase tracking-widest">
                    Lead Systems Architect
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-md text-balance font-light">
                Priyanshu is a Full-stack developer with a passion for building highly secure, scalable communication systems and intuitive user interfaces.
              </p>

              {/* Social Links */}
              <div className="flex justify-start flex-wrap gap-4">
                {[
                  { link: "https://x.com/Priyanshu885857", color: "bg-black", icon: SOCIAL_ICONS.twitter },
                  { link: "https://www.instagram.com/priyanshu_kesharwani__/", color: "bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600", icon: SOCIAL_ICONS.instagram },
                  { link: "https://www.linkedin.com/in/priyanshu-kesharwani-57a525255/", color: "bg-[#0077B5]", icon: SOCIAL_ICONS.linkedin },
                  { link: "https://github.com/Priyanshu88585/", color: "bg-[#111]", icon: SOCIAL_ICONS.github },
                  { link: "https://priyanshus-portfolio-zeta.vercel.app/", color: "bg-emerald-500", icon: SOCIAL_ICONS.portfolio },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative h-12 w-12 overflow-hidden flex flex-col items-center bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center transition-all duration-500 ease-in-out group-hover/icon:-translate-y-12">
                      <div className="h-12 w-12 flex items-center justify-center text-white/50 group-hover/icon:text-white">
                        {item.icon}
                      </div>
                      <div className={`h-12 w-12 flex items-center justify-center text-white ${item.color}`}>
                        {item.icon}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
