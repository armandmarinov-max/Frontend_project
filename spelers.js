// De Get methode voor spelers code wanneer pagina inleadt
document.getElementById("load-spelers").addEventListener("click", function()
{
    fetch('localhost:5080/api/Speler')
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
// hier is de post functie om een speler toe te voegen
document.getElementById("add-speler").addEventListener("click", function()
{
    const nieuweSpeler = {
        voornaam: document.getElementById("voornaam").value,
        achternaam: document.getElementById("achternaam").value,
        fide_id: document.getElementById("fide_id").value,
        land: document.getElementById("land").value,
        geslacht: document.getElementById("geslacht").value,
        geboortejaar: document.getElementById("geboortejaar").value
    };

    fetch('localhost:5080/api/Speler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nieuweSpeler)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het toevoegen van de speler');
            }
            return response.json();
        })
        .then(data => {
            console.log('Speler toegevoegd:', data);
            alert(`Speler ${data.voornaam} ${data.achternaam} succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});



                