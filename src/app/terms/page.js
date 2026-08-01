"use client";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';
import Navbar from '@/components/layout/Navbar.jsx';

export default function TermsPage() {
  return (
    <>
      <Navbar />
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
          Terms of Service
        </TextReveal>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 font-light"
        >
          Please read these terms carefully before using our platform.
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
          <h2 className="text-2xl font-display font-semibold tracking-tight">1. Acceptance of Terms</h2>
          <p className="text-white/60 leading-relaxed font-light">
            By accessing and using Manage My Expense, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">2. User Accounts</h2>
          <p className="text-white/60 leading-relaxed font-light">
            You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">3. Acceptable Use</h2>
          <p className="text-white/60 leading-relaxed font-light">
            You agree not to misuse our services. This includes not interfering with our platform or trying to access it using a method other than the interface and the instructions that we provide.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">4. Modifications to Service</h2>
          <p className="text-white/60 leading-relaxed font-light">
            We reserve the right at any time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension or discontinuance of the service.
          </p>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-display font-semibold tracking-tight">5. Limitation of Liability</h2>
          <p className="text-white/60 leading-relaxed font-light">
            In no event shall Manage My Expense, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>
      </motion.main>
      </div>
    </>
  );
}
