const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide pour relier les mots en ligne droite.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! 🚗",
        modalSuccessDesc: "Prêt pour la suite de la location ?",
        modalFinalTitle: "Parcours Heritage Terminé ! 🏆",
        modalFinalDesc: "Félicitations, vous avez complété les 20 niveaux de location de voiture !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début",
        timeLabel: "Temps réalisé :"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Found",
        instruction: "Instruction: Slide your finger or mouse smoothly to connect words in a straight line.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! 🚗",
        modalSuccessDesc: "Ready for the next rental step?",
        modalFinalTitle: "Heritage Journey Completed! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 car rental levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start",
        timeLabel: "Time taken:"
    },
    es: {
        levelWord: "Nivel",
        scoreWord: "Encontrados",
        instruction: "Instrucción: Desliza tu dedo o ratón suavemente para conectar las palabras en línea recta.",
        wordsTitle: "Palabras a buscar:",
        modalSuccessTitle: "¡Nivel Validado! 🚗",
        modalSuccessDesc: "¿Listo para el siguiente paso de alquiler?",
        modalFinalTitle: "¡Recorrido Heritage Completado! 🏆",
        modalFinalDesc: "¡Felicidades, completaste los 20 niveles de alquiler de autos!",
        nextBtn: "Siguiente Nivel",
        replayBtn: "Jugar de Nuevo",
        timeLabel: "Tiempo empleado:"
    }
};

