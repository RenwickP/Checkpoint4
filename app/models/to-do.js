export default class Todos {
  constructor(data) {
    this.description = data.description;
    this.id = data._id;
  }

  get Template() {
    return `
    <p class="csstodo">${this.description}<br><button onclick="app.todoController.removeTodo('${this.id}')">Done</button></p>
    
    
    `;
  }
}

{
  /* <button onclick="app.todoController.toggleTodoStatus('${this.id}')">StrikeThrough</button> */
}
