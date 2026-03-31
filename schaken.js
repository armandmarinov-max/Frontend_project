// De Get methode voor spelers code wanneer pagina inlead
document.getElementById("load-data").addEventListener("click", function()
{
    fetch('https://api/restful-api.dev/objects')
        .then(response => response.json())
        .then(data => {
            let results = document.getElementById("results");
            results.innerHTML = "";
            data.forEach(item => {
                let div = document.createElement("div");
                div.className = "GetSpelers";
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Category: ${item.category}</p>
                `;
                results.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
};