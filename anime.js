const animes = [
    {
        "titre": "Naruto",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
        "description": "Un jeune ninja rêve de devenir Hokage.",
        "lien": "https://anime-sama.fr/catalogue/naruto"
    },
    {
        "titre": "Naruto Shippuden",
        "image": "https://fr.web.img4.acsta.net/pictures/19/08/05/16/55/2130716.jpg",
        "description": "Naruto part à la recherche de Sasuke.",
        "lien": "https://anime-sama.fr/catalogue/naruto-shippuden"
    },
    {
        "titre": "One Piece",
        "image": "https://resizing.flixster.com/i0orGrLifnc2jW75__eIn0jy1B8=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186423_i_h10_ad.jpg",
        "description": "Luffy part à la recherche du One Piece.",
        "lien": "https://anime-sama.fr/catalogue/one-piece"
    },
    {
        "titre": "Attack on Titan",
        "image": "https://www.francetvinfo.fr/pictures/zH4w6Atm0UzCz8MVyjTlzerGKeE/1200x1200/2021/02/19/phpmhompv.jpg",
        "description": "L'humanité lutte contre des titans géants.",
        "lien": "https://anime-sama.fr/catalogue/shingeki-no-kyojin"
    },
    {
        "titre": "Demon Slayer",
        "image": "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "description": "Tanjiro devient un pourfendeur de démons.",
        "lien": "https://anime-sama.fr/catalogue/demon-slayer/"
    },
    {
        "titre": "My Hero Academia",
        "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12793542_b_v13_ak.jpg",                   
        "description": "Des élèves apprennent à devenir des super-héros, Deku prend la relève de AllMight",
        "lien": "https://anime-sama.fr/catalogue/my-hero-academia"  
    },
    {
        "titre": "Black Clover",
        "image": "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
        "description": "Asta veut devenir le sorcier empereur.",
        "lien": "https://anime-sama.fr/catalogue/black-clover"
    },
    {
        "titre": "Tokyo Revengers",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/tokyo-revengers.jpg",
        "description": "Un jeune homme remonte le temps pour sauver son amie.",
        "lien": "https://anime-sama.fr/catalogue/tokyo-revengers"
    },
    {
        "titre": "Jujutsu Kaisen",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/jujutsu-kaisen.jpg",
        "description": "Un lycéen ingère un doigt maudit pour sauver ses amis.",
        "lien": "https://anime-sama.fr/catalogue/jujutsu-kaisen"
    },
    {
        "titre": "Dragon Ball Z",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/dragon-ball.jpg",
        "description": "Goku protège la Terre des menaces extraterrestres.",
        "lien": "https://anime-sama.fr/catalogue/dragon-ball-z"
    },
    {
        "titre": "Death Note",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/death-note.jpg",
        "description": "Un lycéen trouve un carnet qui tue les gens dont il écrit le nom.",
        "lien": "https://anime-sama.fr/catalogue/death-note"
    },
    {
        "titre": "Hunter x Hunter",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/hunter-x-hunter.jpg",
        "description": "Gon veut retrouver son père en devenant hunter.",
        "lien": "https://anime-sama.fr/catalogue/hunter-x-hunter"
    },
    {
        "titre": "Darling in the Franxx",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/darling-in-the-franxx.jpg",
        "description": "Des pilotes de robots géants se battent pour sauver l'humanité.",
        "lien": "https://anime-sama.fr/catalogue/darling-in-the-franxx"
    },
    {
        "titre": "Sounan Desu Ka",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/are-you-lost.jpg",
        "description": "Des lycéennes naufragées apprennent à survivre sur une île déserte.",
        "lien": "https://anime-sama.fr/catalogue/are-you-lost/"
    },
    {
        "titre": "Mushoku Tensei",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/mushoku-tensei.jpg",
        "description": "Un homme renaît dans un monde de magie et d'épées.",
        "lien": "https://anime-sama.fr/catalogue/mushoku-tensei"
    },
    {
        "titre": "Tokyo Ghoul",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/tokyo-ghoul.jpg",
        "description": "Un étudiant devient un demi-ghoul.",
        "lien": "https://anime-sama.fr/catalogue/tokyo-ghoul"
    },
    {
        "titre": "High School of the Dead",
        "image": "https://www.enter.co/wp-content/uploads/2013/04/hotd-1200x675.jpg",
        "description": "Des lycéens survivent à une apocalypse zombie.",
        "lien": "https://v6.voiranime.com/anime/high-school-of-the-dead/"
    },
    {
        "titre": "Baki",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/baki.jpg",
        "description": "Baki veut devenir le plus fort des combattants.",
        "lien": "https://anime-sama.fr/catalogue/baki"
    },
    {
        "titre": "Fairy Tail",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/fairy-tail.jpg",
        "description": "Lucy rejoint la guilde de Fairy Tail.",
        "lien": "https://anime-sama.fr/catalogue/fairy-tail"
    },
    {
        "titre": "Overlord",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/overlord.jpg",
        "description": "Un joueur se retrouve piégé dans un MMORPG.",
        "lien": "https://anime-sama.fr/catalogue/overlord"
    },
    {
        "titre": "Black Buttler",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/black-butler.jpg",
        "description": "Un majordome démoniaque sert un jeune maître.",
        "lien": "https://anime-sama.fr/catalogue/black-butler"
    },
    {
        "titre": "No Game No Life",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/no-game-no-life.jpg",
        "description": "Deux frère et soeur sont transportés dans un monde de jeux.",
        "lien": "https://anime-sama.fr/catalogue/no-game-no-life"
    },
    {
        "titre": "Full Metal Alchemist",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/fullmetal-alchemist.jpg",
        "description": "Deux frères cherchent la pierre philosophale.",
        "lien": "https://anime-sama.fr/catalogue/fullmetal-alchemist"
    },
    {
        "titre": "Radiant",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/radiant.jpg",
        "description": "Seth veut détruire les Némésis.",
        "lien": "https://anime-sama.fr/catalogue/radiant"
    },
    {
        "titre": "Boruto: Naruto Next Generations",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/boruto.jpg",
        "description": "Le fils de Naruto veut surpasser son père.",
        "lien": "https://anime-sama.fr/catalogue/boruto-naruto-next-generations"
    },
    {
        "titre": "Bleach",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/bleach.jpg",
        "description": "Ichigo devient un shinigami.",
        "lien": "https://anime-sama.fr/catalogue/bleach"
    },
    {
        "titre": "Rinne",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7GAjw6as8BJx_jhSGUXCvT7ytVR7LbGi1g&s",
        "description": "Un lycéen voit les esprits et aide les morts à passer dans l'au-delà.",
        "lien": "https://anime-sama.fr/catalogue/rinne"
    },
    {
        "titre": "Bakugan",
        "image": "https://m.media-amazon.com/images/M/MV5BYzdjY2VmZDgtMWFlOS00NjAyLWIyYzQtMjNjNzY3YTgxODRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "description": "Des enfants combattent avec des créatures.",
        "lien": "https://anime-sama.fr/catalogue/bakugan"
    },
    {
        "titre": "Pokemon",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/pokemon.jpg",
        "description": "Sacha veut devenir le meilleur dresseur de pokémon.",
        "lien": "https://anime-sama.fr/catalogue/pokemon"
    },
    {
        "titre": "Prison School",
        "image": "https://img.sanctuary.fr/fiche/origin/42116.jpg",
        "description": "Des lycéens sont punis dans une école pour filles.",
        "lien": "https://anime-sama.fr/catalogue/prison-school"
    },
    {
        "titre": "The Seven Deadly Sins",
        "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12296874_b_v8_aa.jpg",
        "description": "Des chevaliers combattent pour sauver le royaume de Britannia.",
        "lien": "https://anime-sama.fr/catalogue/seven-deadly-sins/"
    },
    {
        "titre": "Niki Larson",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/city-hunter.jpg",
        "description": "Un détective privé protège les femmes en détresse.",
        "lien": "https://anime-sama.fr/catalogue/city-hunter"
    },
    {
        "titre": "Wakfu",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/wakfu.jpg",
        "description": "Yugo part à la recherche de sa famille.",
        "lien": "https://anime-sama.fr/catalogue/wakfu"
    },
    {
        "titre": "Kuroko's Basket",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/kuroko-no-basket.jpg",
        "description": "Kuroko veut devenir le meilleur basketteur.",
        "lien": "https://anime-sama.fr/catalogue/kuroko-no-basket"
    },
    {
        "titre": "Dr Stone",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/dr-stone.jpg",
        "description": "Senku veut reconstruire la civilisation après une catastrophe.",
        "lien": "https://anime-sama.fr/catalogue/dr-stone"
    },
    {
        "titre": "Fruit Basket",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/fruits-basket.jpg",
        "description": "Tohru découvre la malédiction de la famille Soma.",
        "lien": "https://anime-sama.fr/catalogue/fruits-basket"
    },
    {
        "titre": "The God of High School",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/the-god-of-high-school.jpg",
        "description": "Des lycéens s'affrontent dans un tournoi.",
        "lien": "https://anime-sama.fr/catalogue/the-god-of-high-school"
    },
    {
        "titre": "One Punch Man",
        "image": "https://static.wikia.nocookie.net/onepunchman/images/c/cd/One-Punch_Man_TV_Anime_Key_Visual.png/revision/latest?cb=20220818034817",
        "description": "Saitama bat tous ses ennemis en un coup.",
        "lien": "https://anime-sama.fr/catalogue/one-punch-man/"
    },
    {
        "titre": "Toriko",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/toriko.jpg",
        "description": "Toriko est un chasseur d'aliments rares.",
        "lien": "https://anime-sama.fr/catalogue/toriko"
    },
    {
        "titre": "Ge Ge Ge ni Kitaro",
        "image": "https://m.media-amazon.com/images/M/MV5BNmE1YzUxNDEtOTRlNi00MmI0LThlZmYtYzc4NDYyMDk4NjVjXkEyXkFqcGc@._V1_.jpg",
        "description": "Kitaro protège les humains des yokai.",
        "lien": "https://v6.voiranime.com/anime/gegege-no-kitarou-2018/"
    },
    {
        "titre": "Noblesse",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/noblesse.jpg",
        "description": "Un vampire se réveille après 820 ans de sommeil.",
        "lien": "https://anime-sama.fr/catalogue/noblesse"
    },
    {
        "titre": "Detectif Conan",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/detective-conan.jpg",
        "description": "Un lycéen résout des enquêtes criminelles.",
        "lien": "https://anime-sama.fr/catalogue/detective-conan"
    },
    {
        "titre": "Food Wars",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/food-wars.jpg",
        "description": "Des élèves s'affrontent dans des duels culinaires.",
        "lien": "https://anime-sama.fr/catalogue/food-wars"
    },
    {
        "titre": "Les Chevaliers du Zodiac",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/saint-seiya.jpg",
        "description": "Des chevaliers protègent Athéna des forces du mal.",
        "lien": "https://anime-sama.fr/catalogue/saint-seiya"
    },
    {
        "titre": "Fire Force",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/fire-force.jpg",
        "description": "Des pompiers combattent des êtres enflammés.",
        "lien": "https://anime-sama.fr/catalogue/fire-force"
    },
    { 
        "titre": "Sword Art Online",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/sword-art-online.jpg",
        "description": "Des joueurs sont piégés dans un MMORPG.",
        "lien": "https://anime-sama.fr/catalogue/sword-art-online"
    },
    {
        "titre": "Belzebub",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/beelzebub.jpg",
        "description": "Un lycéen doit élever le fils du diable.",
        "lien": "https://anime-sama.fr/catalogue/beelzebub"
    },
    {
        "titre": "Soul Eater",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/soul-eater.jpg",
        "description": "Des élèves combattent des démons pour devenir des Death Scythes.",
        "lien": "https://anime-sama.fr/catalogue/soul-eater"
    },
    {
        "titre": "Bokutachi no Remake",
        "image": "https://m.media-amazon.com/images/M/MV5BNjZmMDNiNGEtNzU4OS00ZmUwLWFiMjctM2ViMTFkM2UxMGQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "description": "Un homme retourne dans le passé pour changer sa vie.",
        "lien": "https://v6.voiranime.com/anime/bokutachi-no-remake/"
    },
    {
        "titre": "Assasssination Classroom",
        "image": "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/assassination-classroom.jpg",
        "description": "",
        "lien": "https://anime-sama.fr/catalogue/assassination-classroom/"
    }
    
];

