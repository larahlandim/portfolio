function abrirAbaPeloEndereco() {
  const id = location.hash;
  if (!id) return;
  const botao = document.querySelector('[data-bs-target="' + id + '"]');
  if (botao) {
    bootstrap.Tab.getOrCreateInstance(botao).show();
    window.scrollTo(0, 0);
  }
}
abrirAbaPeloEndereco();
window.addEventListener('hashchange', abrirAbaPeloEndereco);

document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function (botao) {
  botao.addEventListener('shown.bs.tab', function () {
    history.replaceState(null, '', botao.dataset.bsTarget);
  });
});
