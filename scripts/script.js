// Constants for selectors (good practice to avoid typos and make changes easier)
const TASK_INPUT_ID = "#task";
const STATUS_INPUT_ID = "#status";
const GOAL_INPUT_ID = "#goal";
const PROGRESS_INPUT_ID = "#progress";
const TABLE_BODY_SELECTOR = "table tbody";
const ADD_TASK_BUTTON_ID = "#add-new-task-btn";
const FORM_WRAPPER_SELECTOR = ".form-wrapper";
const CLOSE_BUTTON_SELECTOR = ".close-btn";

// Function to create a single table row
function createTableRow(task, status, goal, progress, rowCount) {
  const row = document.createElement("tr");
  row.id = `task-row-${rowCount}`;

  const cells = [task, status, goal, progress].map(text => {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
  });

  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.id = `task-btn-${rowCount}`; // Use rowCount for button ID as well.
  removeButton.addEventListener("click", () => removeTask(row)); // Pass the row directly
  removeCell.appendChild(removeButton);

  row.append(...cells, removeCell); // Append all cells at once
  return row;
}

// Function to add a new task to the table
function addNewTask() {
  const task = document.querySelector(TASK_INPUT_ID).value;
  const status = document.querySelector(STATUS_INPUT_ID).value;
  const goal = document.querySelector(GOAL_INPUT_ID).value;
  const progress = document.querySelector(PROGRESS_INPUT_ID).value;
  const tableBody = document.querySelector(TABLE_BODY_SELECTOR);

  const rowCount = tableBody.querySelectorAll('tr[id^="task-row-"]').length; //More efficient way to count rows

  const newRow = createTableRow(task, status, goal, progress, rowCount);
  tableBody.appendChild(newRow);

  // Clear the form inputs after adding the task (optional but often good UX)
  document.querySelector(TASK_INPUT_ID).value = "";
  document.querySelector(STATUS_INPUT_ID).value = "";
  document.querySelector(GOAL_INPUT_ID).value = "";
  document.querySelector(PROGRESS_INPUT_ID).value = "";

  hideForm(); //Close the form after adding the task
}

// Function to remove a task
function removeTask(row) { // Now receives the row directly
  row.remove();
}

// Functions to show/hide the form (makes code cleaner)
function showForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "flex";
}

function hideForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "none";
}

// Event listeners
document.querySelector(ADD_TASK_BUTTON_ID).addEventListener("click", showForm);
document.querySelector(CLOSE_BUTTON_SELECTOR).addEventListener("click", hideForm);

// Add event listener to the form's submit button instead of the add task button.
const form = document.querySelector('.form-wrapper form'); // Select your form element
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from actually submitting/reloading
  addNewTask();
});
