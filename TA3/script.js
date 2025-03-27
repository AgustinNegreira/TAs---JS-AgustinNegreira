function removeFromArray(texto) {
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    resultado.innerHTML =  texto.split("").reverse().join("");
}