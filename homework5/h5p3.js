const statesData = [
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"]
];

function getStateInfo() {
    const userInput = document.getElementById("stateInput").value.trim().toLowerCase();
    let stateFound = false;

    for (let i = 0; i < statesData.length; i++) {
        const stateAbbr = statesData[i][0].toLowerCase();
        const stateName = statesData[i][1].toLowerCase();

        if (userInput === stateAbbr || userInput === stateName) {
            stateFound = true;
            document.getElementById("output").innerHTML = `
                <h3>Thanks for your inquiry, here is the information you requested:</h3>
                <p><strong>State abbr:</strong> ${statesData[i][0]}</p>
                <p><strong>State Name:</strong> ${statesData[i][1]}</p>
                <p><strong>Capital:</strong> ${statesData[i][2]}</p>
                <p><strong>Population:</strong> ${statesData[i][3]}</p>
            `;
            break;
        }
    }

    if (!stateFound) {
        document.getElementById("output").innerHTML = `
            <p style="color: red;">Sorry, we do not have information about this state! We only have information about: 
            Alabama, Alaska, Arizona, Arkansas, California, Colorado.</p>
        `;
    }
}

function clearForm() {
    document.getElementById("stateInput").value = "";
    document.getElementById("output").innerHTML = "";
}