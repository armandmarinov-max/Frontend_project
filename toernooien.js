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
// hier komt de delete funtie voor toernooien
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
//hier komt de update van een toernooi
document.getElementById("update-toernooi").addEventListener("click", function() {
    const toernooiId = document.getElementById("update-toernooi_id").value;

    if (!toernooiId) {
        alert("Geef een toernooi ID op.");
        return;
    }

    const updatedToernooi = {
        toernooi_id: toernooiId,
        naam: document.getElementById("update-naam").value,
        start_datum: document.getElementById("update-start_datum").value,
        eind_datum: document.getElementById("update-eind_datum").value,
        locatie: document.getElementById("update-locatie").value,
        timecontrol: document.getElementById("update-timecontrol").value
    };

    fetch(`localhost:5080/api/Toernooi/${toernooiId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedToernooi)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het updaten van het toernooi');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Toernooi met ID ${toernooiId} geupdated:`, data);
            alert(`Toernooi met ID ${toernooiId} succesvol geupdated!`);
        })
        .catch(error => console.error('Error updating data:', error));
});
//hier komt de post funtie voor toernooien
document.getElementById("add-toernooi").addEventListener("click", function() {
    const nieuwToernooi = {
        toernooi_id: document.getElementById("toernooi_id").value,
        naam: document.getElementById("naam").value,
        start_datum: document.getElementById("start_datum").value,
        eind_datum: document.getElementById("eind_datum").value,
        locatie: document.getElementById("locatie").value,
        timecontrol: document.getElementById("timecontrol").value
    };

    fetch('localhost:5080/api/Toernooi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nieuwToernooi)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het toevoegen van het toernooi');
            }
            return response.json();
        })
        .then(data => {
            console.log('Toernooi toegevoegd:', data);
            alert(`Toernooi ${data.naam} succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});