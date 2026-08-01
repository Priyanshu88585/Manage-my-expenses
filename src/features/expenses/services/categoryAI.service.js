const categoryKeywords = {
  "Food & Dining": ["restaurant", "cafe", "coffee", "mcdonalds", "starbucks", "pizza", "burger", "zomato", "swiggy", "food", "lunch", "dinner", "breakfast", "grocery", "supermarket", "mart"],
  "Transportation": ["uber", "ola", "taxi", "cab", "petrol", "gas", "fuel", "train", "metro", "bus", "flight", "airlines"],
  "Shopping": ["amazon", "flipkart", "myntra", "clothes", "shoes", "mall", "store", "electronics", "apple", "samsung"],
  "Entertainment": ["movie", "cinema", "netflix", "prime", "spotify", "concert", "game", "steam"],
  "Utilities": ["electricity", "water", "gas bill", "internet", "wifi", "broadband", "jio", "airtel", "recharge", "phone"],
  "Health & Wellness": ["pharmacy", "hospital", "doctor", "clinic", "medicine", "gym", "fitness", "yoga"],
  "Housing": ["rent", "maintenance", "furniture", "home"],
  "Travel": ["hotel", "airbnb", "resort", "booking", "makemytrip", "agoda"]
};

/**
 * Predicts the category based on the expense title.
 * @param {string} title 
 * @returns {string} Suggested category
 */
export function predictCategory(title) {
  if (!title) return '';
  const lowerTitle = title.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const keyword of keywords) {
      if (lowerTitle.includes(keyword)) {
        return category;
      }
    }
  }
  return 'Miscellaneous';
}
