import { NextResponse } from 'next/server';
import Tesseract from 'tesseract.js';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('receipt');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Run Tesseract OCR on the image buffer
    const { data: { text } } = await Tesseract.recognize(
      buffer,
      'eng',
      { logger: m => console.log(m) }
    );

    // Parse the extracted text
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    let merchant = "Unknown Merchant";
    let amount = null;
    let date = null;

    if (lines.length > 0) {
      merchant = lines[0]; // Usually the first line is the merchant name
    }

    // Try to extract date
    const dateRegex = /(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/;
    for (let line of lines) {
      const dateMatch = line.match(dateRegex);
      if (dateMatch) {
        date = dateMatch[1].replace(/\./g, '/').replace(/-/g, '/'); // Normalize to slashes
      }
    }

    // Try to extract amount
    // Looking for "Grand Total : 70" or "Net Total: 59" or "Total 70.00"
    const amountRegexes = [
      /grand\s*total\s*[:\-\s]*([\d,\.]+)/i,
      /net\s*total\s*[:\-\s]*([\d,\.]+)/i,
      /total\s*amount\s*[:\-\s]*([\d,\.]+)/i,
      /total\s*[:\-\s]*([\d,\.]+)/i,
      /amount\s*[:\-\s]*([\d,\.]+)/i,
    ];

    for (let regex of amountRegexes) {
      for (let line of lines) {
        const match = line.match(regex);
        if (match) {
          const parsedAmount = parseFloat(match[1].replace(/,/g, ''));
          if (!isNaN(parsedAmount) && (amount === null || parsedAmount > amount)) {
            // Keep the largest valid amount found matching keywords
            amount = parsedAmount;
          }
        }
      }
    }

    // Fallback amount logic (if no keyword matched, find the largest float at the end of a line)
    if (amount === null) {
      for (let line of lines) {
        const fallbackMatch = line.match(/([\d,\.]+)\s*$/);
        if (fallbackMatch) {
          const parsed = parseFloat(fallbackMatch[1].replace(/,/g, ''));
          if (!isNaN(parsed) && (amount === null || parsed > amount)) {
             amount = parsed;
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      rawText: text,
      merchant,
      amount: amount || 0,
      date: date || new Date().toISOString().split('T')[0],
      category: 'Food & Dining' // Default mapped category based on restaurant receipts
    });

  } catch (error) {
    console.error('OCR Processing Error:', error);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}
