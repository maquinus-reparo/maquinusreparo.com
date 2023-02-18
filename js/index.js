async function getServices() {
    return await (await fetch("data/services.json")).json();
}

getServices().then(services => {
    let html = '';
    services.forEach(service => {
        const card = `
            <div class="card">
                <div class="card-header">
                    ${service.spell}
                </div>
                <img src="${service.icon}" class="card-icon" />
                <div class="card-body">
                    ${service.description}
                </div>
            </div>
        `;
        html += card;
    });
    document.getElementById("services").innerHTML = html;
});
