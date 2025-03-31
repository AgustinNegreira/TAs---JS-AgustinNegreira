function removeFromArray(texto, array) {
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    const indice = array.indexOf(texto);

    array.splice(indice, 1);

    resultado.innerHTML = array;
}