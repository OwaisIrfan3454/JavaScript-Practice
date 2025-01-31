let inputElem = document.getElementById("inputField");
// console.log (inputElem);

let clickBtn = document.querySelector(".btn");
// console.log(clickBtn);

let todoElem = document.querySelector(".todoListsElem");

const addTodo = () => {
    // console.log (inputElem.value);
    let pElem = document.createElement("p");
    pElem.textContent = inputElem.value;
    console.log (pElem);
    todoElem.append (pElem);

    inputElem.value = "";
}

clickBtn.addEventListener("click", () => {
    addTodo();
});

todoElem.addEventListener("click", (event) => {
    console.log (event.target);
    let currentElem = event.target;
    currentElem.remove();
})