const animesParPage = 35;
let pageActuelle = 1;

function afficherAnimes() {
    const recherche = document.getElementById('recherche-catalogue').value.toLowerCase();
    const animeGrid = document.getElementById('anime-grid');
    animeGrid.innerHTML = '';

    const animesFiltres = animes.filter(anime => anime.titre.toLowerCase().includes(recherche));
    const animesPage = animesFiltres.slice((pageActuelle - 1) * animesParPage, pageActuelle * animesParPage);

    animesPage.forEach(anime => {
        animeGrid.innerHTML += `
            <div class="anime-card">
                <img src="${anime.image}" alt="${anime.titre}">
                <h2>${anime.titre}</h2>
                <p>${anime.description}</p>
                <a href="${anime.lien}" target="_blank">Regarder</a>
            </div>
        `;
    });

    document.getElementById('page-actuelle').textContent = pageActuelle;
}

document.getElementById('recherche-catalogue').addEventListener('input', afficherAnimes);

document.getElementById('page-precedente').addEventListener('click', () => {
    if (pageActuelle > 1) {
        pageActuelle --;
        afficherAnimes();
    }
});

document.getElementById('page-suivante').addEventListener('click', () => {
    const nombrePages = Math.ceil(animes.length / animesParPage);
    if (pageActuelle < nombrePages) {
        pageActuelle++;
        afficherAnimes();
    }
});

afficherAnimes();
