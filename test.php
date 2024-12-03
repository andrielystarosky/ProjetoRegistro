<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once 'src/RelatorioBase.php';
require_once 'src/RelatorioDecorator.php';
require_once 'src/CabecalhoDecorator.php';
require_once 'src/CorDecorator.php';
require_once 'src/BordaDecorator.php';

// Criando o relatório base
$relatorio = new RelatorioBase("Relatório de Teste");

// Aplicando os decoradores corretamente
$relatorioComCabecalho = new CabecalhoDecorator($relatorio, "Relatório de Teste");
$relatorioComCor = new CorDecorator($relatorioComCabecalho, "Azul");
$relatorioComBorda = new BordaDecorator($relatorioComCor);

// Gerando o resultado final
echo $relatorioComBorda->gerarRelatorio(); 
?>
