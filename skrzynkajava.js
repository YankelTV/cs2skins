const skiny = [
    { nazwa: 'AK-47 | Cartel', szansa: 10 },
    { nazwa: 'M4A1-S | Printstream', szansa: 2 },
    { nazwa: 'AWP | Dragon Lore', szansa: 0.5 },
    { nazwa: 'Glock-18 | Fade', szansa: 15 },
    { nazwa: 'USP-S | Kill Confirmed', szansa: 5 },
    { nazwa: 'P90 | Shredder', szansa: 20 },
    { nazwa: 'M4A4 | Desolate Space', szansa: 1 },
    { nazwa: 'AWP | Asiimov', szansa: 3 },
    { nazwa: 'FAMAS | Roll Cage', szansa: 25 },
    { nazwa: 'AWP | Hyper Beast', szansa: 4 }
];

document.getElementById('drawButton').addEventListener('click', () => {
    const losowań = Math.random() * 100;
    let sumaSzans = 0;
    for (let i = 0; i < skiny.length; i++) {
        sumaSzans += skiny[i].szansa;
        if (losowań <= sumaSzans) {
            document.getElementById('result').innerText = `Wygrałeś: ${skiny[i].nazwa}!`;
            return;
        }
    }
});