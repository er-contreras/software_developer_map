// Add new table data dinamically 
function myFunction() {
  const task = document.querySelector("#task");
  const status = document.querySelector("#status");
  const goal = document.querySelector("#goal");
  const progress = document.querySelector("#progress");
  const table_body = document.querySelector("table tbody");

  const input_task = task.value;
  const input_status = status.value;
  const input_goal = goal.value;
  const input_progress = progress.value;

  const table_row = document.createElement("tr");
  const table_data = document.createElement("td");
  const table_data2 = document.createElement("td");
  const table_data3 = document.createElement("td");
  const table_data4 = document.createElement("td");
  const table_data5 = document.createElement("td");
  const table_btn = document.createElement("button");

  table_data.textContent = `${input_task}`;
  table_data2.textContent = `${input_status}`;
  table_data3.textContent = `${input_goal}`;
  table_data4.textContent = `${input_progress}`;
  table_btn.textContent = "Remove";
  table_btn.className = "task-btn";

  table_body.appendChild(table_row);
  table_row.appendChild(table_data);
  table_row.appendChild(table_data2);
  table_row.appendChild(table_data3);
  table_row.appendChild(table_data4);
  table_row.appendChild(table_data5);
  table_data5.appendChild(table_btn);
}

let button = document.querySelector("#form-button");
button.addEventListener("click", myFunction);

// When click button show popup window to add new task
const new_task_button = document.querySelector("#add-new-task-button");
const div_form_button = document.querySelector(".form-wrapper");

new_task_button.addEventListener("click", () => {
  div_form_button.style.display = "flex";
})

const close_button = document.querySelector(".close-button");
close_button.addEventListener("click", () => {
  div_form_button.style.display = "none";
})

