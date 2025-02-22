// main.js
import { ADD_TASK_BUTTON_ID } from "./constants.js";
import { showForm, handleFormSubmit } from "./form.js";

document.querySelector(ADD_TASK_BUTTON_ID).addEventListener("click", showForm);

const form = document.querySelector(".form-wrapper form");
form.addEventListener("submit", handleFormSubmit);
