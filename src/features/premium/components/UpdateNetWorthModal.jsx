"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@workspace/ui/Button";
import Input from "@workspace/ui/Input";
import { updateNetWorth } from "../services/premiumClient";

export default function UpdateNetWorthModal({ isOpen, onClose, onUpdateSuccess, initialAssets = 0, initialLiabilities = 0 }) {
  const [formData, setFormData] = useState({
    baseAssets: initialAssets.toString(),
    baseLiabilities: initialLiabilities.toString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData({
        baseAssets: initialAssets.toString(),
        baseLiabilities: initialLiabilities.toString(),
      });
      setError("");
    }
  }, [isOpen, initialAssets, initialLiabilities]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await updateNetWorth({
        baseAssets: formData.baseAssets,
        baseLiabilities: formData.baseLiabilities,
      });
      onUpdateSuccess();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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
              className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"></div>
              
              <div className="p-6 border-b border-white/10 flex items-center justify-between relative z-10">
                <h3 className="text-xl font-display font-medium text-white">Update Net Worth</h3>
                <button onClick={onClose} className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6 relative z-10">
                <Input
                  label="Total Base Assets (₹)"
                  name="baseAssets"
                  type="number"
                  min="0"
                  step="1"
                  value={formData.baseAssets}
                  onChange={handleChange}
                  required
                />
                
                <Input
                  label="Total Base Liabilities (₹)"
                  name="baseLiabilities"
                  type="number"
                  min="0"
                  step="1"
                  value={formData.baseLiabilities}
                  onChange={handleChange}
                  required
                />
                
                <p className="text-xs text-white/40">Note: Your tracked expenses will be dynamically added to your base liabilities.</p>

                {error && <p className="text-sm text-red-400 p-3 bg-red-500/10 rounded-xl">{error}</p>}
                
                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={onClose} className="px-4 py-2 rounded-full text-white/70 hover:text-white text-sm font-medium">
                    Cancel
                  </button>
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Updates'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
