<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// O restante do código permanece o mesmo
require_once 'src/RelatorioBase.php';
require_once 'src/RelatorioDecorator.php';
require_once 'src/CabecalhoDecorator.php';
require_once 'src/CorDecorator.php';
require_once 'src/BordaDecorator.php';

// Utilizando o Singleton para criar o relatório base
$relatorio = RelatorioBase::getInstancia("Relatório de Teste");

// Aplicando os decoradores
$relatorio = new CabecalhoDecorator($relatorio, "Relatório de Teste");
$relatorio = new CorDecorator($relatorio, "Azul");
$relatorio = new BordaDecorator($relatorio);

// Gerando o resultado final
echo $relatorio->gerarRelatorio();  // Saída esperada: Borda: [Cor: [Azul] *** Relatório de Teste ***]
?>
