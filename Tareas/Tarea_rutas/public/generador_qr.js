// Función para generar el código QR
function generarQR() {
    // Obtener valores de los inputs
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

    // Verificar si todos los campos están completos
    if (!nombre || !correo || !institucion || !dependencia) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Limpiar el contenedor del código QR en caso de que ya exista un código
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.innerHTML = ""; // Limpiar el div

    // Crear un texto concatenado con la información
    const qrText = `Nombre: ${nombre}\nCorreo: ${correo}\nInstitución: ${institucion}\nDependencia: ${dependencia}`;

    // Generar el código QR
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=128x128`;

    // Crear una imagen del código QR
    const qrImage = document.createElement("img");
    qrImage.src = qrApiUrl;
    qrCodeContainer.appendChild(qrImage);
}
