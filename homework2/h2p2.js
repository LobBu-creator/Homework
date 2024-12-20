function calculate(event) {
    event.preventDefault(); 

    let fnum = parseFloat(document.getElementById("fnum").value);
    let snum = parseFloat(document.getElementById("snum").value);
    let tnum = parseFloat(document.getElementById("tnum").value);


    if (isNaN(fnum) || isNaN(snum) || isNaN(tnum)) {
        let resultText = "NaN: One or more inputs are missing or invalid.";
        document.getElementById("res").value = resultText;
        return;
    }

    let sum = fnum + snum + tnum;
    let average = sum / 3;
    let product = fnum * snum * tnum;


    let numbers = [fnum, snum, tnum];
    let sortedNumbers = numbers.slice().sort((a, b) => a - b);
    let smallest = sortedNumbers[0];
    let largest = sortedNumbers[2];


    let resultText = `
Sum: The sum of the three numbers is ${sum}.
Average: The average of the three numbers is ${average}.
Product: The product of the three numbers is ${product}.
Smallest to Largest: The smallest number is ${smallest}, and the largest number is ${largest}.
`;

    document.getElementById("res").value = resultText;
}

function clearFields() {
    document.getElementById("fnum").value = "";
    document.getElementById("snum").value = "";
    document.getElementById("tnum").value = "";
    document.getElementById("res").value = "";
}

window.onload = function () {
    document.getElementById("clear").addEventListener("click", clearFields);
    document.getElementById("submit").addEventListener("click", calculate);
};