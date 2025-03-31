function leapYear(anio) {
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    let outcome = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

    resultado.innerHTML = `¿El año ${anio} es bisiesto? -> ${outcome ? "Sí" : "No"}`;
}