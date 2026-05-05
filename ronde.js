//De Get methode voor Rondes code wanneer pagina inleadt
document.getElementById("load-rondes").addEventListener("click", function()
{
    fetch('localhost:5080/api/rondes')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Rondes";
                div.innerHTML = `
                    <h3>${item.ronde_id}</h3>
                    <p>ToernooiID: ${item.toernooi_id}</p>
                    <p>RondeNummer: ${item.ronde_nummer}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// hier komt de post funtie voor rondes
document.getElementById("add-ronde").addEventListener("click", function() {
    const nieuweRonde = {
        ronde_id: document.getElementById("ronde_id").value,
        toernooi_id: document.getElementById("toernooi_id").value,
        rondenummer: document.getElementById("ronde_nummer").value
    };

    fetch('localhost:5080/api/Rondes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nieuweRonde)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het toevoegen van de ronde');
            }
            return response.json();
        })
        .then(data => {
            console.log('Ronde toegevoegd:', data);
            alert(`Ronde ${data.rondenummer} succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});
//hier komt de delete van een ronde
document.getElementById("delete-ronde").addEventListener("click", function() {
    const rondeId = document.getElementById("ronde_id").value;

    if (!rondeId) {
        alert("Geef een ronde ID op.");
        return;
    }

    fetch(`localhost:5080/api/Rondes/${rondeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het verwijderen van de ronde');
            }
            console.log(`Ronde met ID ${rondeId} verwijderd`);
            alert(`Ronde met ID ${rondeId} succesvol verwijderd!`);
        })
        .catch(error => console.error('Error deleting data:', error));
});
//hier komt de update van een ronde
document.getElementById("update-ronde").addEventListener("click", function() {
    const rondeId = document.getElementById("update-ronde_id").value;

    if (!rondeId) {
        alert("Geef een ronde ID op.");
        return;
    }

    const updatedRonde = {
        ronde_id: rondeId,
        toernooi_id: document.getElementById("update-toernooi_id").value,
        rondenummer: document.getElementById("update-ronde_nummer").value
    };

    fetch(`localhost:5080/api/Rondes/${rondeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRonde)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het updaten van de ronde');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Ronde met ID ${rondeId} geupdated:`, data);
            alert(`Ronde met ID ${rondeId} succesvol geupdated!`);
        })
        .catch(error => console.error('Error updating data:', error));
});