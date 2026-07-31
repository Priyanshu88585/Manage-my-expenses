import express from 'express';
import cors from 'cors';
import expensesRouter from './routes/expenses.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/expenses', expensesRouter);

// 404 handler (must be after routes)
app.use(notFound);

// Global error handler (must be last)
app.use(errorHandler);

export default app;
