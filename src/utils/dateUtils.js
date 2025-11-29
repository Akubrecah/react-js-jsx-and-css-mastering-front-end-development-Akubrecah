/**
 * Formats a date string into a readable format.
 * @param {string} dateString - The ISO date string.
 * @returns {string} - Formatted date (e.g., "Oct 24, 2023").
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Returns the current timestamp in ISO format.
 * @returns {string} - ISO timestamp.
 */
export const getCurrentTimestamp = () => {
  return new Date().toISOString();
};
