<?php

$lista = Array(5,2,3,4,5,6);

function maiorProMenor($a,$b){
    if($a == $b){
        return 0;
    }
    return $a<$b? -1:1;
}
usort($lista,"maiorProMenor");
print_r($lista);
?>