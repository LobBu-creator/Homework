function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const ageGroup = document.querySelector('input[name="ageGroup"]:checked');
    const selectedBrowsers = document.querySelectorAll('input[name="browser"]:checked');
    const movieType = document.getElementById('movieType').value;
    const resultDiv = document.getElementById('result');

    if (!fullName || !ageGroup || selectedBrowsers.length === 0 || !movieType) {
        resultDiv.textContent = "Error: Please fill out all the fields.";
        return;
    }

    resultDiv.textContent = "Thanks, your data was submitted!";
    resultDiv.style.color = "green"; 
}

function clearForm() {
    document.getElementById('userForm').reset();
    document.getElementById('result').textContent = "";
    document.getElementById('result').style.color = "red"; 
}