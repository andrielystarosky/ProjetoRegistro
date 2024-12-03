<?php

// src/CorDecorator.php

class CorDecorator extends RelatorioDecorator {
    private $cor;

    public function __construct(RelatorioBase $relatorio, $cor) {
        parent::__construct($relatorio);
        $this->cor = $cor;
    }

    public function gerarRelatorio() {
        return "Cor: [" . $this->cor . "] " . $this->relatorio->gerarRelatorio();
    }
}
?>