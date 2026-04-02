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