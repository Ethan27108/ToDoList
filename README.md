# To-Do List

This project is a simple To-Do List application that allows users to add, delete, and manage tasks with priorities and due dates. The tasks are stored in the browser's local storage, so they persist even after the page is refreshed.

## Requirements

- A modern web browser with JavaScript enabled

## Usage

1. Open the `index.html` file in your web browser.
2. Use the input fields to add new tasks with a due date.
3. Click the "Add Task" button to add the task to the list.
4. Use the priority button to cycle through task priorities (Low, Medium, High).
5. Use the checkbox to mark tasks as finished.
6. Use the "Delete" button to remove tasks from the list.
7. The tasks are automatically saved to local storage and will be loaded when the page is refreshed.

## How It Works

### Adding Tasks

Tasks are added using the `createFunction` function, which:
1. Retrieves the task description and due date from the input fields.
2. Creates a new row in the table with the task details.
3. Adds buttons for setting the priority and deleting the task.
4. Adds a checkbox for marking the task as finished.
5. Saves the task to local storage.

### Managing Tasks

- **Priority Button**: Cycles through the priorities (Low, Medium, High) and updates the task's priority.
- **Delete Button**: Removes the task from the list.
- **Checkbox**: Marks the task as finished or not finished and updates the task's status.

### Local Storage

The `localStorageCreator` function saves the current state of the task list to local storage. The `getStorage` function retrieves the task list from local storage and repopulates the table when the page is loaded.

### Sorting Tasks

The `sortTable` function sorts the tasks based on their priority and status (Finished, Low, Medium, High).

## Functions

- **`localStorageCreator()`**: Saves the current state of the task list to local storage.
- **`getStorage()`**: Retrieves the task list from local storage and repopulates the table.
- **`createUseStore(i)`**: Creates a task row from the stored data.
- **`createFunction()`**: Adds a new task to the list.
- **`sortTable()`**: Sorts the tasks based on their priority and status.
