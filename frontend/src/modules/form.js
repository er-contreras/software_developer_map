import {
  TASK_INPUT_ID,
  STATUS_INPUT_ID,
  TIME_INPUT_ID,
  PROGRESS_INPUT_ID,
  FORM_WRAPPER_SELECTOR,
  CLOSE_BUTTON_SELECTOR,
  FORM_SUBMIT_BUTTON_SELECTOR,
} from "./constants.js";
import { addNewTask, updateTask } from "./taskManager.js";

let rowToEdit = null;

export function showForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "flex";
}

export function hideForm() {
  document.querySelector(FORM_WRAPPER_SELECTOR).style.display = "none";
}

export function startEditingTask(row) {
  rowToEdit = row;
  showForm();

  const cells = row.querySelectorAll("td");
  document.querySelector(TASK_INPUT_ID).value = cells[0].textContent;
  document.querySelector(STATUS_INPUT_ID).value = cells[1].textContent;
  document.querySelector(TIME_INPUT_ID).value = cells[2].textContent;
  document.querySelector(PROGRESS_INPUT_ID).value = cells[3].textContent;

  const submitButton = document.querySelector(FORM_SUBMIT_BUTTON_SELECTOR);
  submitButton.value = "Update";
}

export function handleFormSubmit(event) {
  event.preventDefault();

  if (rowToEdit) {
    updateTask(rowToEdit);
    rowToEdit = null;
    document.querySelector(FORM_SUBMIT_BUTTON_SELECTOR).value = "Add Task";
    hideForm();
  } else {
    addNewTask();
    hideForm();
  }
}

document.querySelector(CLOSE_BUTTON_SELECTOR).addEventListener("click", hideForm);
