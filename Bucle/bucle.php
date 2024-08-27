<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Emojis</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Generador de Emojis</h1>
        <form method="post" class="mb-4">
            <div class="mb-3">
                <label for="emojiCount" class="form-label">Selecciona la cantidad de emojis:</label>
                <select name="emojiCount" id="emojiCount" class="form-select">
                    <?php
                    for ($i = 1; $i <= 10; $i++) {
                        echo "<option value='$i'>$i</option>";
                    }
                    ?>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Generar Emojis</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $emojiCount = isset($_POST['emojiCount']) ? intval($_POST['emojiCount']) : 0;
            $emojis = [
                '&#128512;',
                '&#128526;',
                '&#128640;',
                '&#127752;',
                '&#127881;',
                '&#127829;',
                '&#128049;',
                '&#127802;',
                '&#127928;',
                '&#127942;'  
            ];

            echo "<div class='row'>";
            for ($i = 0; $i < $emojiCount; $i++) {
                $randomEmoji = $emojis[array_rand($emojis)];
                echo "<div class='col-md-2 col-sm-3 col-4 mb-3'>";
                echo "<div class='card'>";
                echo "<div class='card-body text-center'>";
                echo "<h1 style='font-size: 4rem;'>$randomEmoji</h1>";
                echo "</div>";
                echo "</div>";
                echo "</div>";
            }
            echo "</div>";
        }
        ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>