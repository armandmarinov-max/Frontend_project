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
