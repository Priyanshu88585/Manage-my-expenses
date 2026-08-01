"use client";
import { useState } from 'react';
import Modal from '@/components/ui/Modal.jsx';
import Button from '@workspace/ui/Button';
import Input from '@workspace/ui/Input';
import { addGoal } from '@/features/premium/services/premiumClient.js';

export default function AddGoalModal({ isOpen, onClose, onAddSuccess }) {
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [current, setCurrent] = useState('');
  const [icon, setIcon] = useState('🎯');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !target) return;
    
    setIsSubmitting(true);
    try {
      await addGoal({
        title,
        target: Number(target),
        current: Number(current || 0),
        icon
      });
      setTitle('');
      setTarget('');
      setCurrent('');
      setIcon('🎯');
      onAddSuccess(); // trigger re-fetch
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Savings Goal">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-[3rem_1fr] gap-4">
          <Input 
            label="Icon" 
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="text-center"
            required
          />
          <Input 
            label="Goal Name" 
            placeholder="e.g. Emergency Fund" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <Input 
          label="Target Amount (₹)" 
          type="number"
          placeholder="e.g. 100000" 
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          required
        />
        
        <Input 
          label="Current Savings (₹) - Optional" 
          type="number"
          placeholder="0" 
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        
        <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full">
          {isSubmitting ? 'Saving...' : 'Save Goal'}
        </Button>
      </form>
    </Modal>
  );
}
