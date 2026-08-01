"use client";
import { useState, useEffect } from 'react';
import Button from '@workspace/ui/Button';
import Input from '@workspace/ui/Input';
import ReceiptScanner from './ReceiptScanner.jsx';
import { predictCategory } from '../services/categoryAI.service.js';
import { Check } from 'lucide-react';

function ExpenseForm({ onAdd, initialData = null, onSuccess }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    amount: initialData?.amount || '',
    category: initialData?.category || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
  });


  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        title: initialData.title || prev.title,
        amount: initialData.amount || prev.amount,
        category: initialData.category || prev.category,
        date: initialData.date || prev.date
      }));
    }
  }, [initialData]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.amount || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be > 0.';
    }
    if (!formData.category.trim()) newErrors.category = 'Category is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // AI Category Prediction on title change
    if (name === 'title' && value.length > 2) {
      const suggestedCategory = predictCategory(value);
      if (suggestedCategory && suggestedCategory !== 'Miscellaneous') {
        setAiSuggestion(suggestedCategory);
      } else {
        setAiSuggestion('');
      }
    } else if (name === 'title') {
      setAiSuggestion('');
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const applyAiCategory = () => {
    if (aiSuggestion) {
      setFormData(prev => ({ ...prev, category: aiSuggestion }));
      setAiSuggestion('');
      if (errors.category) {
        setErrors(prev => ({ ...prev, category: '' }));
      }
    }
  };

  const handleScanComplete = (extractedData) => {
    setFormData({
      title: extractedData.title || formData.title,
      amount: extractedData.amount || formData.amount,
      category: extractedData.category || formData.category,
      date: extractedData.date || formData.date,
    });
    setAiSuggestion('');
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onAdd({
        ...(initialData?.id ? { id: initialData.id } : {}),
        title: formData.title.trim(),
        amount: Number(formData.amount),
        category: formData.category.trim(),
        date: formData.date,
      });
      setFormData({
        title: '',
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
      });
      setAiSuggestion('');
      setErrors({});
      setSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setErrors({ form: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-2xl" aria-label="Add new expense">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full"></div>
      
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-display font-medium text-white mb-2 flex items-center gap-3">
            {initialData ? 'Edit Expense' : 'Log Expense'}
            {!initialData && <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold text-blue-400 uppercase tracking-wider">AI Powered</span>}
          </h2>
          <p className="text-white/50 text-sm">
            {initialData ? 'Update your transaction details.' : 'Log a new expense manually or use AI receipt scanning.'}
          </p>
        </div>
        <div className="w-full md:w-64">
          <ReceiptScanner onScanComplete={handleScanComplete} />
        </div>
      </div>
      
      <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <Input
              label="Title"
              id="expense-title"
              name="title"
              type="text"
              placeholder="e.g. Coffee at Starbucks"
              value={formData.title}
              onChange={handleChange}
              error={errors.title}
              required
            />
          </div>
          <Input
            label="Amount (₹)"
            id="expense-amount"
            name="amount"
            type="number"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            error={errors.amount}
            required
          />
          <div className="relative">
            <Input
              label="Category"
              id="expense-category"
              name="category"
              type="text"
              placeholder="e.g. Food"
              value={formData.category}
              onChange={handleChange}
              error={errors.category}
              required
            />
            {aiSuggestion && (
              <div className="absolute -top-1 right-1 animate-fade-in-up">
                <button 
                  type="button" 
                  onClick={applyAiCategory}
                  className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold hover:bg-blue-500/40 transition-colors flex items-center gap-1 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                >
                  ✨ Set as {aiSuggestion}
                </button>
              </div>
            )}
          </div>
          <Input
            label="Date"
            id="expense-date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            required
          />
        </div>
        
        {errors.form && (
          <p className="text-sm text-red-400 py-3 px-5 bg-red-500/10 border border-red-500/20 rounded-xl" role="alert">{errors.form}</p>
        )}
        {success && (
          <p className="text-sm text-emerald-400 py-3 px-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-fade-in flex items-center gap-2" role="status">
            <Check className="w-4 h-4" />
            {initialData ? 'Expense updated successfully!' : 'Expense logged successfully!'}
          </p>
        )}
        
        <div className="pt-2">
          <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? 'Processing...' : (initialData ? 'Update Expense' : 'Log Expense')}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ExpenseForm;
