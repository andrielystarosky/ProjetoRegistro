class Report {
    constructor(userRegistry) {
      this.userRegistry = userRegistry;
    }
  
    render() {
      const users = this.userRegistry.getUsers();
      if (users.length === 0) {
        return "<li class='list-group-item'>Nenhum usuário registrado.</li>";
      }
  
      return users.map(user => {
        return `<li class="list-group-item d-flex justify-content-between align-items-center">
                  ${user.name} - ${user.email}
                </li>`;
      }).join('');
    }
  }
  
  
  class ReportDecorator {
    constructor(report) {
      this.report = report;
    }
  
    render() {
      return this.report.render();
    }
  }
  
  class BorderedReportDecorator extends ReportDecorator {
    render() {
      return `<ul class="list-group" style="border: 1px solid #ddd; padding: 10px;">${super.render()}</ul>`;
    }
  }
  
  class HeaderedReportDecorator extends ReportDecorator {
    render() {
      return `<h5 class="mb-3">Relatório de Usuários</h5>${super.render()}`;
    }
  }
  
  export { Report, BorderedReportDecorator, HeaderedReportDecorator };
  