# Projeto de Registro com Design Patterns (Singleton e Decorator)

Este projeto demonstra o uso de dois padrões de design: Singleton e Decorator, para implementar um sistema de geração de relatórios em PHP.
> Andriely e Wilson

## Funcionalidades

- **Singleton**: Garante que apenas uma instância do relatório seja criada.
- **Decorator**: Permite adicionar comportamentos ao relatório de forma flexível, como cabeçalho, cor e borda.

## Estrutura de Arquivos

- `src/RelatorioBase.php`: Classe Singleton que gerencia a instância do relatório.
- `src/RelatorioDecorator.php`: Classe base para os decoradores.
- `src/CabecalhoDecorator.php`: Adiciona um cabeçalho ao relatório.
- `src/CorDecorator.php`: Adiciona uma cor ao relatório.
- `src/BordaDecorator.php`: Adiciona uma borda ao relatório.

## Como Usar

1. Clone o repositório:

```bash
   git clone https://github.com/andrielystarosky/ProjetoRegistro.git
```
Navegue até o diretório do projeto:
```bash
cd ProjetoRegistro
```
Execute o script PHP para gerar o relatório decorado:
```bash
php test.php
```
Exemplo de Saída
Borda: [Cor: [Azul] *** Relatório de Teste *** Relatório de Teste]




