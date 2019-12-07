export default class Todos {
  constructor(data) {
    this.description = data.description;
    this.id = data._id;
  }

  get Template() {
    return `
    <p>${this.description}</p>
    `;
  }
}
