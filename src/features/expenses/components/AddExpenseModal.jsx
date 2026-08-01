"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ExpenseForm from "./ExpenseForm";

export default function AddExpenseModal({ isOpen, onClose, onAdd, initialData }) {
  if (!isOpen) return null;

  const handleAddWrapper = async (data) => {
    await onAdd(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-20">
                <h3 className="text-xl font-display font-medium text-white">
                  {initialData?.id ? 'Edit Expense' : 'Log Expense'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-0 overflow-y-auto">
                <ExpenseForm 
                  onAdd={handleAddWrapper} 
                  initialData={initialData} 
                  onSuccess={onClose} 
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
