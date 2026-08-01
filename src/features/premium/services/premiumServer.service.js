import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'premium.json');

/**
 * Ensures the premium.json file exists and returns its parsed content.
 */
export async function getPremiumData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      const defaultData = {
        budgets: [],
        goals: [],
        recurring: [],
        netWorthBase: { baseAssets: 0, baseLiabilities: 0 }
      };
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    throw error;
  }
}

/**
 * Saves the given premium data structure to premium.json.
 */
export async function savePremiumData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}
