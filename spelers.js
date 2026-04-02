// De Get methode voor spelers code wanneer pagina inleadt
document.getElementById("load-spelers").addEventListener("click", function()
{
    fetch('localhost:5080/api/schaak')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Spelers";
                div.innerHTML = `
                    <h3>${item.speler_id}</h3>
                    <p>Voornaam: ${item.voornaam}</p>
                    <p>Achternaam: ${item.achternaam}</p>
                    <p>Fide: ${item.fide_id}</p>
                    <p>Land: ${item.land}</p>
                    <p>Geslacht: ${item.geslacht}</p>
                    <p>Geboortejaar: ${item.geboortejaar}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
//De Get methode voor Rondes code wanneer pagina inleadt
document.getElementById("load-rondes").addEventListener("click", function()
{
    fetch('localhost:5080/api/rondes')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Rondes";
                div.innerHTML = `
                    <h3>${item.ronde_id}</h3>
                    <p>ToernooiID: ${item.toernooi_id}</p>
                    <p>RondeNummer: ${item.ronde_nummer}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// De Get methode voor Toernooien code wanneer pagina inleadt
document.getElementById("load-toernooien").addEventListener("click", function()
{
    fetch('localhost:5080/api/toernooien')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Toernooien";
                div.innerHTML = `
                    <h3>${item.Toernooi_id}</h3>
                    <p>Naam: ${item.Naam}</p>
                    <p>Locatie: ${item.Locatie}</p>
                    <p>StartDatum: ${item.Start_Datum}</p>
                    <p>EindDatum: ${item.Eind_Datum}</p>
                    <p>TijdControle: ${item.Time_Controle}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// De Get methode voor Spel code wanneer pagina inleadt
document.getElementById("load-spel").addEventListener("click", function()
{
    fetch('localhost:5080/api/spel')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Spel";
                div.innerHTML = `
                    <h3>${item.spel_id}</h3>
                    <p>ToernooiID: ${item.toernooi_id}</p>
                    <p>RondeID: ${item.ronde_id}</p>
                    <p>WhiteSpeler: ${item.white_speler_id}</p>
                    <p>ZwarteSpeler: ${item.black_speler_id}</p>
                    <p>Resultaat: ${item.resultaat}</p>
                    <p>SchaakbordNummer: ${item.schaakbord_nummer}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// De Get methode voor klassement code wanneer pagina inleadt
document.getElementById("load-klassement").addEventListener("click", function()
{
    fetch('localhost:5080/api/klassement')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Klassement";
                div.innerHTML = `
                    <h3>${item.klassement_id}</h3>
                    <p>ToernooiID: ${item.toernooi_id}</p>
                    <p>SpelerID: ${item.speler_id}</p>
                    <p>RondeNummer: ${item.ronde_nummer}</p>
                    <p>Score: ${item.score}</p>
                    <p>gelijkspelScore: ${item.gelijkspelScore}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

