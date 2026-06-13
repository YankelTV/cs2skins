<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS2 Case Opening</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4e54c8, #8f94fb);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        .case {
            width: 200px;
            height: 200px;
            margin: auto;
            background: #c98b3f;
            border: 8px solid #8b5a2b;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 60px;
        }

        h1 {
            margin-bottom: 20px;
        }

        .skins-list {
            display: flex;
            overflow: hidden;
            width: 100%;
            height: 50px;
            margin: 20px auto;
            border: 2px solid #8b5a2b;
            border-radius: 10px;
            position: relative;
        }

        .skins-list-inner {
            display: flex;
            animation: scroll 3s linear infinite;
        }

        .skin-item {
            width: 150px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            background: #f2b79e;
            margin-right: 10px;
            border-radius: 5px;
            color: #333;
            border: 1px solid #8b5a2b;
        }

        @keyframes scroll {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }

        button {
            margin-top: 20px;
            padding: 15px 30px;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            background: #ff9800;
            color: white;
            cursor: pointer;
        }

        button:hover {
            background: #e68900;
        }

        #result {
            margin-top: 20px;
            font-size: 24px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🎁 Cartoon Case</h1>
    <div class="case">📦</div>

    <div class="skins-list">
        <div class="skins-list-inner" id="skinsListInner">
            <div class="skin-item">P250 Sand Dune</div>
            <div class="skin-item">MP9 Sand Scale</div>
            <div class="skin-item">Nova Candy Apple</div>
            <div class="skin-item">UMP-45 Riot</div>
            <div class="skin-item">FAMAS Survivor</div>
            <div class="skin-item">AK-47 Elite Build</div>
            <div class="skin-item">AWP Neo-Noir</div>
            <div class="skin-item">M4A1-S Printstream</div>
            <div class="skin-item">AK-47 Bloodsport</div>
            <div class="skin-item">AWP Dragon Lore</div>
        </div>
    </div>

    <button onclick="openCase()">Otwórz skrzynkę</button>
    <div id="result"></div>
</div>

<script>
    const skins = [
        { name: 'P250 Sand Dune', chance: 25 },
        { name: 'MP9 Sand Scale', chance: 20 },
        { name: 'Nova Candy Apple', chance: 15 },
        { name: 'UMP-45 Riot', chance: 10 },
        { name: 'FAMAS Survivor', chance: 8 },
        { name: 'AK-47 Elite Build', chance: 7 },
        { name: 'AWP Neo-Noir', chance: 5 },
        { name: 'M4A1-S Printstream', chance: 4 },
        { name: 'AK-47 Bloodsport', chance: 3 },
        { name: 'AWP Dragon Lore', chance: 1 }
    ];

    function openCase() {
        // Zatrzymaj animację podczas losowania
        const list = document.getElementById('skinsListInner');
        list.style.animation = 'none';
        
        // Uruchom animację ponownie z nowym przesunięciem po losowaniu
        setTimeout(() => {
            let random = Math.random() * 100;
            let sum = 0;
            for (let skin of skins) {
                sum += skin.chance;
                if (random <= sum) {
                    document.getElementById('result').innerHTML = '🏆 Wylosowano: ' + skin.name;
                    break;
                }
            }
            // Po 3 sekundach przywróć animację
            list.style.animation = 'scroll 3s linear infinite';
        }, 100);
    }
</script>

</body>
</html>
Co tu się dzieje:
