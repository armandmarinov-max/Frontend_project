// De Get methode voor spelers code wanneer pagina inleadt
document.getElementById("load-data").addEventListener("click", function()
{
    fetch('localhost:5080/api/spelers')
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
document.getElementById("load-data").addEventListener("click", function()
{
    fetch('localhost:5080/api/spelers')
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