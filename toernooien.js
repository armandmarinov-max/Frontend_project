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
// hier komt de post funtie voor toernooien
document.getElementById("delete-toernooi").addEventListener("click", function() {
    const toernooiId = document.getElementById("toernooi_id").value;

    if (!toernooiId) {
        alert("Geef een toernooi ID op.");
        return;
    }

    fetch(`localhost:5080/api/Toernooi/${toernooiId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het verwijderen van het toernooi');
            }
            console.log(`Toernooi met ID ${toernooiId} verwijderd`);
            alert(`Toernooi met ID ${toernooiId} succesvol verwijderd!`);
        })
        .catch(error => console.error('Error deleting data:', error));
});