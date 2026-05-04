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