document.addEventListener("DOMContentLoaded", function() {
    const episodeList = document.getElementById("episode-list");
    const episodeFrame = document.querySelector(".anime-video iframe");

    // Liste des épisodes (remplace avec des liens réels)
    const episodes = [
        { number: 1, link: "https://anime-sama.fr/catalogue/naruto/saison1hs/vostfr/" },
        { number: 2, link: "https://anime-sama.fr/catalogue/naruto/saison1hs/vostfr/" },
        { number: 3, link: "https://anime-sama.fr/catalogue/naruto/saison1hs/vostfr/" },
        { number: 4, link: "https://anime-sama.fr/catalogue/naruto/saison1hs/vostfr/" }
    ];

    // Générer la liste des épisodes
    episodes.forEach(ep => {
        let li = document.createElement("li");
        li.textContent = `Épisode ${ep.number}`;
        li.addEventListener("click", function() {
            episodeFrame.src = ep.link;
        });
        episodeList.appendChild(li);
    });
});
