const listElement = document.getElementById("list");
const addButtonElement = document.getElementById("button");
const inputElement = document.getElementById("input");

let tasks = [];
let task;

//clicking on the create button, calls on a function which creates an new item
addButtonElement.addEventListener("click", () => {
  createItem();
});

//generates an item with from the input
function createItem() {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item-div");
  listElement.appendChild(itemElement);

  const textElement = document.createElement("p");
  textElement.classList.add("item-p");
  textElement.innerText = inputElement.value;
  itemElement.appendChild(textElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("item-button");
  itemElement.appendChild(buttonElement);

  //clear the input value
  inputElement.value = "";

  //remove item
  buttonElement.addEventListener("click", () => {
    listElement.removeChild(itemElement);
  });

  //competing a task
  itemElement.addEventListener("click", () => {
    if (textElement.style.textDecoration !== "line-through") {
      textElement.style.textDecoration = "line-through";
      textElement.style.color = "rgb(150,150,150)";
    } else if (textElement.style.textDecoration === "line-through") {
      textElement.style.textDecoration = "none";
      textElement.style.color = "white";
    }
  });
}
