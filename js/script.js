// script.js

function convertToFahrenheit() {
    const celciusInput = document.getElementById("celciusInput").value;
    const fahrenheitResult = (parseFloat(celciusInput) * 9/5) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheitResult.toFixed(2);
    document.getElementById("calculationSteps").value = `(${celciusInput} x 9/5) + 32 = ${fahrenheitResult.toFixed(2)}`;
}

function resetFields() {
    document.getElementById("celciusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("calculationSteps").value = "";
}

function reverseConversion() {
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const celciusResult = (parseFloat(fahrenheitInput) - 32) * 5/9;
    document.getElementById("celciusInput").value = celciusResult.toFixed(2);
    document.getElementById("calculationSteps").value = `(${fahrenheitInput} - 32) x 5/9 = ${celciusResult.toFixed(2)}`;
}
