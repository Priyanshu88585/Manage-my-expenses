/**
 * Mock OCR Service
 * In a real application, this would send an image to a backend endpoint 
 * or use an in-browser OCR library like Tesseract.js.
 */
export async function simulateOCRProcess(file) {
  return new Promise((resolve, reject) => {
    // Simulate processing time
    setTimeout(() => {
      if (!file) {
        return reject(new Error("No file provided"));
      }
      
      // Randomly pick a mock receipt result to make it feel dynamic
      const mockResults = [
        { title: "Starbucks Coffee", amount: 450.00, date: new Date().toISOString().split('T')[0], category: "Food & Dining" },
        { title: "Amazon Electronics", amount: 12500.00, date: new Date().toISOString().split('T')[0], category: "Shopping" },
        { title: "Uber Ride", amount: 350.50, date: new Date().toISOString().split('T')[0], category: "Transportation" },
        { title: "Jio Internet Recharge", amount: 999.00, date: new Date().toISOString().split('T')[0], category: "Utilities" }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      resolve(randomResult);
    }, 2000);
  });
}
