import TaskManager from "./taskManager.js";
import Utils from "./utils.js";

// =====================================================
// RENDER MODULE - Handles DOM rendering and updates
// =====================================================
const RenderManager = {
  /**
   * Creates a task card DOM element
   * @param {Object} task - Task object
   * @returns {HTMLElement} Task card element
   */
  createTaskCard(task) {
    const taskCard = Utils.createElement("div", {
      class: "task-card",
      "data-task-id": task.id,
      draggable: "true",
    });

    const taskTitle = Utils.createElement(
      "div",
      {
        class: "task-title",
      },
      task.title
    );

    const taskDescription = Utils.createElement(
      "div",
      {
        class: "task-description",
      },
      task.description || "No description provided"
    );

    const taskMeta = Utils.createElement(
      "div",
      {
        class: "task-meta",
      },
      `
            <span class="task-id">ID: ${task.id.split("_")[1]}</span>
            <span class="task-date">${Utils.formatDate(task.createdAt)}</span>
        `
    );

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskMeta);

    return taskCard;
  },

  /**
   * Renders tasks in a specific column
   * @param {string} status - Column status (todo, inprogress, done)
   */
  renderColumn(status) {
    const containerMap = {
      todo: "todoTasks",
      inprogress: "inprogressTasks",
      done: "doneTasks",
    };

    const container = document.getElementById(containerMap[status]);
    if (!container) {
      console.error(`Container for status ${status} not found`);
      return;
    }

    // Clear existing tasks
    container.innerHTML = "";

    const tasks = TaskManager.getTasksByStatus(status);

    if (tasks.length === 0) {
      const emptyState = Utils.createElement(
        "div",
        {
          class: "empty-column",
        },
        `No tasks in ${status.replace("inprogress", "in progress")}`
      );
      container.appendChild(emptyState);
    } else {
      tasks.forEach((task) => {
        const taskCard = this.createTaskCard(task);
        container.appendChild(taskCard);
      });
    }
  },

  /**
   * Renders all columns
   */
  renderAllColumns() {
    ["todo", "inprogress", "done"].forEach((status) => {
      this.renderColumn(status);
    });
  },

  /**
   * Updates the entire board display
   */
  updateBoard() {
    this.renderAllColumns();
    console.log("Board updated");
  },
};

export default RenderManager;

console.log("✓ RenderManager module loaded");
