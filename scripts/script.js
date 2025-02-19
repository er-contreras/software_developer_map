// Add new table data dinamically 
function createTableData() {
  const task = document.querySelector("#task").value;
  const task_status = document.querySelector("#status").value;
  const goal = document.querySelector("#goal").value;
  const progress = document.querySelector("#progress").value;
  const table_body = document.querySelector("table tbody");

  const table_row = document.createElement("tr");
  const task_data = document.createElement("td");
  const task_status_data = document.createElement("td");
  const goal_data = document.createElement("td");
  const progress_data = document.createElement("td");
  const remove_data = document.createElement("td");
  const remove_btn = document.createElement("button");

  task_data.textContent = `${task}`;
  task_status_data.textContent = `${task_status}`;
  goal_data.textContent = `${goal}`;
  progress_data.textContent = `${progress}`;
  remove_btn.textContent = "Remove";
  remove_btn.className = "task-btn";

  table_body.appendChild(table_row);
  table_row.appendChild(task_data);
  table_row.appendChild(task_status_data);
  table_row.appendChild(goal_data);
  table_row.appendChild(progress_data);
  table_row.appendChild(remove_data);
  remove_data.appendChild(remove_btn);
}

const submit_btn = document.querySelector("#form-btn");
submit_btn.addEventListener("click", createTableData);

// When click button show popup window to add new task
const new_task_btn = document.querySelector("#add-new-task-btn");
const div_form_btn = document.querySelector(".form-wrapper");

new_task_btn.addEventListener("click", () => {
  div_form_btn.style.display = "flex";
})

const close_btn = document.querySelector(".close-btn");
close_btn.addEventListener("click", () => {
  div_form_btn.style.display = "none";
})
