class Personaje {
  constructor(nombre,vida,dano,defensa,velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.dano = dano;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar() {
    console.log(
    `${this.nombre} esta atacando con los puños`
    );
  }

  saludar() {
    console.log(
    `Hola soy ${this.nombre} de la clase Personaje`
    );
  }
}

class Guerrero extends Personaje {
  constructor(nombre,vida,dano,defensa,velocidad,array_armas) {
    super (nombre,vida,dano,defensa,velocidad);
    this.array_armas = array_armas ;
    let armas = ["hacha", "espada", "lanza"];
    array_armas = armas[Math.floor(Math.random() * 3)];
  }

  saludar() {
    console.log(
    `Hola soy ${this.nombre} de la clase Guerrero`
    );
  }

  atacar_con_arma() {
    console.log(
      `El guerrero ${this.nombre} esta atacando con el arma ${this.array_armas}`
    );
  }

}

