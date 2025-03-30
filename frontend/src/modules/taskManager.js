import {
  TASK_INPUT_ID,
  STATUS_INPUT_ID,
  TIME_INPUT_ID,
  PROGRESS_INPUT_ID,
  TABLE_BODY_SELECTOR,
} from "./constants.js";
import { startEditingTask } from "./form.js";

export function createTableRow(task, status, time, progress, rowCount) {
  const row = document.createElement("tr");
  row.id = `task-row-${rowCount}`;

  const cells = [task, status, time, progress].map((text) => {
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
  const time = document.querySelector(TIME_INPUT_ID).value;
  const progress = document.querySelector(PROGRESS_INPUT_ID).value;

  const cells = rowToEdit.querySelectorAll("td");
  cells[0].textContent = task;
  cells[1].textContent = status;
  cells[2].textContent = time;
  cells[3].textContent = progress;
}

export async function addNewTask() {
  const task = document.querySelector(TASK_INPUT_ID).value;
  const status = document.querySelector(STATUS_INPUT_ID).value;
  const time = document.querySelector(TIME_INPUT_ID).value;
  const progress = document.querySelector(PROGRESS_INPUT_ID).value;
  const tableBody = document.querySelector(TABLE_BODY_SELECTOR);

  const url = 'http://localhost:3000/post'

  const postTask = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      task: task,
      status: status,
      time: time,
      progress: progress
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const response = await postTask.text();
  console.log(response);

  const rowCount = tableBody.querySelectorAll('tr[id^="task-row-"]').length;
  const newRow = createTableRow(task, status, time, progress, rowCount);

  tableBody.appendChild(newRow);

  document.querySelector(TASK_INPUT_ID).value = "";
  document.querySelector(STATUS_INPUT_ID).value = "";
  document.querySelector(TIME_INPUT_ID).value = "";
  document.querySelector(PROGRESS_INPUT_ID).value = "";
}

export function removeTask(row) {
  row.remove();
}
