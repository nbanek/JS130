class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  info() {
    return `${this.name} is a ${this.breed} dog.`
  }

  bark() {
    return "woof"
  }

  getOwner() {
    if(!this.owner) {
      throw new Error('No owner found');
    } else {
      return `${this.owner}`;
    }
  }
}

function hello() {
  return 'Hello'
}

module.exports = {Dog, hello};