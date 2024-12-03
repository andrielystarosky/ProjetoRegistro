<?php
class CabecalhoDecorator extends RelatorioDecorator {
    private $cabecalho;

    public function __construct(RelatorioBase $relatorio, $cabecalho) {
        parent::__construct($relatorio);
        $this->cabecalho = $cabecalho;
    }

    public function gerarRelatorio() {
        return "*** " . $this->cabecalho . " *** " . $this->relatorio->gerarRelatorio();
    }
}
?>
