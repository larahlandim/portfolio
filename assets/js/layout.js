const NOME = 'Larah Landim';

const topo = document.getElementById('topo');
topo.className = 'sticky-top';
topo.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">${NOME}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Conhecimento</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="conhecimento.html#humanas">Ciências Humanas</a></li>
            <li><a class="dropdown-item" href="conhecimento.html#natureza">Ciências da Natureza</a></li>
            <li><a class="dropdown-item" href="conhecimento.html#matematica">Matemática</a></li>
            <li><a class="dropdown-item" href="conhecimento.html#linguagens">Linguagens</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Percurso Técnico</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="percursotecnico.html#ciberseguranca">Hardware e Software</a></li>
            <li><a class="dropdown-item" href="percursotecnico.html#blockchain">Redes</a></li>
            <li><a class="dropdown-item" href="percursotecnico.html#automacao">Linguagem de Programação</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="projetos.html">Projeto</a></li>
        <li class="nav-item"><a class="nav-link" href="contato.html">Contato</a></li>
      </ul>
    </div>
  </div>
</nav>`;

document.getElementById('rodape').innerHTML = `
<footer class="bg-dark text-white text-center py-3 mt-5">
  <span id="acesso-admin">©</span> 2026 ${NOME}
</footer>`;
