const listElement = document.getElementById("list");
const addButtonElement = document.getElementById("button");
const inputElement = document.getElementById("input");

function loadHandler() {
  //clicking on the create button, calls on a function which creates an new item
  addButtonElement.addEventListener("click", () => {
    if (inputElement.value.length > 0) {
      createItem();
    }
  });
}

//generates an item with from the input
function createItem() {
  //outerdiv
  const itemElement = document.createElement("div");
  itemElement.classList.add("item-div");
  listElement.appendChild(itemElement);
  //text
  const textElement = document.createElement("p");
  textElement.classList.add("item-p");
  textElement.innerText = inputElement.value;
  itemElement.appendChild(textElement);
  //button
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
      textElement.style.color = "rgb(200,200,200)";
    } else if (textElement.style.textDecoration === "line-through") {
      textElement.style.textDecoration = "none";
      textElement.style.color = "white";
    }
  });

  // check number of items in listElement is more then 2, changing background
  function checkListLength() {
    const items = document.querySelectorAll(".item-div");
    const backgroundElement = document.querySelector("body");
    let transitionBackground = (backgroundElement.style.transition = "1.2s");
    let coverBackground = (backgroundElement.style.backgroundSize = "cover");

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

  checkListLength();
}
window.addEventListener("load", loadHandler);
