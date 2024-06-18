function convertToFahrenheit() {
    const celcius = parseFloat(document.getElementById('celciusInput').value);
    if (isNaN(celcius)) {
        alert('Masukkan nilai derajat Celcius yang valid.');
        return;
    }
    const fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    document.getElementById('calculationSteps').value = `${celcius}°C x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetFields() {
    document.getElementById('celciusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('calculationSteps').value = '';
}

function reverseConversion() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    if (isNaN(fahrenheit)) {
        alert('Masukkan nilai derajat Fahrenheit yang valid.');
        return;
    }
    const celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('celciusInput').value = celcius.toFixed(2);
    document.getElementById('calculationSteps').value = `${fahrenheit}°F - 32 x 5/9 = ${celcius.toFixed(2)}°C`;
}
