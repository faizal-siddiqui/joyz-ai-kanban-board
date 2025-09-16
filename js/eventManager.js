import RenderManager from "./renderManager.js";
import TaskManager from "./taskManager.js";

// =====================================================
// EVENT HANDLER MODULE - Handles form events and user interactions
// =====================================================
const EventManager = {
  /**
   * Initializes all event listeners
   */
  init() {
    this.setupFormEvents();
    console.log("Event manager initialized");
  },

  /**
   * Sets up form event listeners
   */
  setupFormEvents() {
    const taskForm = document.getElementById("taskForm");
    if (taskForm) {
      taskForm.addEventListener("submit", this.handleTaskSubmit.bind(this));
    }
  },

  /**
   * Handles task form submission
   * @param {Event} e - Submit event
   */
  handleTaskSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    // Create new task
    const newTask = TaskManager.createTask(title, description);

    // Clear form
    e.target.reset();

    // Update display
    RenderManager.updateBoard();

    // Focus back to title input for better UX
    document.getElementById("taskTitle").focus();

    console.log("New task added via form:", newTask);
  },
};

export default EventManager;

console.log("✓ Event manager module loaded");
