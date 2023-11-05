document.addEventListener("DOMContentLoaded", function() {
    // Automatically update the timestamp field
    let timestampField = document.getElementById("timestamp");
    let currentDate = new Date().toISOString();
    timestampField.value = currentDate.substring(0, 19);

    // Calculate wind chill on input change
    let temperatureInput = document.getElementById("temperature");
    let windSpeedInput = document.getElementById("windSpeed");
    
    temperatureInput.addEventListener("input", calculateWindChill);
    windSpeedInput.addEventListener("input", calculateWindChill);
});
