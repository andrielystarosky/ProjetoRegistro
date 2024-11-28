import userRegistry from './userRegistry.js';
import { BorderedReportDecorator, HeaderedReportDecorator, Report } from './report.js';

// Função para renderizar a lista de usuários na tela
function renderUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";  // Limpar a lista antes de re-renderizar

  const users = userRegistry.getUsers();
  users.forEach((user) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

// Função para renderizar o relatório com os decoradores aplicados
function renderReport() {
    const reportList = document.getElementById("reportList"); // Elemento onde a lista de usuários será exibida
    reportList.innerHTML = ""; // Limpar lista antes de renderizar
  
    const report = new Report(userRegistry);
    
    // Aplicando os decoradores
    let decoratedReport = new HeaderedReportDecorator(report);
    decoratedReport = new BorderedReportDecorator(decoratedReport);
  
    // Agora renderiza o relatório e coloca no modal
    reportList.innerHTML = decoratedReport.render();  // Exibindo o relatório no modal
  
    // Abrir o modal após o conteúdo ser carregado
    const modal = new bootstrap.Modal(document.getElementById('reportModal'));
    modal.show();
  }

// Adicionando um novo usuário
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    userRegistry.addUser(name, email);  // Registrando o usuário na instância Singleton
    renderUserList();  // Re-renderizando a lista de usuários
    e.target.reset(); // Limpar o formulário após o cadastro
  }
});

// Evento de exibição do relatório no modal
document.getElementById("reportButton").addEventListener("click", renderReport);
