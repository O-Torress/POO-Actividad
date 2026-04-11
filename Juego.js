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
    console.log(`Hola, soy el ${this.constructor.name} ${this.nombre} `);
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
    let danoTotal = Math.floor((Math.random() * armaElegida.dano + 1) + this.dano);
    // this.dano + armaElegida.dano;
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
    let danoTotal = Math.floor((Math.random() * armaElegida.dano + 1) + this.dano);
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
    let danoTotal = Math.floor((Math.random() * armaElegida.dano + 1) + this.dano);
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
// nombre, vida, dano, defensa, velocidad, [].
let p1 = new Guerrero("Floqui", 100, 50, 50, 10,   
  [ 
    {nombre : "espada" , dano : 100 },
    {nombre : "cuchilo" , dano : 100 }, 
    {nombre : "lanza" , dano : 100 }
  ]);
let p2 = new Guerrero("Asquelad", 100, 45, 50, 10, 
  [ 
    {nombre : "daga" , dano : 10 },
    {nombre : "mazo" , dano : 20 }, 
    {nombre : "hacha" , dano : 25 }

  ]);
let p3 = new Mago("Mandrake", 110, 60, 35, 6,      
  [ 
    {nombre : "veneno" , dano : 35 }, 
    {nombre : "fuego" , dano : 30 }, 
    {nombre : "hielo" , dano : 20 }

  ]);
let p4 = new Mago("Gandalf", 110, 45, 35, 5,       
  [ 
    {nombre : "Avada Kadabra", dano : 25}, 
    {nombre : "imperio", dano : 30}, 
    {nombre : "crucio", dano : 20}

  ]);
let p5 = new Arquero("Robin", 100, 65, 40, 8,      
  [ 
    {nombre : "Piedra" , dano : 25 }, 
    {nombre : "cobre" , dano : 30 }, 
    {nombre : "hierro" , dano : 35 }

  ]);

let listaP = [p1,p2,p3,p4,p5];


function elegirObjetivo(atacante, listaP) {
  let vivos = listaP.filter(p => p !== atacante && p.vida > 0);
  return vivos[Math.floor(Math.random() * vivos.length)];
}

console.log("\n--- INICIA LA BATALLA ---\n");
listaP.forEach(p => p.saludar());

let ronda = 1;

while (listaP.filter(p => p.vida > 0).length > 1) {
  console.log(`\n========= RONDA ${ronda} =========`);

  listaP.forEach(p => {
    p.turno = Math.floor(Math.random() * p.velocidad) + 1;
  });

  listaP.sort((a, b) => b.turno - a.turno);

  for (let atacante of listaP) {
    if (atacante.vida <= 0) continue;

    let objetivo = elegirObjetivo(atacante, listaP);
    if (!objetivo) continue;

    let prob = Math.random();

    if (prob < 0.33) {
      atacante.atacar(objetivo);
    } else {
      if (atacante instanceof Guerrero) {
        atacante.atacar_con_arma(objetivo);
      } else if (atacante instanceof Mago) {
        atacante.atacar_con_hechizo(objetivo);
      } else if (atacante instanceof Arquero) {
        atacante.disparar_con_flechas(objetivo);
      }
    }
  }

  listaP = listaP.filter(p => p.vida > 0);

  ronda++;
}

console.log(`\n EL GANADOR ES El ${listaP[0].constructor.name} ${listaP[0].nombre} `);