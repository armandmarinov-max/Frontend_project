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