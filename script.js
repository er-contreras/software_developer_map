function myFunction() {
  const task = document.querySelector("#task");
  const status = document.querySelector("#status");
  const goal = document.querySelector("#goal");
  const table_body = document.querySelector("table tbody");

  const input_task = task.value;
  const input_status = status.value;
  const input_goal = goal.value;

  const table_row = document.createElement("tr");
  const table_data = document.createElement("td");
  const table_data2 = document.createElement("td");
  const table_data3 = document.createElement("td");

  table_data.textContent = `${input_task}`;
  table_data2.textContent = `${input_status}`;
  table_data3.textContent = `${input_goal}`;

  table_body.appendChild(table_row);
  table_row.appendChild(table_data);
  table_row.appendChild(table_data2);
  table_row.appendChild(table_data3);
}

let button = document.querySelector("button");
button.addEventListener("click", myFunction);
