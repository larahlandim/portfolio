// ===== PIN =====
const PIN = 'canes2026';
function liberarPainel() {
  document.getElementById('tela-pin').classList.add('d-none');
  document.getElementById('painel').classList.remove('d-none');
}
if (sessionStorage.getItem('admin-ok') === 'sim') liberarPainel();

document.getElementById('form-pin').addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('pin').value === PIN) {
    sessionStorage.setItem('admin-ok', 'sim');
    liberarPainel();
  } else {
    alert('PIN errado!');
  }
});

// ===== CRUD =====
const modal = new bootstrap.Modal('#modal-msg');
const esc = t => String(t).replace(/[&<>"']/g, c =>
  ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const campos = ['nome', 'email', 'assunto', 'mensagem'];

function renderizar() {
  const lista = lerMensagens();
  document.getElementById('total').textContent = lista.length;
  document.getElementById('tabela-mensagens').innerHTML = lista.map(m => `
    <tr>
      <td>${esc(m.nome)}</td><td>${esc(m.email)}</td><td>${esc(m.assunto)}</td>
      <td>${new Date(m.data).toLocaleDateString('pt-BR')}</td>
      <td>
        <button class="btn btn-sm btn-warning" data-acao="editar" data-id="${m.id}">Editar</button>
        <button class="btn btn-sm btn-danger" data-acao="excluir" data-id="${m.id}">Excluir</button>
      </td>
    </tr>`).join('');
}

document.getElementById('tabela-mensagens').addEventListener('click', (e) => {
  const { acao, id } = e.target.dataset;
  if (acao === 'excluir' && confirm('Excluir esta mensagem?')) {
    excluirMensagem(id);
    renderizar();
  }
  if (acao === 'editar') {
    const m = lerMensagens().find(x => x.id === id);
    document.getElementById('edit-id').value = m.id;
    campos.forEach(c => document.getElementById('edit-' + c).value = m[c]);
    modal.show();
  }
});

document.getElementById('btn-nova').addEventListener('click', () => {
  document.getElementById('form-modal').reset();
  document.getElementById('edit-id').value = '';
  modal.show();
});

document.getElementById('form-modal').addEventListener('submit', (e) => {
  e.preventDefault();
  const dados = {};
  campos.forEach(c => dados[c] = document.getElementById('edit-' + c).value.trim());
  const id = document.getElementById('edit-id').value;
  id ? atualizarMensagem(id, dados) : criarMensagem(dados);
  modal.hide();
  renderizar();
});

renderizar();
