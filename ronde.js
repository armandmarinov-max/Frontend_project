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