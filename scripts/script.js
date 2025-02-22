// Constants for selectors (good practice to avoid typos and make changes easier)
const TASK_INPUT_ID = "#task";
const STATUS_INPUT_ID = "#status";
const GOAL_INPUT_ID = "#goal";
const PROGRESS_INPUT_ID = "#progress";
const TABLE_BODY_SELECTOR = "table tbody";
const ADD_TASK_BUTTON_ID = "#add-new-task-btn";
const FORM_WRAPPER_SELECTOR = ".form-wrapper";
const CLOSE_BUTTON_SELECTOR = ".close-btn";

let rowToEdit = null;

function createTableRow(task, status, goal, progress, rowCount) {
  const row = document.createElement("tr");
  row.id = `task-row-${rowCount}`;

  const cells = [task, status, goal, progress].map(text => {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
  });

  const editCell = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.id = `edit-task-${rowCount}`;
  editButton.addEventListener("click", () => startEditingTask(row));
  editCell.appendChild(editButton);

  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.id = `task-btn-${rowCount}`;
  removeButton.addEventListener("click", () => removeTask(row));
  removeCell.appendChild(removeButton);

  row.append(...cells, removeCell, editCell);
  return row;
}

function startEditingTask(row) {
  rowToEdit = row;
  showForm();

  const cells = row.querySelectorAll("td");
  document.querySelector(TASK_INPUT_ID).value = cells[0].textContent;
  document.querySelector(STATUS_INPUT_ID).value = cells[1].textContent;
  document.querySelector(GOAL_INPUT_ID).value = cells[2].textContent;
  document.querySelector(PROGRESS_INPUT_ID).value = cells[3].textContent;

  const submitButton = document.querySelector('.form-wrapper form input[type="submit"]');
  submitButton.value = "Update";
}

function updateTask() {
  if (rowToEdit) {
    const task = document.querySelector(TASK_INPUT_ID).value;
    const status = document.querySelector(STATUS_INPUT_ID).value;
    const goal = document.querySelector(GOAL_INPUT_ID).value;
    const progress = document.querySelector(PROGRESS_INPUT_ID).value;

    const cells = rowToEdit.querySelectorAll("td");
    cells[0].textContent = task;
    cells[1].textContent = status;
    cells[2].textContent = goal;
    cells[3].textContent = progress;

    rowToEdit = null;
    hideForm();

    const submitButton = document.querySelector('.form-wrapper form input[type="submit"]');
    submitButton.value = "Add Task";
  }
}

function addNewTask() {
  if (!rowToEdit) {
    const task = document.querySelector(TASK_INPUT_ID).value;
    const status = document.querySelector(STATUS_INPUT_ID).value;
    const goal = document.querySelector(GOAL_INPUT_ID).value;
    const progress = document.querySelector(PROGRESS_INPUT_ID).value;
    const tableBody = document.querySelector(TABLE_BODY_SELECTOR);

    const rowCount = tableBody.querySelectorAll('tr[id^="task-row-"]').length;
    const newRow = createTableRow(task, status, goal, progress, rowCount);
    tableBody.appendChild(newRow);

    document.querySelector(TASK_INPUT_ID).value = "";
    document.querySelector(STATUS_INPUT_ID).value = "";
    document.querySelector(GOAL_INPUT_ID).value = "";
    document.querySelector(PROGRESS_INPUT_ID).value = "";

    hideForm();
  } else {
    updateTask();
  }
}

function removeTask(row) {
  row.remove();
}

function showForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "flex";
}

function hideForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "none";
}

document.querySelector(ADD_TASK_BUTTON_ID).addEventListener("click", showForm);
document.querySelector(CLOSE_BUTTON_SELECTOR).addEventListener("click", hideForm);

const form = document.querySelector('.form-wrapper form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  addNewTask();
});
