// GET
document.getElementById("load-rondes").addEventListener("click", function() {
    fetch('http://localhost:5080/api/Ronde')  
        .then(response => response.json())
        .then(data => {
            window.alleRondes = data;
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Rondes";
                div.innerHTML = `
                    <h3>ID: ${item.rondeId}</h3>
                    <p>ToernooiID: ${item.toernooiId}</p>
                    <p>RondeNummer: ${item.rondeNummer}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// POST
document.getElementById("add-ronde").addEventListener("click", function() {
    const nieuweRonde = {
        toernooiId: parseInt(document.getElementById("toernooi_id").value),   
        rondeNummer: parseInt(document.getElementById("ronde_nummer").value)
    };

    fetch('http://localhost:5080/api/Ronde', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nieuweRonde)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij toevoegen');
        return response.json();
    })
    .then(data => alert(`Ronde ${data.rondeNummer} succesvol toegevoegd!`))
    .catch(error => console.error('Error posting data:', error));
});

// DELETE
document.getElementById("delete-ronde").addEventListener("click", function() {
    const rondeId = document.getElementById("delete-ronde_id").value;  
    if (!rondeId) { alert("Geef een ronde ID op."); return; }

    fetch(`http://localhost:5080/api/Ronde/${rondeId}`, { 
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij verwijderen');
        alert(`Ronde met ID ${rondeId} succesvol verwijderd!`);
    })
    .catch(error => console.error('Error deleting data:', error));
});

// PUT
document.getElementById("update-ronde").addEventListener("click", function() {
    const rondeId = document.getElementById("update-ronde_id").value; 
    if (!rondeId) { alert("Geef een ronde ID op."); return; }

    const updatedRonde = {
        rondeId: parseInt(rondeId),
        toernooiId: parseInt(document.getElementById("update-toernooi_id").value),
        rondeNummer: parseInt(document.getElementById("update-ronde_nummer").value)
    };

    fetch(`http://localhost:5080/api/Ronde/${rondeId}`, {  
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRonde)
    })
    .then(response => {
        if (!response.ok) throw new Error('Fout bij updaten');

        alert(`Ronde met ID ${rondeId} succesvol geupdated!`);
    })
    .catch(error => console.error('Error updating data:', error));
});