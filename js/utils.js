// =====================================================
// UTILITY FUNCTIONS - Reusable helper functions
// =====================================================
const Utils = {
  /**
   * Generates a unique ID for tasks
   * @returns {string} Unique identifier
   */
  generateId() {
    return "task_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  },

  /**
   * Creates a DOM element with specified attributes and content
   * @param {string} tag - HTML tag name
   * @param {Object} attributes - Object containing attributes
   * @param {string} content - Inner HTML content
   * @returns {HTMLElement} Created DOM element
   */
  createElement(tag, attributes = {}, content = "") {
    const element = document.createElement(tag);

    // Set attributes
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });

    // Set content
    if (content) {
      element.innerHTML = content;
    }

    return element;
  },

  /**
   * Formats date to readable string
   * @param {Date} date - Date object
   * @returns {string} Formatted date string
   */
  formatDate(date) {
    const d = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  },

  /**
   * Debounce function to limit function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
};

export default Utils;

console.log("✓ Utils module loaded");
