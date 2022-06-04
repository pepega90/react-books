export class User {
  constructor(id, first_name, last_name, email) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }

  get name() {
    return this.first_name + " " + this.last_name;
  }
}
