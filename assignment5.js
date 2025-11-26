const fs = require("fs");

const command = process.argv[2];
const value = process.argv[3];

const filePath = "./data.json";

// Load existing data
let tasks = [];

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, "utf-8");
  tasks = JSON.parse(data);
}

// ADD COMMAND
if (command === "add") {
  if (!value) {
    console.log("Please provide a task to add.");
    return;
  }

  tasks.push(value);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task added:", value);
}

// DELETE COMMAND
else if (command === "delete") {
  const index = Number(value);

  if (isNaN(index)) {
    console.log("Please provide a valid index to delete.");
    return;
  }

  tasks.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task deleted.");
}

// LIST COMMAND
else if (command === "list") {
  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }

  console.log("Your Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index} - ${task}`);
  });
}

// UNKNOWN COMMAND
else {
  console.log("Invalid command.");
  console.log("Available commands: add, delete, list");
}
