// Array para armazenar os usuários registrados
let users = [];

// Função para adicionar um novo usuário
function addUser(name, email) {
    // Cria um objeto de usuário e o adiciona ao array
    users.push({ name, email });
}

// Função para atualizar a lista de usuários na tela
function updateUserList() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = ''; // Limpar a lista antes de adicionar novamente

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Nome: ${user.name}, Email: ${user.email}`;
        userListElement.appendChild(listItem);
    });
}

// Função para gerar o relatório no modal
function generateReport() {
    const reportElement = document.getElementById('report');
    reportElement.innerHTML = ''; // Limpar o conteúdo do relatório antes de gerar

    if (users.length === 0) {
        reportElement.innerHTML = '<p style="color: red;">Nenhum usuário registrado.</p>';
    } else {
        let reportContent = '<ul class="list-group">';
        users.forEach(user => {
            reportContent += `<li class="list-group-item">Nome: ${user.name}, Email: ${user.email}</li>`;
        });
        reportContent += '</ul>';
        reportElement.innerHTML = reportContent;
    }
}

// Lida com o envio do formulário de cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Verifica se ambos os campos são preenchidos antes de adicionar
    if (name && email) {
        // Adiciona o usuário ao array
        addUser(name, email);

        // Atualiza a lista de usuários na tela
        updateUserList();

        // Limpa os campos do formulário
        document.getElementById('registerForm').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Gera o relatório no modal ao abrir
document.getElementById('reportModal').addEventListener('show.bs.modal', function () {
    generateReport();  // Chama a função que gera o relatório
});
