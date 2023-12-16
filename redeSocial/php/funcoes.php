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

            $sql = "SELECT * FROM usuarios WHERE email = :email";

            $consulta = $this->conexao->prepare($sql);

            $consulta->bindParam(":email", $this->email, PDO::PARAM_STR);

            $consulta->execute();
            
            if ($consulta->rowCount() > 0) {
                $usuario = $consulta->fetch(PDO::FETCH_ASSOC);
                return $usuario;
            }
      
        } 
        public function adicionarPublicacao($id, $publicacao, $imagens, $idUsuario)
        {
            try {
                $sql = "INSERT INTO publicacoes (id, publicacao, imagem, id_usuario) VALUES (:id, :publicacao, :imagem, :id_usuario)";
                
                $consulta = $this->conexao->prepare($sql);
                
                $consulta->bindParam(":id", $id, PDO::PARAM_INT);
                $consulta->bindParam(":publicacao", $publicacao, PDO::PARAM_STR);
                
                $imagensJson = json_encode($imagens);
                $consulta->bindParam(":imagem", $imagensJson, PDO::PARAM_STR);
                
                $consulta->bindParam(":id_usuario", $idUsuario, PDO::PARAM_INT);
                
                $consulta->execute();
                
                return true;
            } catch (PDOException $e) {
                echo "Erro ao adicionar publicação: " . $e->getMessage();
                
                return false;
            }
        }
        
    }


