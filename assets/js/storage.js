const CHAVE = 'canes_mensagens';

function lerMensagens() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}
function salvarMensagens(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}
function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Se estiver vazio, cria 20 mensagens de teste
function semearDadosIniciais() {
  const atual = localStorage.getItem(CHAVE);
  if (atual !== null && JSON.parse(atual).length > 0) return;

  const nomes = ['Ana Souza','Bruno Lima','Carla Dias','Diego Rocha','Eduarda Melo',
    'Felipe Alves','Gabriela Reis','Henrique Costa','Isabela Nunes','João Pedro',
    'Karina Lopes','Lucas Martins','Mariana Silva','Nicolas Prado','Olivia Castro',
    'Paulo Ribeiro','Queila Fernandes','Rafael Gomes','Sabrina Teixeira','Tiago Barros'];
  const assuntos = ['Proposta de projeto','Dúvida técnica','Parceria','Feedback','Vaga de emprego'];

  salvarMensagens(nomes.map((nome, i) => ({
    id: 'seed-' + (i + 1),
    nome: nome,
    email: nome.toLowerCase().split(' ')[0] + '@teste.com',
    assunto: assuntos[i % assuntos.length],
    mensagem: 'Mensagem de teste nº ' + (i + 1) + ' para validação do CRUD.',
    data: new Date(Date.now() - i * 86400000).toISOString()
  })));
}

function criarMensagem(dados) {
  const lista = lerMensagens();
  lista.unshift({ id: gerarId(), ...dados, data: new Date().toISOString() });
  salvarMensagens(lista);
}
function atualizarMensagem(id, novos) {
  salvarMensagens(lerMensagens().map(m => m.id === id ? { ...m, ...novos } : m));
}
function excluirMensagem(id) {
  salvarMensagens(lerMensagens().filter(m => m.id !== id));
}

semearDadosIniciais();

// Porta secreta: 3 cliques no © do rodapé abrem o admin
let cliques = 0;
const porta = document.getElementById('acesso-admin');
if (porta) {
  porta.addEventListener('click', () => {
    cliques++;
    if (cliques === 3) location.href = 'admin.html';
    setTimeout(() => cliques = 0, 1500);
  });
}
