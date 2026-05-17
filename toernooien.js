// GET
document.getElementById("load-toernooien").addEventListener("click", function() {
    fetch('http://localhost:5080/api/Schaak')  
        .then(response => response.json())
        .then(data => {
            window.alleToernooien = data;
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Toernooien";
                div.innerHTML = `
                    <h3>${item.toernooiId}</h3>
                    <p>Naam: ${item.naam}</p>
                    <p>Locatie: ${item.locatie}</p>
                    <p>StartDatum: ${item.startDatum}</p>
                    <p>EindDatum: ${item.eindDatum}</p>
                    <p>TimeControle: ${item.timeControle}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// POST
document.getElementById("add-toernooi").addEventListener("click", function() {
    const nieuwToernooi = {
        naam: document.getElementById("naam").value,
        locatie: document.getElementById("locatie").value,
        startDatum: document.getElementById("start_datum").value, 
        eindDatum: document.getElementById("eind_datum").value,    
        timeControle: document.getElementById("timecontrol").value 
    };

    fetch('http://localhost:5080/api/Schaak', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nieuwToernooi)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij toevoegen');
        return response.json();
    })
    .then(data => alert(`Toernooi ${data.naam} succesvol toegevoegd!`))
    .catch(error => console.error('Error posting data:', error));
});

// DELETE
document.getElementById("delete-toernooi").addEventListener("click", function() {
    const toernooiId = document.getElementById("delete-toernooi_id").value;  
    if (!toernooiId) { alert("Geef een toernooi ID op."); return; }

    fetch(`http://localhost:5080/api/Schaak/${toernooiId}`, { 
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij verwijderen');
        alert(`Toernooi met ID ${toernooiId} succesvol verwijderd!`);
    })
    .catch(error => console.error('Error deleting data:', error));
});

// PUT
document.getElementById("update-toernooi").addEventListener("click", function() {
    const toernooiId = document.getElementById("update-toernooi_id").value;
    if (!toernooiId) { alert("Geef een toernooi ID op."); return; }

    const updatedToernooi = {
        toernooiId: parseInt(toernooiId),
        naam: document.getElementById("update-naam").value,
        locatie: document.getElementById("update-locatie").value,
        startDatum: document.getElementById("update-start_datum").value,
        eindDatum: document.getElementById("update-eind_datum").value,
        timeControle: document.getElementById("update-timecontrol").value
    };

    fetch(`http://localhost:5080/api/Schaak/${toernooiId}`, {  
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedToernooi)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij updaten');
     
        alert(`Toernooi met ID ${toernooiId} succesvol geupdated!`);
    })
    .catch(error => console.error('Error updating data:', error));
});
