import StorageManager from "./storage.js";
import Utils from "./utils.js";

// =====================================================
// TASK MANAGER - Handles task data operations
// =====================================================
const TaskManager = {
  tasks: [],

  /**
   * Initializes task manager by loading existing tasks
   */
  init() {
    this.tasks = StorageManager.loadTasks();
    console.log(`Loaded ${this.tasks.length} tasks from storage`);
  },

  /**
   * Creates a new task
   * @param {string} title - Task title
   * @param {string} description - Task description
   * @returns {Object} Created task object
   */
  createTask(title, description) {
    const task = {
      id: Utils.generateId(),
      title: title.trim(),
      description: description.trim(),
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tasks.push(task);
    this.saveTasks();
    console.log("Task created:", task);
    return task;
  },

  /**
   * Updates a task's status
   * @param {string} taskId - Task ID
   * @param {string} newStatus - New status (todo, inprogress, done)
   */
  updateTaskStatus(taskId, newStatus) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = newStatus;
      task.updatedAt = new Date();
      this.saveTasks();
      console.log(`Task ${taskId} moved to ${newStatus}`);
    }
  },

  /**
   * Gets tasks by status
   * @param {string} status - Task status to filter by
   * @returns {Array} Filtered tasks
   */
  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  },

  /**
   * Saves tasks to storage
   */
  saveTasks() {
    StorageManager.saveTasks(this.tasks);
  },

  /**
   * Gets all tasks
   * @returns {Array} All tasks
   */
  getAllTasks() {
    return this.tasks;
  },
};

export default TaskManager;

console.log("✓ TaskManager module loaded");