// 20 Niveaux de 5 mots chacun (champ lexical de la location de voitures, en FR, EN, ES)
const LEVELS = [
    {
        title: { fr: "Niveau 1 : Contrats & Papiers", en: "Level 1: Contracts & Papers", es: "Nivel 1: Contratos y Papeles" },
        words: {
            fr: ["CONTRAT", "PERMIS", "TARIF", "CLE", "AGENCE"],
            en: ["CONTRACT", "PERMIT", "RATE", "KEY", "OFFICE"],
            es: ["CONTRATO", "PERMISO", "TARIFA", "LLAVE", "OFICINA"]
        }
    },
    {
        title: { fr: "Niveau 2 : Véhicules & Types", en: "Level 2: Vehicles & Types", es: "Nivel 2: Vehículos y Tipos" },
        words: {
            fr: ["VOITURE", "AUTO", "BERLINE", "SUV", "TAXI"],
            en: ["CAR", "AUTO", "SEDAN", "SUV", "CAB"],
            es: ["COCHE", "AUTO", "SEDAN", "SUV", "TAXI"]
        }
    },
    {
        title: { fr: "Niveau 3 : Moteur & Huile", en: "Level 3: Engine & Oil", es: "Nivel 3: Motor y Aceite" },
        words: {
            fr: ["MOTEUR", "HUILE", "TURBO", "PISTON", "ESS"],
            en: ["ENGINE", "OIL", "TURBO", "PISTON", "GAS"],
            es: ["MOTOR", "ACEITE", "TURBO", "PISTON", "GAS"]
        }
    },
    {
        title: { fr: "Niveau 4 : Roues & Freins", en: "Level 4: Wheels & Brakes", es: "Nivel 4: Ruedas y Frenos" },
        words: {
            fr: ["PNEU", "ROUE", "FREIN", "DISQUE", "JANTE"],
            en: ["TIRE", "WHEEL", "BRAKE", "DISC", "RIM"],
            es: ["NEUMATICO", "RUEDA", "FRENO", "DISCO", "LLANTA"]
        }
    },
    {
        title: { fr: "Niveau 5 : Carrosserie", en: "Level 5: Bodywork", es: "Nivel 5: Carrocería" },
        words: {
            fr: ["PORTE", "CAPOT", "AILE", "COFFRE", "TOIT"],
            en: ["DOOR", "HOOD", "FENDER", "TRUNK", "ROOF"],
            es: ["PUERTA", "CAPOT", "ALETA", "MALETERO", "TECHO"]
        }
    },
    {
        title: { fr: "Niveau 6 : Éclairage", en: "Level 6: Lighting", es: "Nivel 6: Iluminación" },
        words: {
            fr: ["PHARE", "FEUX", "LAMPE", "NEON", "LEDS"],
            en: ["LIGHT", "BULB", "LAMP", "NEON", "LED"],
            es: ["FARO", "LUCES", "LAMPARA", "NEON", "LEDS"]
        }
    },
    {
        title: { fr: "Niveau 7 : Confort Intérieur", en: "Level 7: Interior Comfort", es: "Nivel 7: Confort Interior" },
        words: {
            fr: ["SIEGE", "CUIR", "CLIM", "VITRE", "TAPIS"],
            en: ["SEAT", "LEATHER", "AC", "GLASS", "MAT"],
            es: ["ASIENTO", "CUERO", "CLIMA", "VIDRIO", "ALFOMBRA"]
        }
    },
    {
        title: { fr: "Niveau 8 : Voyage & Route", en: "Level 8: Travel & Road", es: "Nivel 8: Viaje y Ruta" },
        words: {
            fr: ["ROUTE", "CARTE", "GPS", "ESSENCE", "BORNE"],
            en: ["ROAD", "MAP", "GPS", "FUEL", "PUMP"],
            es: ["RUTA", "MAPA", "GPS", "GASOLINA", "BOMBA"]
        }
    },
    {
        title: { fr: "Niveau 9 : Réservation", en: "Level 9: Booking", es: "Nivel 9: Reserva" },
        words: {
            fr: ["DATES", "HEURE", "DUREE", "CLIENT", "PRIX"],
            en: ["DATES", "TIME", "TERM", "CLIENT", "PRICE"],
            es: ["FECHAS", "HORA", "PLAZO", "CLIENTE", "PRECIO"]
        }
    },
    {
        title: { fr: "Niveau 10 : Assurances & Options", en: "Level 10: Insurance & Options", es: "Nivel 10: Seguros y Opciones" },
        words: {
            fr: ["RISQUE", "FRAIS", "CAUTION", "PAIX", "GARANT"],
            en: ["RISK", "FEE", "DEPOSIT", "PEACE", "GUARD"],
            es: ["RIESGO", "TASA", "FIANZA", "PAZ", "AVISO"]
        }
    },
    {
        title: { fr: "Niveau 11 : Entretien & Atelier", en: "Level 11: Maintenance & Shop", es: "Nivel 11: Mantenimiento y Taller" },
        words: {
            fr: ["LAVAGE", "ATELIER", "OUTIL", "CLE", "VIS"],
            en: ["WASH", "SHOP", "TOOL", "KEY", "SCREW"],
            es: ["LAVADO", "TALLER", "HERRAMIENTA", "LLAVE", "TORNILLO"]
        }
    },
    {
        title: { fr: "Niveau 12 : Vitesses & Boîte", en: "Level 12: Speeds & Gearbox", es: "Nivel 12: Velocidades y Caja" },
        words: {
            fr: ["BOITE", "VITESSE", "PONT", "LEVIER", "DISQUE"],
            en: ["GEAR", "SPEED", "AXLE", "LEVER", "DISC"],
            es: ["CAJA", "VELOCIDAD", "EJE", "PALANCA", "DISCO"]
        }
    },
    {
        title: { fr: "Niveau 13 : Sécurité Active", en: "Level 13: Active Safety", es: "Nivel 13: Seguridad Activa" },
        words: {
            fr: ["AIRBAG", "ALERTE", "RADAR", "CAMERA", "BLOC"],
            en: ["AIRBAG", "ALERT", "RADAR", "CAM", "LOCK"],
            es: ["AIRBAG", "ALERTA", "RADAR", "CAMARA", "BLOQUE"]
        }
    },
    {
        title: { fr: "Niveau 14 : Électrique & Hybride", en: "Level 14: Electric & Hybrid", es: "Nivel 14: Eléctrico e Híbrido" },
        words: {
            fr: ["VOLT", "WATT", "CABLE", "PRISE", "ECO"],
            en: ["VOLT", "WATT", "CABLE", "PLUG", "ECO"],
            es: ["VOLTIO", "VATIO", "CABLE", "ENCHUFE", "ECO"]
        }
    },
    {
        title: { fr: "Niveau 15 : Commandes de Conduite", en: "Level 15: Driving Controls", es: "Nivel 15: Controles de Conducción" },
        words: {
            fr: ["VOLANT", "PEDALE", "FREIN", "GAZ", "PARK"],
            en: ["WHEEL", "PEDAL", "BRAKE", "GAS", "PARK"],
            es: ["VOLANTE", "PEDAL", "FRENO", "GAS", "PARK"]
        }
    },
    {
        title: { fr: "Niveau 16 : Facturation & Billets", en: "Level 16: Billing & Tickets", es: "Nivel 16: Facturación y Tickets" },
        words: {
            fr: ["FACTURE", "COPIE", "VISA", "SIGN", "TICKET"],
            en: ["INVOICE", "COPY", "VISA", "SIGN", "TICKET"],
            es: ["FACTURA", "COPIA", "VISA", "FIRMA", "TICKET"]
        }
    },
    {
        title: { fr: "Niveau 17 : Catégories de Voitures", en: "Level 17: Car Categories", es: "Nivel 17: Categorías de Autos" },
        words: {
            fr: ["PETIT", "GRAND", "LUXE", "SPORT", "FAMIL"],
            en: ["SMALL", "LARGE", "LUX", "SPORT", "FAMILY"],
            es: ["PEQUE", "GRANDE", "LUJO", "SPORT", "FAMIL"]
        }
    },
    {
        title: { fr: "Niveau 18 : Options & Confort", en: "Level 18: Options & Comfort", es: "Nivel 18: Opciones y Confort" },
        words: {
            fr: ["SIEGE", "GPS", "AUDIO", "TOIT", "KIT"],
            en: ["SEAT", "GPS", "AUDIO", "ROOF", "KIT"],
            es: ["ASIENTO", "GPS", "AUDIO", "TECHO", "KIT"]
        }
    },
    {
        title: { fr: "Niveau 19 : Accueil & Service", en: "Level 19: Welcome & Service", es: "Nivel 19: Recepción y Servicio" },
        words: {
            fr: ["ACCUEIL", "SOURIRE", "BADGE", "TABLE", "AGENT"],
            en: ["WELCOME", "SMILE", "BADGE", "DESK", "AGENT"],
            es: ["BIENVENIDA", "SONRISA", "PLACA", "MESA", "AGENTE"]
        }
    },
    {
        title: { fr: "Niveau 20 : Heritage Ultime", en: "Level 20: Ultimate Heritage", es: "Nivel 20: Heritage Último" },
        words: {
            fr: ["HERITAGE", "LOCATION", "VOITURE", "ROUTE", "PAYS"],
            en: ["HERITAGE", "RENT", "CAR", "ROAD", "COUNTRY"],
            es: ["HERITAGE", "ALQUILER", "COCHE", "RUTA", "PAIS"]
        }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-light') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `⏱️ ${mins}:${secs}`;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (currentLang === 'fr') {
        if (mins > 0) return `${mins} minute(s) et ${secs} seconde(s)`;
        return `${secs} seconde(s)`;
    } else if (currentLang === 'es') {
        if (mins > 0) return `${mins} minuto(s) y ${secs} segundo(s)`;
        return `${secs} segundo(s)`;
    } else {
        if (mins > 0) return `${mins} minute(s) and ${secs} second(s)`;
        return `${secs} second(s)`;
    }
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
    startTimer();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            stopTimer();
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    const timeFormatted = formatTime(secondsElapsed);
    
    document.getElementById('modalTimeResult').innerText = `${t.timeLabel} ${timeFormatted}`;
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}