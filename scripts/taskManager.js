// taskManager.js
import {
  TASK_INPUT_ID,
  STATUS_INPUT_ID,
  GOAL_INPUT_ID,
  PROGRESS_INPUT_ID,
  TABLE_BODY_SELECTOR,
} from "./constants.js";
import { startEditingTask } from "./form.js";

export function createTableRow(task, status, goal, progress, rowCount) {
  const row = document.createElement("tr");
  row.id = `task-row-${rowCount}`;

  const cells = [task, status, goal, progress].map((text) => {
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

export function updateTask(rowToEdit) {
  const task = document.querySelector(TASK_INPUT_ID).value;
  const status = document.querySelector(STATUS_INPUT_ID).value;
  const goal = document.querySelector(GOAL_INPUT_ID).value;
  const progress = document.querySelector(PROGRESS_INPUT_ID).value;

  const cells = rowToEdit.querySelectorAll("td");
  cells[0].textContent = task;
  cells[1].textContent = status;
  cells[2].textContent = goal;
  cells[3].textContent = progress;
}

export function addNewTask() {
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
}

export function removeTask(row) {
  row.remove();
}
