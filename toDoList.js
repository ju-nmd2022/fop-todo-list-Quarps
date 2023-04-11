//Created a epic working to-do-list, I used https://github.com/ju-nmd2022/fop-todo-list-orneskog as a sources of inspiration when I worked with localstorage.
// Define global variables
const listElement = document.getElementById("list");
const addButtonElement = document.getElementById("button");
const inputElement = document.getElementById("input");

let tasks = [];
let tasksJSON;

function loadHandler() {
  // Attach event listener to the 'Create' button
  addButtonElement.addEventListener("click", () => {
    // If input field is not empty, call createItem(), saveTask(), and checkListLength() functions
    if (inputElement.value.length > 0) {
      createItem();
      saveTask();
      checkListLength();
    }
  });
  if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks); // Load the list of tasks from local storage.
    taskLoop(); // Display the list of tasks on the page.
  }
}

function createItem() {
  // Only adding to tasks array if we have a value in inputElement
  if (inputElement !== "") {
    let task = { text: inputElement.value };
    tasks.push(task);
    taskLoop();
    saveTask();
  }
}

// Function to save tasks in local storage
function saveTask() {
  // Convert tasks array to JSON string
  const tasksJSON = JSON.stringify(tasks);
  // Store tasks JSON string in local storage with key "tasks"
  localStorage.setItem("tasks", tasksJSON);
}

function taskLoop() {
  // Clear the existing list of tasks.
  listElement.innerHTML = "";

  // Loop through each task in the tasks array.
  for (let task of tasks) {
    // Create a new item div element for the task.
    const itemElement = document.createElement("div");
    itemElement.classList.add("item-div");
    listElement.appendChild(itemElement);

    // Create a new paragraph element to display the task text.
    const textElement = document.createElement("p");
    textElement.classList.add("item-p");
    textElement.innerText = task.text;
    itemElement.appendChild(textElement);

    // If the task is completed, add line-through text decoration and gray color.
    if (task.completed) {
      textElement.style.textDecoration = "line-through";
      textElement.style.color = "rgb(200,200,200)";
    }

    // Create a new button element to allow the user to delete the task.
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("item-button");
    itemElement.appendChild(buttonElement);

    // Add an event listener for when the user clicks on the task item.
    itemElement.addEventListener("click", () => {
      // This code block is executed when the user clicks on an item in the list.
      textElement.style.textDecoration = "line-through";
      textElement.style.color = "rgb(200,200,200)";
      task.completed = true;
      saveTask(); // Save the updated task list to local storage.
    });

    // Get the index of the task in the tasks array.
    const taskIndex = tasks.indexOf(task);

    // Add an event listener for when the user clicks on the delete button for the task.
    buttonElement.addEventListener("click", () => {
      // This code block is executed when the user clicks on the delete button for a task.
      tasks.splice(taskIndex, 1); // Remove the task from the array.
      taskLoop(); // Update the list of tasks displayed on the page.
      saveTask(); // Save the updated task list to local storage.
    });
  }
}

function checkListLength() {
  // Selects all the list items and stores them in the items variable
  const items = document.querySelectorAll(".item-div");

  // Selects the background element and sets transition and cover values
  const backgroundElement = document.querySelector("body");
  let transitionBackground = (backgroundElement.style.transition = "0.6s");
  let coverBackground = (backgroundElement.style.backgroundSize = "cover");

  // Changes the background image based on the number of list items
  if (items.length === 1) {
    backgroundElement.style.backgroundImage = "url('img/flowers.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 2) {
    backgroundElement.style.backgroundImage = "url('img/sand.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 3) {
    backgroundElement.style.backgroundImage = "url('img/beach.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 4) {
    backgroundElement.style.backgroundImage = "url('img/nature.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 5) {
    backgroundElement.style.backgroundImage = "url('img/love.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 6) {
    backgroundElement.style.backgroundImage = "url('img/ballon.jpeg')";
    coverBackground;
    transitionBackground;
  } else if (items.length === 7) {
    backgroundElement.style.backgroundImage = "url('img/winter.jpeg')";
    coverBackground;
    transitionBackground;
  } else {
    backgroundElement.style.backgroundImage = "url('img/canada.jpeg')";
    coverBackground;
    transitionBackground;
  }
}

// Attaches an event listener to that listens for the 'load' event and executes the loadHandler function.
window.addEventListener("load", loadHandler);
