<?php
class RelatorioBase {
    private $conteudo;
    
    public function __construct($conteudo) {
        $this->conteudo = $conteudo;
    }

    public function gerarRelatorio() {
        return $this->conteudo;
    }
}
?>
