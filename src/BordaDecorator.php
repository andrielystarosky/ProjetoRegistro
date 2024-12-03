<?php

// src/BordaDecorator.php

class BordaDecorator extends RelatorioDecorator {
    public function __construct(RelatorioBase $relatorio) {
        parent::__construct($relatorio);
    }

    public function gerarRelatorio() {
        return "Borda: [" . $this->relatorio->gerarRelatorio() . "]";
    }
}
?>
