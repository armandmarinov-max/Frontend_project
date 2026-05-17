// De Get methode voor Spel code wanneer pagina inleadt
document.getElementById("load-spel").addEventListener("click", function()
{
    fetch('http://localhost:5080/api/spel')
        .then(response => response.json())
        .then(data => {
            window.alleSpellen = data;
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
            let div = document.createElement("div");
             div.className = "Get-Spel";
             div.innerHTML = `
        <h3>${item.spelId}</h3>
        <p>ToernooiID: ${item.toernooiId}</p>
        <p>RondeID: ${item.rondeId}</p>
        <p>WhiteSpeler: ${item.whiteSpelerId}</p>
        <p>ZwarteSpeler: ${item.blackSpelerId}</p>
        <p>Resultaat: ${item.resultaat}</p>
        <p>SchaakbordNummer: ${item.schaakbordNummer}</p>
    `;
    results.appendChild(div);
});
        })
        .catch(error => console.error('Error fetching data:', error));
});
// hier komt de post funtie voor Spel
document.getElementById("add-spel").addEventListener("click", function() {
    const nieuwSpel = {
    toernooiId: parseInt(document.getElementById("toernooi_id").value),
    rondeId: parseInt(document.getElementById("ronde_id").value),
    whiteSpelerId: parseInt(document.getElementById("White_speler").value),
    blackSpelerId: parseInt(document.getElementById("Black_speler").value),
    resultaat: document.getElementById("resultaat").value,
    schaakbordNummer: parseInt(document.getElementById("schaakbordnummer").value)
    };

    fetch('http://localhost:5080/api/Spel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nieuwSpel)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het toevoegen van het spel');
            }
            return response.json();
        })
        .then(data => {
            console.log('Spel toegevoegd:', data);
           alert(`Spel ${data.spelId} succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});
//hier komt de delete van een spel
document.getElementById("delete-spel").addEventListener("click", function() {
    const spelId = document.getElementById("delete-spel_id").value;

    if (!spelId) {
        alert("Geef een spel ID op.");
        return;
    }

    fetch(`http://localhost:5080/api/Spel/${spelId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fout bij het verwijderen van het spel');
            }
            console.log(`Spel met ID ${spelId} verwijderd`);
            alert(`Spel met ID ${spelId} succesvol verwijderd!`);
        })
        .catch(error => console.error('Error deleting data:', error));
});
//hier komt de update van een spel
document.getElementById("update-spel").addEventListener("click", function() {
    const spelId = document.getElementById("update-spel_id").value;

    if (!spelId) {
        alert("Geef een spel ID op.");
        return;
    }

    const updatedSpel = {
    spelId: spelId,
    toernooiId: document.getElementById("update-toernooi_id").value,
    rondeId: document.getElementById("update-ronde_id").value,
    whiteSpelerId: document.getElementById("update-White_speler").value,
    blackSpelerId: document.getElementById("update-Black_speler").value,
    resultaat: document.getElementById("update-resultaat").value,
    schaakbordNummer: document.getElementById("update-schaakbordnummer").value
};

fetch(`http://localhost:5080/api/Spel/${spelId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedSpel)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Fout bij het updaten van het spel');
    }
    // ✅ Geen .json() want backend geeft NoContent() terug
    alert(`Spel met ID ${spelId} succesvol geupdated!`);
})
.catch(error => console.error('Error updating data:', error));
});