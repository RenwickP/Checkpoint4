import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  console.log("working from constructor", store.State.todos);
  let template = "";
  let todo = store.State.todos;
  todo.forEach(td => (template += td.Template));
  document.querySelector("#input").innerHTML = template;
}

function count() {
  let counts = store.State.todos;
  console.log("from count function", counts);
  let newCount = counts.length;
  console.log("from count plus", newCount);
  document.querySelector("#number").innerHTML = newCount.toString();
}

export default class TodoController {
  // striker() {
  //   console.log("button working");
  //

  constructor() {
    //TODO Remember to register your subscribers
    // console.log("Does this even work?????");

    store.subscribe("todos", _drawTodos);
    store.subscribe("todos", count);

    TodoService.getTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.name.value
      //TODO build the todo object from the data that comes into this method
    };
    console.log("Comptroller!", todo);
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    // console.log("working", todoId);
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
