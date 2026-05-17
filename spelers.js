// De Get methode voor spelers code wanneer pagina inleadt
document.getElementById("load-spelers").addEventListener("click", function()
{
    fetch('http://localhost:5080/api/Speler')
        .then(response => response.json())
        .then(data => {
            window.alleSpelers = data;
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
    let div = document.createElement("div");
    div.className = "Get-Spelers";
    div.innerHTML = `
        <h3>${item.spelerId}</h3>
        <p>Voornaam: ${item.voornaam}</p>
        <p>Achternaam: ${item.achternaam}</p>
        <p>Fide: ${item.fideId}</p>
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
    fideId: parseInt(document.getElementById("fide_id").value) || null, 
    land: document.getElementById("land").value,
    geslacht: document.getElementById("geslacht").value,
    geboortejaar: parseInt(document.getElementById("geboortejaar").value)
    };

    fetch('http://localhost:5080/api/Speler', {
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
//hier komt de delete van een speler
document.getElementById("delete-speler").addEventListener("click", function() {
    const spelerId = document.getElementById("Id_van_speler").value;

    if (!spelerId) {
        alert("Geef een speler ID op.");
        return;
    }

    fetch(`http://localhost:5080/api/Speler/${spelerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het verwijderen van de speler');
            }
            console.log(`Speler met ID ${spelerId} verwijderd`);
            alert(`Speler met ID ${spelerId} succesvol verwijderd!`);
        })
        .catch(error => console.error('Error deleting data:', error));
});
//hier komt de update van een speler
document.getElementById("update-speler").addEventListener("click", function() {
    const spelerId = document.getElementById("update-speler_id").value;

    if (!spelerId) {
        alert("Geef een speler ID op.");
        return;
    }

    const updatedSpeler = {
    spelerId: parseInt(spelerId),
    voornaam: document.getElementById("update-voornaam").value,
    achternaam: document.getElementById("update-achternaam").value,
    fideId: parseInt(document.getElementById("update-fide_id").value) || null,  
    land: document.getElementById("update-land").value,
    geslacht: document.getElementById("update-geslacht").value,
    geboortejaar: parseInt(document.getElementById("update-geboortejaar").value)
    };

    fetch(`http://localhost:5080/api/Speler/${spelerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSpeler)
    })
        
        .then(response => {
    if (!response.ok) {
        throw new Error('Fout bij het updaten van de speler');
    }
    console.log(`Speler met ID ${spelerId} geupdated`);
    alert(`Speler met ID ${spelerId} succesvol geupdated!`);
})
});