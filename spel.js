// De Get methode voor Spel code wanneer pagina inleadt
document.getElementById("load-spel").addEventListener("click", function()
{
    fetch('localhost:5080/api/spel')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "Get-Spel";
                div.innerHTML = `
                    <h3>${item.spel_id}</h3>
                    <p>ToernooiID: ${item.toernooi_id}</p>
                    <p>RondeID: ${item.ronde_id}</p>
                    <p>WhiteSpeler: ${item.white_speler_id}</p>
                    <p>ZwarteSpeler: ${item.black_speler_id}</p>
                    <p>Resultaat: ${item.resultaat}</p>
                    <p>SchaakbordNummer: ${item.schaakbord_nummer}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
// hier komt de post funtie voor Spel
document.getElementById("add-spel").addEventListener("click", function() {
    const nieuwSpel = {
        spel_id: document.getElementById("spel_id").value,
        toernooi_id: document.getElementById("toernooi_id").value,
        ronde_id: document.getElementById("ronde_id").value,
        white_speler: document.getElementById("White_speler").value,
        black_speler: document.getElementById("Black_speler").value,
        resultaat: document.getElementById("resultaat").value,
        schaakbordnummer: document.getElementById("schaakbordnummer").value
    };

    fetch('localhost:5080/api/Spel', {
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
            alert(`Spel ${data.spel_id} succesvol toegevoegd!`);
        })
        .catch(error => console.error('Error posting data:', error));
});
//hier komt de delete van een spel
document.getElementById("delete-spel").addEventListener("click", function() {
    const spelId = document.getElementById("spel_id").value;

    if (!spelId) {
        alert("Geef een spel ID op.");
        return;
    }

    fetch(`localhost:5080/api/Spel/${spelId}`, {
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