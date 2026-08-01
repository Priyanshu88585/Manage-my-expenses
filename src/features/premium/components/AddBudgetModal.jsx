"use client";
import { useState } from 'react';
import Modal from '@/components/ui/Modal.jsx';
import Button from '@workspace/ui/Button';
import Input from '@workspace/ui/Input';
import { addBudget } from '@/features/premium/services/premiumClient.js';

export default function AddBudgetModal({ isOpen, onClose, onAddSuccess }) {
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !limit) return;
    
    setIsSubmitting(true);
    try {
      await addBudget({
        category,
        limit: Number(limit)
      });
      setCategory('');
      setLimit('');
      onAddSuccess(); // trigger re-fetch
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Smart Budget">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input 
          label="Category Name" 
          placeholder="e.g. Entertainment" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Input 
          label="Monthly Limit (₹)" 
          type="number"
          placeholder="e.g. 5000" 
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          required
        />
        <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full">
          {isSubmitting ? 'Saving...' : 'Save Budget'}
        </Button>
      </form>
    </Modal>
  );
}
