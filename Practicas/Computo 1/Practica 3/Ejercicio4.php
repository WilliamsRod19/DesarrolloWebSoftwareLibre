<?php

//4. Mostrar la tabla de multiplicar del 7

$numero = 7;

echo "Tabla de multiplicar del $numero:<br>";

for ($i = 1; $i <= 10; $i++) {
    echo "$numero x $i = " . ($numero * $i) . "<br>";
}
?>
