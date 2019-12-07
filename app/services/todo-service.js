import store from "../store.js";
import Todos from "../models/to-do.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Pete/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    // console.log("Getting the Todo List");
    let res = await todoApi.get();

    let todo = res.data.data.map(td => new Todos(td));

    store.commit("todos", todo);
    console.log(
      "from getter service look at me so I stand out and you can see me form the console!",
      todo
    );
    //TODO Handle this response from the server
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    console.log("Service-Do", res.data.data.description);
    store.commit("todos", todo);
    console.log("store", store.State.todos);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    // let remove = store.State.todos.find(rl => rl.id == todoId);
    // console.log("hello", remove);
    await todoApi.delete(`/${todoId}`);
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
