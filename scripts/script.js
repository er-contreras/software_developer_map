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

  const rows = document.querySelectorAll('tr[id^="task-row-"]');
  const rowCount = rows.length;

  table_row.id = `task-row-${rowCount}`;
  task_data.textContent = `${task}`;
  task_status_data.textContent = `${task_status}`;
  goal_data.textContent = `${goal}`;
  progress_data.textContent = `${progress}`;
  remove_btn.textContent = "Remove";


  const remove_btns = document.querySelectorAll('button[id^="task-btn-"]');
  const rmv_btn_count = remove_btns.length;
  remove_btn.id = `task-btn-${rmv_btn_count}`;
  remove_btn.onclick = function() {
    removeTask(this);
  }

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

// Code to remove tasks
function removeTask(btn) {
  if (btn) {
    const row = btn.parentNode.parentNode;
    
    if (row) {
      row.remove();
    } else {
      console.error("Row not found!");
    }
  } else {
    console.log("Button not found!");
  }
}
