<?php
class Usuario
{
    private $conexao;
    private $email;

    public function __construct($conexao, $email)
    {
        $this->conexao = $conexao;
        $this->email = $email;
    }

    public function consultaUsuario()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $sql = "SELECT * FROM usuarios WHERE email = :email";

            $consulta = $this->conexao->prepare($sql);

            $consulta->bindParam(":email", $this->email, PDO::PARAM_STR);

            $consulta->execute();
            
            if ($consulta->rowCount() > 0) {
                $usuario = $consulta->fetch(PDO::FETCH_ASSOC);
                return $usuario;
            }
      
        } 
    }
}

