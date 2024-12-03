<?php

// src/RelatorioDecorator.php

abstract class RelatorioDecorator {
    protected $relatorio;

    public function __construct(RelatorioBase $relatorio) {
        $this->relatorio = $relatorio;
    }

    abstract public function gerarRelatorio();
}
?>
