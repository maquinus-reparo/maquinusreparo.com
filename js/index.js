async function getServices() {
    return await (await fetch("data/services.json")).json();
}

getServices().then(services => {
    let html = '';
    services.forEach(service => {
        const card = `
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3 mb-3">
                <div class="card">
                    <div class="card-header">
                        ${service.spell}
                    </div>
                    <div class="card-body">
                        <img src="${service.icon}" class="card-icon" />
                        <p>${service.description}</p>
                    </div>
                </div>
            </div>
        `;
        html += card;
    });
    document.getElementById("services").innerHTML = html;
});
