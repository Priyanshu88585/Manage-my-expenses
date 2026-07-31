"use client";
import { useState } from 'react';
import Button from '@workspace/ui/Button';
import Input from '@workspace/ui/Input';

function ExpenseForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
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
      setErrors({});
      setSuccess(true);
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
      
      <div className="mb-8">
        <h2 className="text-3xl font-display font-medium text-white mb-2">New Entry</h2>
        <p className="text-white/50 text-sm">Log a new expense quickly and securely.</p>
      </div>
      
      <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Title"
            id="expense-title"
            name="title"
            type="text"
            placeholder="e.g. Coffee"
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
            required
          />
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Expense added successfully!
          </p>
        )}
        
        <div className="pt-2">
          <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? 'Processing...' : 'Add Expense'}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ExpenseForm;
