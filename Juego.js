class Personaje {
  constructor(nombre, vida, dano, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar() {
    console.log(`${this.nombre} esta atacando con los puños`);
  }

  saludar() {
    console.log(`Hola soy ${this.nombre} de la ${this.constructor.name}`);
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_armas) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_armas = array_de_armas;
  }

  atacar_con_arma() {
    console.log(
      `El guerrero ${this.nombre} esta atacando con el arma ${this.array_de_armas}`,
    );
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_hechizos) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_hechizos = array_de_hechizos;
  }

  atacar_con_hechizo() {
    console.log(
      `El Mago ${this.nombre} esta atacando con el arma ${this.array_de_hechizos}`,
    );
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_flechas) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_flechas = array_de_flechas;
  }

  disparar_con_flechas() {
    console.log(
      `El Arquero ${this.nombre} esta atacando con la flecha ${this.array_de_flechas}`,
    );
  }
}

let personaje1 = new Guerrero("Floqui", "100", "50", "50", "60", [
  "espada",
  "cuchillo",
  "lanza",
]);
let personaje2 = new Guerrero("Asquelad", "100", "45", "35", "80", [
  "daga",
  "mazo",
  "hacha",
]);
let personaje3 = new Mago("Mandrake", "150", "60", "35", "80", [
  "veneno",
  "fuego",
  "hielo",
]);
let personaje4 = new Mago("Gandalf", "160", "45", "35", "80", [
  "Avada Kadabra",
  "imperio",
  "crucio",
]);
let personaje5 = new Arquero("Robin", "100", "65", "40", "100", [
  "Piedra",
  "cobre",
  "metal",
]);

personaje1.saludar();
personaje2.saludar();
personaje4.saludar();
