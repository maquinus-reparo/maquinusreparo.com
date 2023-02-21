let restrictedServices = [];

function openPasswordDialog() {
    Swal.fire({
        title: '🐺 La seccion prohibida 🧛🏻',
        input: 'text',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Acceder',
        showLoaderOnConfirm: true,
        preConfirm: async (password) => {
            try {
                await accessRestrictedSection(password)
            } catch (error) {
                Swal.showValidationMessage(error.message);
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        console.log(result.statusText)
    })
}

async function authenticate(password) {
    let response = await fetch(`https://maquinusreparo.azurewebsites.net/api/RestrictedSection?code=Urp-1lAo2Jr11UPx3eFUzeevVMttzEZORud7GyPSqvXiAzFuaHoL1A==&password=${password}`, {
        method: 'POST'
    });
    if (response.ok) return response.json();
    console.log(response)
    return Promise.reject(await response.json());
}

async function accessRestrictedSection(password) {
    let response = await authenticate(password);
    restrictedServices = response;
    if (restrictedServices.length > 0) {
        var html = generateServices(restrictedServices);
        document.getElementById("restrictedServices").innerHTML += html;
    }
    document.getElementById('restrictedSection').innerHTML = 'Hechizos imperdonables';
}