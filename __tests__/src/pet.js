const Pet = require('../src/pet');
function Pet() {}

module.exports = Pet;
function Pet(name) {
    this.name = name;
  }
  function Pet(name) {
    this.name = name;
    this.age = 0;}

      Pet.prototype.growUp = function() {
        this.age += 1;
      };
      const MAXIMUM_FITNESS = 10;
      Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= 10 ) {
          this.fitness += 4;
        } else {
          this.fitness = 10;
        }
      }
      Pet.prototype.isAlive = function() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
      }
      if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }

      const parent = new Pet('Dave');

parent.haveBaby('Amelia');
parent.children // [ Pet { name: 'Amelia', children: [] } ]