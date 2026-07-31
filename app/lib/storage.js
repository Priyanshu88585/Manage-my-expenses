import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DATA_DIR = join(process.cwd(), 'data');
const DEFAULT_FILE = join(DATA_DIR, 'expenses.json');

/**
 * Read expenses from a JSON file.
 * @param {string} [filePath] - Path to JSON file (defaults to data/expenses.json)
 * @returns {Promise<Array>} Array of expense objects
 */
export async function readData(filePath = DEFAULT_FILE) {
  try {
    const dir = dirname(filePath);
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }
    if (!existsSync(filePath)) {
      await writeFile(filePath, '[]', 'utf-8');
      return [];
    }
    const raw = await readFile(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(filePath, '[]', 'utf-8');
      return [];
    }
    throw err;
  }
}

/**
 * Write expenses array to a JSON file.
 * @param {Array} data - Array of expense objects
 * @param {string} [filePath] - Path to JSON file (defaults to data/expenses.json)
 */
export async function writeData(data, filePath = DEFAULT_FILE) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
