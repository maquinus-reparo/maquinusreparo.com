async function getServices() {
    return await (await fetch("data/services.json")).json();
}

function paintServices() {
    getServices().then(services => {
        var html = generateServices(services);
        document.getElementById("services").innerHTML = html;
    });
}

function generateServices(services) {
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
                        <p class="${service.disclaimer ? "disclaimer" : ""}">${service.disclaimer ?? ""}</p>
                    </div>
                    <div class="card-footer">
                        <div class="content">
                            <a href="https://ig.me/m/maquinusreparo" class="money">$ ${service.price} MXN</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        html += card;
    });
    return html;
}