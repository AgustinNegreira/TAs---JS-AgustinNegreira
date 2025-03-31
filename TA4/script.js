function sumAll(a, b) {
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    let outcome = 0;

    for (let i = a; i <= b; i++) {
        outcome += i;
    }

    resultado.innerHTML = `Suma total: ${outcome}`;
}