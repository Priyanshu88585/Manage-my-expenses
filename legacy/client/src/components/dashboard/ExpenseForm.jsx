import { useState } from 'react';
import Button from '../ui/Button.jsx';
import Input from '../ui/Input.jsx';
import './ExpenseForm.css';

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
      newErrors.amount = 'Amount must be greater than 0.';
    }
    if (!formData.category.trim()) newErrors.category = 'Category is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
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
    <section className="expense-form-section" aria-label="Add new expense">
      <h2 className="expense-form-section__title">Add Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit} noValidate>
        <div className="expense-form__fields">
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
            label="Amount ($)"
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
          <p className="expense-form__error" role="alert">{errors.form}</p>
        )}
        {success && (
          <p className="expense-form__success" role="status">✓ Expense added successfully!</p>
        )}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Expense'}
        </Button>
      </form>
    </section>
  );
}

export default ExpenseForm;
