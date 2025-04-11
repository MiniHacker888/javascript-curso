// Función que actualiza la imagen y texto al pasar el ratón
function upDate(previewPic) {
    const previewBox = document.getElementById("image");
    const imgUrl = previewPic.src;
    const altText = previewPic.alt;

    previewBox.style.backgroundImage = `url('${imgUrl}')`;
    previewBox.innerText = altText;
    previewBox.style.color = "#d81b60";
    previewBox.style.fontSize = "1.6rem";
    previewBox.style.textShadow = "1px 1px 2px #555";
}

// Función que restaura el contenido original al quitar el ratón
function unDo() {
    const previewBox = document.getElementById("image");

    previewBox.style.backgroundImage = "";
    previewBox.innerText = "Pase el ratón por encima de una imagen para mostrarla aquí";
    previewBox.style.color = "#6a1b9a";
    previewBox.style.fontSize = "20px";
    previewBox.style.textShadow = "none";
}
