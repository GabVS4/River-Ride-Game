const decaimentoDaFome = () => {
  if (document.getElementById("fome").value <= 0) {
    document.location.reload();
  }
  document.getElementById("fome").value -= 3;
};

setInterval(() => {
  decaimentoDaFome();
}, 1000);
