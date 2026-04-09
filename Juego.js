class Personaje { //Clase Padre
  constructor(nombre, vida, dano, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }
//Metdos
  atacar() {
    console.log(`${this.nombre} esta atacando con los puños`);
  }

  saludar() {
    console.log(`Hola soy el ${this.constructor.name} ${this.nombre} `);
  }
}
//Guerrero
class Guerrero extends Personaje {  
  constructor(nombre, vida, dano, defensa, velocidad, array_de_armas) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_armas = array_de_armas;
  }

  atacar_con_arma(objetivo) {
    let armaAleatoria = this.array_de_armas [Math.floor(Math.random()*3)];
    
    if (armaAleatoria === "espada" || armaAleatoria === "lanza" ) {
      console.log(
        `El guerrero ${this.nombre} esta atacando a ${objetivo.nombre} con la ${armaAleatoria}`);
    }else {
      console.log(
      `El guerrero ${this.nombre} esta atacando a ${objetivo.nombre} con el ${armaAleatoria}`);
    }


    
  }
}
//Mago
class Mago extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_hechizos) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_hechizos = array_de_hechizos;
  }

  atacar_con_hechizo(objetivo) {
    this.array_de_hechizos = this.array_de_hechizos [Math.floor(Math.random()*3)];
    console.log(
      `El Mago ${this.nombre} esta atacando a ${objetivo.nombre} con el hechizo de ${this.array_de_hechizos}`);
  }
}
//Arquero
class Arquero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_flechas) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_flechas = array_de_flechas;
  }

  disparar_con_flechas(objetivo) {
    this.array_de_flechas = this.array_de_flechas [Math.floor(Math.random()*3)];
    console.log(
      `El Arquero ${this.nombre} esta atacando a ${objetivo.nombre} con las flechas echas de ${this.array_de_flechas}`);
  }
}

let personaje1 = new Guerrero("Floqui", 100, 50, 50, 10,   [ "espada", "cuchillo", "lanza"]);
let personaje2 = new Guerrero("Asquelad", 100, 45, 35, 10, [ "daga", "mazo", "hacha"]);
let personaje3 = new Mago("Mandrake", 150, 60, 35, 6,      [ "veneno", "fuego", "hielo"]);
let personaje4 = new Mago("Gandalf", 160, 45, 35, 5,       [ "Avada Kadabra", "imperio", "crucio"]);
let personaje5 = new Arquero("Robin", 100, 65, 40, 8,      [ "Piedra", "cobre", "metal"]);

const Listapersonajes = [personaje1,personaje2,personaje3,personaje4,personaje5];

Listapersonajes.forEach(p => p.saludar());

personaje1.atacar_con_arma(personaje2);
/*
while (Listapersonajes.length > 1) {
  console.log("Ronda 1");
}
*/