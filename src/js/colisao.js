setInterval(() => {
  colisaoCarne();
  colisaoMoeda();
  colisaoParede();
}, 100);

const paredes = document.getElementsByClassName("parede");
const moedas = document.getElementsByClassName("moeda");
const meats = document.getElementsByClassName("meat");
let pontos = 0;
let fome = 0;

const colisaoParede = () => {
  for (const parede of paredes) {
    if (
      parede.getBoundingClientRect().width !== 0 &&
      parede.getBoundingClientRect().left < personagem.getBoundingClientRect().right &&
      parede.getBoundingClientRect().right > personagem.getBoundingClientRect().left &&
      parede.getBoundingClientRect().top < personagem.getBoundingClientRect().bottom &&
      parede.getBoundingClientRect().bottom > personagem.getBoundingClientRect().top
    ) {
      document.location.reload();
    }
  }
};

const colisaoMoeda = () => {
  for (const moeda of moedas) {
    if (
      moeda.getBoundingClientRect().left < personagem.getBoundingClientRect().right &&
      moeda.getBoundingClientRect().right > personagem.getBoundingClientRect().left &&
      moeda.getBoundingClientRect().top < personagem.getBoundingClientRect().bottom &&
      moeda.getBoundingClientRect().bottom > personagem.getBoundingClientRect().top
    ) {
      document.getElementById("pontuacao").play();
      pontos++;
      document.getElementById("progresso-de-pontos").innerHTML = pontos*10;
      moeda.parentNode.removeChild(moeda);
    }
  }
};
/*
setInterval(() => {
  document.getElementById("progresso-de-pontos").innerHTML = pontos*1;
  pontos++;
}, 1000);
*/

const colisaoCarne = () => {
  for (const meat of meats) {
    if (
      meat.getBoundingClientRect().left < personagem.getBoundingClientRect().right &&
        meat.getBoundingClientRect().right > personagem.getBoundingClientRect().left &&
        meat.getBoundingClientRect().top < personagem.getBoundingClientRect().bottom &&
        meat.getBoundingClientRect().bottom > personagem.getBoundingClientRect().top
    ) {
      document.getElementById("recarga").play();
      if (document.getElementById("fome").value <= 100) {
        document.getElementById("fome").value += 50;
      }
      fome++;
      meat.parentNode.removeChild(meat);
    }
  }
};