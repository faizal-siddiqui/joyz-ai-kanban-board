import CONSTANTS from "./constants";

// =====================================================
// STORAGE MODULE - Handles localStorage operations
// =====================================================
const StorageManager = {
  /**
   * Saves tasks to localStorage
   * @param {Array} tasks - Array of task objects
   */
  STORAGE_KEY: CONSTANTS.STORAGE_KEY,

  saveTasks(tasks) {
    try {
      const taskData = JSON.stringify(tasks);
      localStorage.setItem(this.STORAGE_KEY, taskData);
      console.log("Tasks saved successfully");
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  },

  /**
   * Loads tasks from localStorage
   * @returns {Array} Array of task objects
   */
  loadTasks() {
    try {
      const taskData = localStorage.getItem(this.STORAGE_KEY);
      return taskData ? JSON.parse(taskData) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  },

  /**
   * Clears all tasks from storage
   */
  clearTasks() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      console.log("Tasks cleared successfully");
    } catch (error) {
      console.error("Error clearing tasks:", error);
    }
  },
};

export default StorageManager;
