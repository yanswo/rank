rank();

function rank() {
  let vitorias = 90;
  let derrotas = 56;
  const saldo = vitorias - derrotas;
  let nivel;

  if (vitorias <= 9) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  console.log(
    `O heroi está com o saldo de ${saldo} e está no nivel de ${nivel}`
  );
}
