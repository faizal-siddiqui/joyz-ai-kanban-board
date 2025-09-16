const CONSTANTS = {
  STORAGE_KEY: "kanban_tasks",

  TASK_STATUSES: {
    INPROGRESS: "inprogress",
    TODO: "todo",
    DONE: "done",
  },

  SAMPLE_TASKS: [
    {
      title: "Setup Development Environment",
      description:
        "Install Node.js, configure IDE, and set up project structure",
    },
    {
      title: "Design Database Schema",
      description:
        "Create ERD and define table relationships for the application",
    },
    {
      title: "Implement User Authentication",
      description: "Add login/logout functionality with JWT tokens",
    },
  ],
};

export default CONSTANTS;
