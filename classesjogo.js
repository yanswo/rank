class hero {
  constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;
  }
  atacar() {
    let ataque;

    switch (this.tipoHeroi) {
      case "Mago":
        ataque = "usando magia";
        break;
      case "Guerreiro":
        ataque = "usando espada";
        break;
      case "Monge":
        ataque = "usando artes marciais";
        break;
      case "Ninja":
        ataque = "usando shuriken";
    }
    console.log(
      `O heroi de nome ${this.nomeHeroi} de ${this.idadeHeroi} anos de idade, ele é um ${this.tipoHeroi} e atacou ${ataque}`
    );
  }
}

let heroi = new hero("Yan", 21, "Ninja");

heroi.atacar();
