class Personaje { //Clase Padre
  constructor(nombre, vida, dano, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }
//Metdos
  atacar(objetivo) {
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
    const armaElegida = this.array_de_armas[Math.floor(Math.random() * this.array_de_armas.length)];
    let danoTotal = this.dano + armaElegida.dano;
    console.log(
      `El guerrero ${this.nombre} esta atacando a ${objetivo.nombre} con ${armaElegida.nombre} y le hizo ${danoTotal} puntos de daño.`);
    
    let dano = danoTotal - objetivo.defensa > 0 ? danoTotal - objetivo.defensa : 0;

    objetivo.vida -= dano;
    
    console.log(`${objetivo.nombre} recibe ${dano} de daño, su vida ahora es ${objetivo.vida}.`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha sido derrotado por ${this.nombre}`);
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
    const armaElegida = this.array_de_hechizos[Math.floor(Math.random() * this.array_de_hechizos.length)];
    let danoTotal = this.dano + armaElegida.dano;
    console.log(
      `El Mago ${this.nombre} esta atacando a ${objetivo.nombre} con el hechizo de ${armaElegida.nombre} y le hizo ${danoTotal} puntos de daño`);

    let dano = danoTotal - objetivo.defensa > 0 ? danoTotal - objetivo.defensa : 0;

    objetivo.vida -= dano;
    
    console.log(`${objetivo.nombre} recibe ${dano} de daño, su vida ahora es ${objetivo.vida}.`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha sido derrotado por ${this.nombre}`);
    }
  }
}
//Arquero
class Arquero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, array_de_flechas) {
    super(nombre, vida, dano, defensa, velocidad);
    this.array_de_flechas = array_de_flechas;
  }

  disparar_con_flechas(objetivo) {
    const armaElegida = this.array_de_flechas[Math.floor(Math.random() * this.array_de_flechas.length)];
    let danoTotal = this.dano + armaElegida.dano;
    console.log(
      `El Arquero ${this.nombre} esta atacando a ${objetivo.nombre} con las flechas echas de ${armaElegida.nombre} y le hizo ${danoTotal} puntos de daño`);
    
    let dano = danoTotal - objetivo.defensa > 0 ? danoTotal - objetivo.defensa : 0;

    objetivo.vida -= dano;
    
    console.log(`${objetivo.nombre} recibe ${dano} de daño, su vida ahora es ${objetivo.vida}.`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha sido derrotado por ${this.nombre}`);
    }
  }
}

let personaje1 = new Guerrero("Floqui", 100, 50, 50, 10,   
  [ 
    {nombre : "espada" , dano : 25 }, 
    {nombre : "cuchilo" , dano : 20 }, 
    {nombre : "lanza" , dano : 15 }
  ]);
let personaje2 = new Guerrero("Asquelad", 100, 45, 35, 10, 
  [ 
    {nombre : "daga" , dano : 10 },
    {nombre : "mazo" , dano : 20 }, 
    {nombre : "hacha" , dano : 25 }

  ]);
let personaje3 = new Mago("Mandrake", 110, 60, 35, 6,      
  [ 
    {nombre : "veneno" , dano : 35 }, 
    {nombre : "fuego" , dano : 30 }, 
    {nombre : "hielo" , dano : 20 }

  ]);
let personaje4 = new Mago("Gandalf", 110, 45, 35, 5,       
  [ 
    {nombre : "Avada Kadabra", dano : 25}, 
    {nombre : "imperio", dano : 30}, 
    {nombre : "crucio", dano : 20}

  ]);
let personaje5 = new Arquero("Robin", 100, 65, 40, 8,      
  [ 
    {nombre : "Piedra" , dano : 25 }, 
    {nombre : "cobre" , dano : 30 }, 
    {nombre : "hierro" , dano : 35 }

  ]);

const listaPersonajes = [personaje1,personaje2,personaje3,personaje4,personaje5];