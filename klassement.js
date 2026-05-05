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
//hier komt de post funtie voor klassement
document.getElementById("add-klassement").addEventListener("click", function()
{
    const nieuweKlassement = {
        klasssement_id: document.getElementById("klassemnt_id").value,
        toernooi_id: document.getElementById("toernooi_id").value,
        speler_id: document.getElementById("speler_id").value,
        rondenummer: document.getElementById("rondenummer").value,
        score: document.getElementById("score").value,
        gelijkspelscore: document.getElementById("gelijkspelscore").value
    };

    fetch('localhost:5080/api/Klassement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nieuweKlassement)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het toevoegen van de klassement');
            }
            return response.json();
        })
        .then(data => {
            console.log('Klassement toegevoegd:', data);
            alert(`Klassement ${data.klassement}  succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});
//hier komt de delete van een klassement
document.getElementById("delete-klassement").addEventListener("click", function() {
    const klassementId = document.getElementById("klassemnt_id").value;

    if (!klassementId) {
        alert("Geef een klassement ID op.");
        return;
    }

    fetch(`localhost:5080/api/Klassement/${klassementId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het verwijderen van het klassement');
            }
            console.log(`Klassement met ID ${klassementId} verwijderd`);
            alert(`Klassement met ID ${klassementId} succesvol verwijderd!`);
        })
        .catch(error => console.error('Error deleting data:', error));
});
//hier komt de update van een klassement
document.getElementById("update-klassement").addEventListener("click", function() {
    const klassementId = document.getElementById("update-klassemnt_id").value;

    if (!klassementId) {
        alert("Geef een klassement ID op.");
        return;
    }

    const updatedKlassement = {
        klassement_id: klassementId,
        toernooi_id: document.getElementById("update-toernooi_id").value,
        speler_id: document.getElementById("update-speler_id").value,
        rondenummer: document.getElementById("update-rondenummer").value,
        score: document.getElementById("update-score").value,
        gelijkspelscore: document.getElementById("update-gelijkspelscore").value
    };

    fetch(`localhost:5080/api/Klassement/${klassementId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedKlassement)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het updaten van het klassement');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Klassement met ID ${klassementId} geupdated:`, data);
            alert(`Klassement met ID ${klassementId} succesvol geupdated!`);
        })
        .catch(error => console.error('Error updating data:', error));
});