"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReceiptScanner from "./ReceiptScanner";

export default function ScannerModal({ isOpen, onClose, onScanComplete }) {
  if (!isOpen) return null;

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
              className="w-full max-w-md bg-[#111] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-xl font-display font-medium text-white">Scan Receipt</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 flex flex-col items-center">
                <ReceiptScanner onScanComplete={(data) => {
                  onScanComplete(data);
                  onClose();
                }} />
                <p className="text-sm text-white/40 mt-6 text-center">
                  Upload an image of your receipt, and our AI will automatically extract the amount, merchant, and category.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
