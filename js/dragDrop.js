import RenderManager from "./renderManager.js";
import TaskManager from "./taskManager.js";

// =====================================================
// DRAG AND DROP MODULE - Handles drag and drop functionality
// =====================================================
const DragDropManager = {
  draggedElement: null,
  draggedTaskId: null,

  /**
   * Initializes drag and drop event listeners
   */
  init() {
    this.setupEventListeners();
    console.log("Drag and drop initialized");
  },

  /**
   * Sets up all drag and drop event listeners
   */
  setupEventListeners() {
    document.addEventListener("dragstart", this.handleDragStart.bind(this));
    document.addEventListener("dragend", this.handleDragEnd.bind(this));
    document.addEventListener("dragover", this.handleDragOver.bind(this));
    document.addEventListener("dragleave", this.handleDragLeave.bind(this));
    document.addEventListener("drop", this.handleDrop.bind(this));
  },

  /**
   * Handles drag start event
   * @param {Event} e - Drag event
   */
  handleDragStart(e) {
    if (!e.target.classList.contains("task-card")) return;

    this.draggedElement = e.target;
    this.draggedTaskId = e.target.dataset.taskId;

    e.target.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.outerHTML);

    console.log("Drag started for task:", this.draggedTaskId);
  },

  /**
   * Handles drag end event
   * @param {Event} e - Drag event
   */
  handleDragEnd(e) {
    if (!e.target.classList.contains("task-card")) return;

    e.target.classList.remove("dragging");
    this.draggedElement = null;
    this.draggedTaskId = null;

    // Remove drag-over class from all containers
    document.querySelectorAll(".tasks-container").forEach((container) => {
      container.classList.remove("drag-over");
    });

    console.log("Drag ended");
  },

  /**
   * Handles drag over event
   * @param {Event} e - Drag event
   */
  handleDragOver(e) {
    if (!this.draggedTaskId) return;

    const tasksContainer = e.target.closest(".tasks-container");
    if (!tasksContainer) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    tasksContainer.classList.add("drag-over");
  },

  /**
   * Handles drag leave event
   * @param {Event} e - Drag event
   */
  handleDragLeave(e) {
    const tasksContainer = e.target.closest(".tasks-container");
    if (!tasksContainer) return;

    // Only remove drag-over if we're actually leaving the container
    if (!tasksContainer.contains(e.relatedTarget)) {
      tasksContainer.classList.remove("drag-over");
    }
  },

  /**
   * Handles drop event
   * @param {Event} e - Drag event
   */
  handleDrop(e) {
    if (!this.draggedTaskId) return;

    const tasksContainer = e.target.closest(".tasks-container");
    if (!tasksContainer) return;

    e.preventDefault();
    tasksContainer.classList.remove("drag-over");

    const column = tasksContainer.closest(".column");
    const newStatus = column.dataset.status;

    // Update task status
    TaskManager.updateTaskStatus(this.draggedTaskId, newStatus);

    // Re-render the board
    RenderManager.updateBoard();

    console.log(`Task ${this.draggedTaskId} dropped in ${newStatus}`);
  },
};

export default DragDropManager;

console.log("✓ DragDrop module loaded");
