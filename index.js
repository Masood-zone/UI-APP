const input = document.getElementById("input");
const list = document.getElementById("list");
const todoList = [];
let userValue;

function saveInput(event) {
  userValue = event.target.value;
  console.log(userValue);
}

function addTask() {
  const todo = {
    id: Math.floor(Math.random() * 100),
    value: userValue,
  };
  todoList.push(todo);
  list.innerHTML = todoList.map(function (todo) {
    return (
      '<li key={todo.id} class="flex items-center justify-between bg-white rounded-md border-2 border-gray-300 py-1 px-1">' +
      todo.value +
      "</li>"
    );
  });
  input.value = "";
}
