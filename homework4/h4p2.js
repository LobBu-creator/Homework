$(document).ready(function() {
    const principal = 1000;
    const years = 5;
    const interestRates = [0.05, 0.06, 0.07];

    let tableHTML = "";
    interestRates.forEach(function(rate) {
        tableHTML += `
            <h2 style="color: white;">Interest Rate: ${rate * 100}%</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Amount on Deposit</th>
                        <th>Interest Rate</th>
                    </tr>
                </thead>
                <tbody>`;

        for (let n = 1; n <= years; n++) {
            const amount = (principal * Math.pow(1 + rate, n)).toFixed(2);
            tableHTML += `
                <tr>
                    <td>${n}</td>
                    <td>${amount}</td>
                    <td>${rate}</td>
                </tr>`;
        }

        tableHTML += `</tbody></table>`;
    });

    $('#tables').html(tableHTML);
});