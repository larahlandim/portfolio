# Portfólio Web Dinâmico – Larah Landim
Atividade Final do 4º Bimestre – Canes Solution (Desenvolvedor Frontend)

## Links
- Site: https://SEU-USUARIO.github.io/portfolio
- Repositório: https://github.com/SEU-USUARIO/portfolio

## Tecnologias
HTML5, CSS3, JavaScript, Bootstrap 5.3, LocalStorage e EmailJS.
Nenhum construtor de sites foi usado. Todo o código foi escrito do zero.

## Estrutura de pastas
```
portfolio/
├── index.html          Apresentação pessoal
├── conhecimento.html   4 áreas do conhecimento (em abas)
├── tendencias.html     4 tendências tecnológicas (em abas)
├── projetos.html       Galeria de projetos
├── contato.html        Formulário de contato
├── admin.html          Painel administrativo oculto (CRUD)
├── README.md
└── assets/
    ├── css/style.css
    ├── js/layout.js    Menu e rodapé
    ├── js/storage.js   LocalStorage + 20 registros de teste + CRUD
    ├── js/abas.js      Abre a aba certa pelo menu
    ├── js/contato.js   Formulário + EmailJS
    ├── js/admin.js     Painel administrativo
    └── img/
```

## Por que escolhi o EmailJS
O EmailJS envia e-mails direto pelo JavaScript do navegador, sem servidor
e sem banco de dados, respeitando a regra da atividade. É gratuito, fácil
de configurar e usa só uma chave pública no código.
Alternativas avaliadas: Formspree e Make/Zapier.

## Como acessar a área administrativa oculta (CRUD)
1. Em qualquer página, clique 3 vezes rápido no © do rodapé (ou acesse /admin.html).
2. PIN: canes2026
3. Criar: "+ Nova mensagem" | Ler: tabela | Atualizar: "Editar" | Deletar: "Excluir"

Obs.: o PIN é só uma barreira de demonstração, porque fica no JavaScript.

## Armazenamento
Mensagens salvas em JSON no LocalStorage (chave `canes_mensagens`).
No primeiro acesso, se estiver vazio, 20 registros de teste são criados automaticamente.
Para recriar: F12 → Application → Local Storage → apagar `canes_mensagens` → F5.

## Como rodar localmente
Pasta em C:\xampp\htdocs\portfolio → Start no Apache → http://localhost/portfolio
