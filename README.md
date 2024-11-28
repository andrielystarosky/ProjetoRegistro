# Sistema de Registro de Usuários
> @Andriely e @Wilson

Sistema de registro de usuários, implementado com HTML, CSS, JavaScript e Bootstrap. O objetivo principal é registrar usuários e gerar relatórios dinâmicos sobre esses registros.

## Tecnologias Utilizadas

- HTML5: Estrutura básica da página e formulários.
- CSS3: Estilização visual do layout e do modal.
- JavaScript: Lógica de manipulação dos dados de usuários e exibição dinâmica no modal.
- Bootstrap: Framework front-end para criação de interfaces modernas e responsivas.

## Funcionalidades

- Cadastro de Usuários: O usuário pode preencher um formulário com nome e e-mail para registrar novos usuários.
- Lista de Usuários: Após o registro, os usuários são listados abaixo do formulário de cadastro.
- Relatório de Usuários: Um botão permite visualizar um relatório de todos os usuários registrados em um modal. Caso não haja registros, será exibida uma mensagem de erro.

## Estrutura do Projeto

index.html: Arquivo principal que contém a estrutura HTML da página.
style.css: Arquivo CSS que define o estilo da página e do modal.
script.js: Arquivo JavaScript que contém a lógica de registro de usuários, atualização da lista e geração de relatório.

## Como Executar o Projeto

1. Baixar os Arquivos
Clone ou faça o download dos arquivos do repositório:

```bash
git clone https://github.com/andrielystarosky/SistemaRegistroUsuarios.git
```

2. Abrir o Arquivo HTML
Abra o arquivo index.html em seu navegador. Não é necessário instalar nenhum servidor para executar o projeto, pois ele usa apenas tecnologias front-end.

3. Testar a Funcionalidade

Cadastro de Usuários:

Preencha os campos "Nome" e "E-mail" e clique em "Registrar".
O usuário será adicionado à lista abaixo do formulário.
Gerar Relatório:

Clique no botão "Ver Relatório".
O relatório será exibido em um modal contendo todos os usuários registrados. Caso não haja nenhum registro, será exibida uma mensagem de erro.

---

### Uso do Design Patterns
> Padrão Singleton e o Padrão Decorator.

1. Padrão Singleton
O Padrão Singleton é utilizado para garantir que uma classe tenha apenas uma única instância durante a execução do sistema e forneça um ponto global de acesso a essa instância.

- Aplicação no Projeto
Aplicado na classe UserRegistry (presumivelmente no arquivo userRegistry.js). Esta classe é responsável por manter o controle de todos os usuários registrados no sistema.

2. Padrão Decorator
O Padrão Decorator é utilizado para adicionar funcionalidades a objetos de maneira dinâmica, sem alterar sua estrutura interna. Ele permite que novos comportamentos sejam adicionados aos objetos sem modificar suas classes originais.

- Aplicação no Projeto
Aplicado no processo de geração do relatório de usuários, na classe Report, sendo responsável por gerar uma lista simples de usuários, enquanto as classes BorderedReportDecorator e HeaderedReportDecorator adicionam funcionalidades adicionais ao relatório, como a inclusão de bordas e cabeçalhos, sem alterar o comportamento original do relatório.

