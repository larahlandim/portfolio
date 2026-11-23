emailjs.init({ publicKey: 'nzXi2DJtdhEZp34z-' });

const form = document.getElementById('form-contato');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

  const dados = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    assunto: document.getElementById('assunto').value.trim(),
    mensagem: document.getElementById('mensagem').value.trim()
  };

  criarMensagem(dados); // guarda no LocalStorage

  try {
    await emailjs.send('service_fj4k4oy', 'template_sh1rgsu', dados); // manda o e-mail
    alerta.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso!</div>';
  } catch (erro) {
    console.error(erro);
    alerta.innerHTML = '<div class="alert alert-warning">Mensagem salva, mas o e-mail falhou.</div>';
  }

  form.reset();
  form.classList.remove('was-validated');
});
