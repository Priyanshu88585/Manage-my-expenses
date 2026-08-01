"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send, ArrowLeft } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { TextReveal } from "@/components/animations/TextReveal";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar.jsx";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const RECIPIENT_EMAIL = "support@managemyexpense.com";
const WHATSAPP_NUMBER = "918858576463"; // Example placeholder

function createEmailBody(data) {
  return [
    `Hi Manage My Expense Team,`,
    "",
    `I'm ${data.name}. I wanted to reach out regarding the app.`,
    "",
    "Here is my message:",
    `${data.message}`,
    "",
    `Best regards,`,
    `${data.name}`,
    `${data.email}`,
  ].join("\n");
}

function createWhatsAppMessage(data) {
  return [
    `Hi Manage My Expense Team!`,
    "",
    `I'm ${data.name}. I wanted to reach out regarding the app.`,
    "",
    "Here is my message:",
    `${data.message}`,
    "",
    `My email: ${data.email}`,
  ].join("\n");
}

function sendEmail(data) {
  const subject = encodeURIComponent("New Inquiry: Manage My Expense");
  const body = encodeURIComponent(createEmailBody(data));
  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

function sendWhatsApp(data) {
  const text = encodeURIComponent(createWhatsAppMessage(data));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const handleAction = async (action) => {
    const valid = await trigger();
    if (!valid) return;
    action(getValues());
  };

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-black text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 animate-fade-in">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Text & Profile Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8"
            >
              <span className="w-12 h-px bg-white/20"></span>
              Connect
            </motion.span>

            <TextReveal
              as="h2"
              className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold tracking-tight leading-[0.9] text-white mb-8"
            >
              Let's build
              <br />
              <span className="text-white/40">
                something
                <br />
                great.
              </span>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 max-w-md font-light leading-relaxed mb-12"
            >
              Have questions about your account, want to request a feature, or just want to say hi? 
              I'll try my best to get back to you!
            </motion.p>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 w-full border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 md:p-12 relative overflow-hidden group shadow-2xl"
          >
            {/* Subtle glow inside the form card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form
              onSubmit={handleSubmit(() => {})}
              className="relative z-10 space-y-8"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/80 ml-1">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-white font-mono text-base focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    placeholder="Priyanshu Kesharwani"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs font-mono ml-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/80 ml-1">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-white font-mono text-base focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-mono ml-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-widest text-white/80 ml-1">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-white font-mono text-base focus:outline-none focus:border-white/50 transition-colors resize-none placeholder:text-white/20"
                  placeholder="Tell me about your issue or idea..."
                />
                {errors.message && (
                  <span className="text-red-400 text-xs font-mono ml-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => handleAction(sendEmail)}
                  className="flex items-center justify-center gap-1.5 sm:gap-3 py-3 sm:py-4 px-1 sm:px-4 rounded-xl font-mono text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none group/btn whitespace-nowrap"
                >
                  <Mail
                    size={14}
                    className="sm:w-4 sm:h-4 text-white/40 group-hover/btn:text-white transition-colors shrink-0"
                  />
                  Send via Email
                </button>

                <button
                  type="button"
                  onClick={() => handleAction(sendWhatsApp)}
                  className="flex items-center justify-center gap-1.5 sm:gap-3 py-3 sm:py-4 px-1 sm:px-4 rounded-xl font-mono text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-[#25d366] bg-[#25d366]/5 hover:bg-[#25d366]/10 border border-[#25d366]/20 hover:border-[#25d366]/40 transition-all duration-300 focus:outline-none group/btn whitespace-nowrap"
                >
                  <FaWhatsapp
                    size={14}
                    className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform shrink-0"
                  />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
}
