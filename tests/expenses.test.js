import { jest } from '@jest/globals';
import request from 'supertest';
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the test data file
const TEST_DATA_PATH = join(__dirname, '..', 'server', 'src', 'data', 'expenses.json');

let app;

beforeAll(async () => {
  // Reset data file before tests
  await writeFile(TEST_DATA_PATH, '[]', 'utf-8');
  // Dynamic import to ensure clean state
  const mod = await import('../server/src/app.js');
  app = mod.default;
});

afterAll(async () => {
  // Clean up test data
  await writeFile(TEST_DATA_PATH, '[]', 'utf-8');
});

describe('Expenses API', () => {
  let createdExpenseId;

  // ─── POST /expenses ───────────────────────────────────────
  describe('POST /expenses', () => {
    it('should create a new expense with valid data', async () => {
      const expense = {
        title: 'Lunch',
        amount: 12.5,
        category: 'Food',
        date: '2026-08-01',
      };

      const res = await request(app)
        .post('/expenses')
        .send(expense)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(res.body).toHaveProperty('id');
      expect(res.body.title).toBe('Lunch');
      expect(res.body.amount).toBe(12.5);
      expect(res.body.category).toBe('Food');
      expect(res.body.date).toBe('2026-08-01');

      createdExpenseId = res.body.id;
    });

    it('should create a second expense', async () => {
      const expense = {
        title: 'Taxi',
        amount: 25.0,
        category: 'Transport',
        date: '2026-08-01',
      };

      const res = await request(app)
        .post('/expenses')
        .send(expense)
        .expect(201);

      expect(res.body.title).toBe('Taxi');
      expect(res.body.category).toBe('Transport');
    });

    it('should create a third expense in same category', async () => {
      const expense = {
        title: 'Dinner',
        amount: 30.0,
        category: 'Food',
        date: '2026-08-02',
      };

      const res = await request(app)
        .post('/expenses')
        .send(expense)
        .expect(201);

      expect(res.body.title).toBe('Dinner');
    });

    it('should return 400 when title is missing', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({ amount: 10, category: 'Food', date: '2026-08-01' })
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 when amount is negative', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({ title: 'Bad', amount: -5, category: 'Food', date: '2026-08-01' })
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 when amount is zero', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({ title: 'Free', amount: 0, category: 'Food', date: '2026-08-01' })
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 when category is empty', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({ title: 'Test', amount: 10, category: '', date: '2026-08-01' })
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 when date is invalid', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({ title: 'Test', amount: 10, category: 'Food', date: 'not-a-date' })
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 when body is empty', async () => {
      const res = await request(app)
        .post('/expenses')
        .send({})
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });
  });

  // ─── GET /expenses ────────────────────────────────────────
  describe('GET /expenses', () => {
    it('should return all expenses', async () => {
      const res = await request(app)
        .get('/expenses')
        .expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(3);
    });

    it('should filter expenses by category', async () => {
      const res = await request(app)
        .get('/expenses?category=Food')
        .expect(200);

      expect(res.body.length).toBe(2);
      res.body.forEach((expense) => {
        expect(expense.category.toLowerCase()).toBe('food');
      });
    });

    it('should return empty array for non-existent category', async () => {
      const res = await request(app)
        .get('/expenses?category=NonExistent')
        .expect(200);

      expect(res.body.length).toBe(0);
    });
  });

  // ─── GET /expenses/total ──────────────────────────────────
  describe('GET /expenses/total', () => {
    it('should return the total of all expenses', async () => {
      const res = await request(app)
        .get('/expenses/total')
        .expect(200);

      expect(res.body).toHaveProperty('total');
      expect(res.body.total).toBe(67.5); // 12.5 + 25 + 30
    });

    it('should return total for a specific category', async () => {
      const res = await request(app)
        .get('/expenses/total?category=Food')
        .expect(200);

      expect(res.body).toHaveProperty('category', 'Food');
      expect(res.body).toHaveProperty('total');
      expect(res.body.total).toBe(42.5); // 12.5 + 30
    });

    it('should return zero for non-existent category', async () => {
      const res = await request(app)
        .get('/expenses/total?category=Entertainment')
        .expect(200);

      expect(res.body.total).toBe(0);
    });
  });

  // ─── DELETE /expenses/:id ─────────────────────────────────
  describe('DELETE /expenses/:id', () => {
    it('should delete an existing expense', async () => {
      await request(app)
        .delete(`/expenses/${createdExpenseId}`)
        .expect(204);

      // Verify it was removed
      const res = await request(app).get('/expenses').expect(200);
      expect(res.body.find((e) => e.id === createdExpenseId)).toBeUndefined();
    });

    it('should return 404 for non-existent ID', async () => {
      const res = await request(app)
        .delete('/expenses/non-existent-id-12345')
        .expect(404);

      expect(res.body).toHaveProperty('error');
    });
  });

  // ─── Unknown routes ───────────────────────────────────────
  describe('Unknown routes', () => {
    it('should return 404 for unknown paths', async () => {
      const res = await request(app)
        .get('/unknown-route')
        .expect(404);

      expect(res.body).toHaveProperty('error');
    });
  });
});
