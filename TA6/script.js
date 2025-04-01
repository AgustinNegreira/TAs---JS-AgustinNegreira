function convertToCelsius(temp) {
    
    document.getElementById("resultado").innerHTML = `${temp}°F → ${(temp - 32) * (5 / 9).toFixed(1)}°C`;
}

function convertToFarenheit(temp) {
    
    document.getElementById("resultado").innerHTML = `${temp}°C → ${((temp * 9 / 5) + 32).toFixed(1)}°F`;
}