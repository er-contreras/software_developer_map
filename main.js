import { ADD_TASK_BUTTON_ID } from "./modules/constants.js";
import { showForm, handleFormSubmit } from "./modules/form.js";

document.querySelector(ADD_TASK_BUTTON_ID).addEventListener("click", showForm);

const form = document.querySelector(".form-wrapper form");
form.addEventListener("submit", handleFormSubmit);
