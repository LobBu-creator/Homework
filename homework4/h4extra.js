function generateSquare() {
    // Get the input value
    const size = parseInt(document.getElementById('size').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(size) || size < 2 || size > 10) {
        resultDiv.textContent = "Error: Please enter a number between 2 and 10.";
        return;
    }

    let square = "";

    square += "* ".repeat(size) + "\n";

    for (let i = 0; i < size - 2; i++) {
        square += "*  " + "  ".repeat(size - 2) + "*\n";
    }

    square += "* ".repeat(size) + "\n";

    resultDiv.textContent = square;
}

function clearForm() {
    document.getElementById('size').value = "";
    document.getElementById('result').textContent = "";
}