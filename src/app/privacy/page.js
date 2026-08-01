"use client";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white overflow-hidden relative pb-32">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-12 border-b border-white/10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <TextReveal as="h1" className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6" animation="blur-in">
          Privacy Policy
        </TextReveal>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 font-light"
        >
          Your privacy is our priority. Last updated on August 1, 2026.
        </motion.p>
      </header>

      {/* Content */}
      <motion.main 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 space-y-12"
      >
        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">1. Data Collection</h2>
          <p className="text-white/60 leading-relaxed font-light">
            We collect the information you provide directly to us when you create an account, log expenses, or communicate with us. This includes your name, email address, and the financial data you choose to input.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">2. Use of Information</h2>
          <p className="text-white/60 leading-relaxed font-light">
            We use the collected information to operate, maintain, and improve the Manage My Expense platform. Your financial data is used strictly to provide you with insights, analytics, and budgeting tools. We do not sell your personal or financial data to third parties.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">3. Security</h2>
          <p className="text-white/60 leading-relaxed font-light">
            We implement high-grade security measures designed to protect your information from unauthorized access and data breaches. Your data is encrypted at rest and in transit using industry-standard protocols.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">4. Third-Party Services</h2>
          <p className="text-white/60 leading-relaxed font-light">
            We may use third-party service providers to help us operate our business (such as cloud hosting and analytics). These third parties only have access to your information as necessary to perform these tasks on our behalf.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">5. Contact Us</h2>
          <p className="text-white/60 leading-relaxed font-light">
            If you have any questions about this Privacy Policy, please contact us through the <Link href="/contact" className="text-blue-400 hover:underline">Contact page</Link>.
          </p>
        </section>
      </motion.main>
    </div>
  );
}
