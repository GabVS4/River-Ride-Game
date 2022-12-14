const janelasMoedas = document.getElementById("Moedas");
const janelaCarnes = document.getElementById("Carnes");

const gerarNumeroAleatorio = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const gerarCoordenada = () => {
  var coordenada = new Object();

  coordenada.right = gerarNumeroAleatorio(0, 100);
  coordenada.bottom = gerarNumeroAleatorio(0, 100);
  coordenada.left = gerarNumeroAleatorio(0, 100);
  coordenada.top = gerarNumeroAleatorio(0, 100);

  return coordenada;
};

const criarItem = elemento => {
  const item = novoElemento("div", `${elemento}`);
  const coordenada = gerarCoordenada();
  item.style.left = `${coordenada.left}%`;
  item.style.top = `${coordenada.top}%`;
  item.style.right = `${coordenada.right}%`;
  item.style.bottom = `${coordenada.bottom}%`;
  return item;
};

const grupoDeItens = (conjunto, elemento) => {
  const grupoItens = novoElemento("div", `animacao ${conjunto}`);
  const quantidade = gerarNumeroAleatorio(0, 5);
  for (let i = 0; i < quantidade; i++) {
    const item = criarItem(`${elemento}`);
    grupoItens.appendChild(item);
  }
  return grupoItens;
};

const apagarItens = tela => {
  setTimeout(() => {
    tela.removeChild(tela.lastChild);
  }, 10000);
};

const mostrarItens = async (conjuntoAtual, tela) => {
  const valor = tela.insertBefore(conjuntoAtual, tela.children[0]);
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(valor);
    }, 10000);
  });
};

const spawmarMoeda = async () => {
  while (true) {
    const conjunto = grupoDeItens("moedas", "moeda");
    await mostrarItens(conjunto, janelasMoedas);
    apagarItens(janelasMoedas);
  }
};

const spawnarCarne = async () => {
  while (true) {
    const conjunto = grupoDeItens("meats", "meat");
    await mostrarItens(conjunto, janelaCarnes);
    apagarItens(janelaCarnes);
  }
};

spawmarMoeda();
spawnarCarne();
