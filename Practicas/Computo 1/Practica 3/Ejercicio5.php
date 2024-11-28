<?php //5. Generar un tablero de ajedrez donde el usuario ingrese la cantidad de filas y columnas ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablero de Ajedrez</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 30px;
            height: 30px;
        }
        .black {
            background-color: black;
        }
        .white {
            background-color: white;
        }
    </style>
</head>
<body>
    <form method="post">
        Filas: <input type="number" name="rows" required>
        Columnas: <input type="number" name="cols" required>
        <input type="submit" value="Generar Tablero">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $rows = $_POST['rows'];
        $cols = $_POST['cols'];

        echo "<table border='1'>";

        for ($i = 0; $i < $rows; $i++) {
            echo "<tr>";
            for ($j = 0; $j < $cols; $j++) {
                if (($i + $j) % 2 == 0) {
                    echo "<td class='white'></td>";
                } else {
                    echo "<td class='black'></td>";
                }
            }
            echo "</tr>";
        }

        echo "</table>";
    }
    ?>
</body>
</html>
