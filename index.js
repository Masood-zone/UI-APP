const input = document.getElementById('input');
const list = document.getElementById('list');
const todoList = [];
let value;

function saveInput(event) {
  value = event.target.value
  console.log(value)
}

function addTask() {
  const todo = { id: todoList.length = 0 ? 1 : (todoList.length - 1) + 1, value: value }
  todoList.push(todo)
  list.innerHTML = todoList.map(function (todo) {
    return '<li key={todo.id} class="flex items-center justify-between bg-white rounded-md border-2 border-gray-300 p-1">' + todo.value + '</li>';
  })
  input.value = "";
}