const axios = require("axios");
const inquirer = require("inquirer");

// Task list array
let tasks = [];

// Function to get the weather for a city
async function getWeather(city) {
  try {
    const apiKey = "b1b1ba563e5ffcaae203071b76560412";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    console.log(url); // Replace with your OpenWeather API key
    const response = await axios.get(url);
    console.log(
      `The weather in ${city} is ${response.data.weather[0].description} with a temperature of ${response.data.main.temp}°C.`
    );
  } catch (error) {
    console.error(
      "Error fetching weather data. Please check the city name." + error
    );
  }
}

// Function to manage tasks
function manageTasks() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add Task", "View Tasks", "Delete Task", "Exit"],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Add Task":
          inquirer
            .prompt([
              {
                type: "input",
                name: "task",
                message: "Enter the task:",
              },
            ])
            .then((response) => {
              tasks.push(response.task);
              console.log("Task added!");
              manageTasks();
            });
          break;
        case "View Tasks":
          console.log(
            "Your Tasks:",
            tasks.length ? tasks : "No tasks available."
          );
          manageTasks();
          break;
        case "Delete Task":
          if (tasks.length === 0) {
            console.log("No tasks to delete.");
            manageTasks();
          } else {
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "taskToDelete",
                  message: "Select a task to delete:",
                  choices: tasks,
                },
              ])
              .then((response) => {
                tasks = tasks.filter((task) => task !== response.taskToDelete);
                console.log("Task deleted!");
                manageTasks();
              });
          }
          break;
        case "Exit":
          console.log("Goodbye!");
          break;
      }
    });
}

// Main menu
function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Get Weather", "Manage Tasks", "Exit"],
      },
    ])
    .then((answers) => {
      if (answers.choice === "Get Weather") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "city",
              message: "Enter the city name:",
            },
          ])
          .then((response) => {
            getWeather(response.city).then(() => main());
          });
      } else if (answers.choice === "Manage Tasks") {
        manageTasks();
      } else {
        console.log("Goodbye!");
      }
    });
}

// Start the application
main();
