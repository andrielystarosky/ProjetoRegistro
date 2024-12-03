# Projeto de Registro com Design Patterns (Singleton e Decorator)

Este projeto demonstra o uso de dois padrões de design: Singleton e Decorator, para implementar um sistema de geração de relatórios em PHP.
> Andriely e Wilson

## Padrões de Projeto Utilizados

- **Singleton**: Garante que a classe `RelatorioBase` tenha apenas uma instância ao longo da execução do sistema.
- **Decorator**: Adiciona funcionalidades ao relatório de forma modular, como cabeçalho, cor e borda, sem alterar a estrutura original.

## Linguagem de Programação

Escolhemos **PHP** por ser uma linguagem simples e amplamente usada para o desenvolvimento de aplicações web, além de facilitar a implementação de padrões de design.


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




