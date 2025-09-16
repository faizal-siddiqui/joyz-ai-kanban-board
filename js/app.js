import CONSTANTS from "./constants.js";
import DragDropManager from "./dragDrop.js";
import EventManager from "./eventManager.js";
import RenderManager from "./renderManager.js";
import TaskManager from "./taskManager.js";

// =====================================================
// APPLICATION INITIALIZATION
// =====================================================
const KanbanApp = {
  /**
   * Initializes the entire Kanban application
   */
  init() {
    console.log("Initializing Kanban Board Application...");

    // Initialize all modules in correct order
    TaskManager.init();
    EventManager.init();
    DragDropManager.init();

    // Render initial board state
    RenderManager.updateBoard();

    // Add some sample tasks if no tasks exist (for demonstration)
    if (TaskManager.getAllTasks().length === 0) {
      this.createSampleTasks();
    }

    console.log("Kanban Board Application initialized successfully!");
  },

  /**
   * Creates sample tasks for demonstration
   */
  createSampleTasks() {
    const sampleTasks = CONSTANTS.SAMPLE_TASKS;

    sampleTasks.forEach((task) => {
      TaskManager.createTask(task.title, task.description);
    });

    // Move one task to in progress for demonstration
    const allTasks = TaskManager.getAllTasks();
    if (allTasks.length > 1) {
      TaskManager.updateTaskStatus(
        allTasks[1].id,
        CONSTANTS.TASK_STATUSES.INPROGRESS
      );
    }

    RenderManager.updateBoard();
    console.log("Sample tasks created");
  },
};

console.log("✓ App module loaded");

// =====================================================
// APPLICATION STARTUP
// =====================================================

// Initialize the application when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    KanbanApp.init();
  });
} else {
  KanbanApp.init();
}

// Add global error handling
window.addEventListener("error", (e) => {
  console.error("Application error:", e.error);
});
