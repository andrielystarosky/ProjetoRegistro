<?php
abstract class RelatorioDecorator {
    protected $relatorio;

    public function __construct($relatorio) {
        $this->relatorio = $relatorio;
    }

    abstract public function gerarRelatorio();
}
?>
