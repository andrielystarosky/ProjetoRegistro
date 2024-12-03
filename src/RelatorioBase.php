<?php

// singleton

class RelatorioBase {
    private $conteudo;
    private static $instancia = null;

    // O construtor é privado para garantir que a classe tenha apenas uma instância
    private function __construct($conteudo) {
        $this->conteudo = $conteudo;
    }

    // Método estático para obter a instância única
    public static function getInstancia($conteudo) {
        if (self::$instancia === null) {
            self::$instancia = new RelatorioBase($conteudo);
        }
        return self::$instancia;
    }

    public function gerarRelatorio() {
        return $this->conteudo;
    }
}
?>
