function repeatString(texto, repeticiones) {
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";
    
    for (let i=0; i<repeticiones; i++) {
        resultado.innerHTML += texto + "<br>";
    }
}