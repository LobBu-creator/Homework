function processNumber() {
    const userInput = document.getElementById("numberInput").value.trim();
    const number = parseFloat(userInput);

    if (isNaN(number) || userInput.split('.')[1]?.length < 4) {
        document.getElementById("output").innerHTML = "<p style='color: red;'>You need to type a number with at least 4 decimals, please try again.</p>";
        return;
    }

    const roundedInteger = Math.round(number);
    const squareRoot = Math.sqrt(number);
    const roundedTenth = number.toFixed(1);
    const roundedHundredth = number.toFixed(2);
    const roundedThousandth = number.toFixed(3);

    document.getElementById("output").innerHTML = `
        <h3>You typed number ${userInput}</h3>
        <p><strong>Rounded to the nearest integer:</strong> ${roundedInteger}</p>
        <p><strong>Square root rounded to integer:</strong> ${Math.round(squareRoot)}</p>
        <p><strong>Rounded to the nearest 10th position:</strong> ${roundedTenth}</p>
        <p><strong>Rounded to the nearest 100th position:</strong> ${roundedHundredth}</p>
        <p><strong>Rounded to the nearest 1000th position:</strong> ${roundedThousandth}</p>
    `;
}

function clearForm() {
    document.getElementById("numberInput").value = "";
    document.getElementById("output").innerHTML = "";
}