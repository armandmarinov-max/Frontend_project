// GET
document.getElementById("load-klassement").addEventListener("click", function() {
    fetch('http://localhost:5080/api/Klassement')
        .then(response => response.json())
        .then(data => {
            window.alleKlassement = data;
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Klassement";
                div.innerHTML = `
                    <h3>ID: ${item.klassementId}</h3>
                    <p>ToernooiID: ${item.toernooiId}</p>
                    <p>SpelerID: ${item.spelerId}</p>
                    <p>RondeNummer: ${item.rondeNummer}</p>
                    <p>Score: ${item.score}</p>
                    <p>GelijkspelScore: ${item.gelijkspelScore}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// POST
document.getElementById("add-klassement").addEventListener("click", function() {
    const nieuwKlassement = {
        toernooiId: parseInt(document.getElementById("toernooi_id").value),      
        spelerId: parseInt(document.getElementById("speler_id").value),
        rondeNummer: parseInt(document.getElementById("rondenummer").value),
        score: parseFloat(document.getElementById("score").value),
        gelijkspelScore: parseFloat(document.getElementById("gelijkspelscore").value)
    };

    fetch('http://localhost:5080/api/Klassement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nieuwKlassement)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij toevoegen');
        return response.json();
    })
    .then(data => alert(`Klassement ID ${data.klassementId} succesvol toegevoegd!`))
    .catch(error => console.error('Error posting data:', error));
});

// DELETE
document.getElementById("delete-klassement").addEventListener("click", function() {
    const klassementId = document.getElementById("delete-klassement_id").value;  
    if (!klassementId) { alert("Geef een klassement ID op."); return; }

    fetch(`http://localhost:5080/api/Klassement/${klassementId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij verwijderen');
        alert(`Klassement met ID ${klassementId} succesvol verwijderd!`);
    })
    .catch(error => console.error('Error deleting data:', error));
});

// PUT
document.getElementById("update-klassement").addEventListener("click", function() {
    const klassementId = document.getElementById("update-klassement_id").value; 
    if (!klassementId) { alert("Geef een klassement ID op."); return; }

    const updatedKlassement = {
        klassementId: parseInt(klassementId),
        toernooiId: parseInt(document.getElementById("update-toernooi_id").value),
        spelerId: parseInt(document.getElementById("update-speler_id").value),
        rondeNummer: parseInt(document.getElementById("update-rondenummer").value),
        score: parseFloat(document.getElementById("update-score").value),
        gelijkspelScore: parseFloat(document.getElementById("update-gelijkspelscore").value)
    };

    fetch(`http://localhost:5080/api/Klassement/${klassementId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedKlassement)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij updaten');

        alert(`Klassement met ID ${klassementId} succesvol geupdated!`);
    })
    .catch(error => console.error('Error updating data:', error));
});