<?php

// 2. Mostrar los números pares del 1 al 200, excepto el rango entre 50 y 125 usando un bucle for

for ($i = 1; $i <= 200; $i++) {
    if ($i % 2 == 0 && ($i < 50 || $i > 125)) {
        echo $i . "<br>";
    }
}
?>
