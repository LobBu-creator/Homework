$(function () {
    $("#salespersonName").tooltip();

    const prices = [20.99, 12.75, 9.95, 35.89];

    $("#calculateBtn").on("click", function () {
        let totalSold = 0;
        let isValid = true;

        $("#salesForm input[type='number']").each(function (index) {
            const value = parseFloat($(this).val()) || 0;
            if (value < 0) {
                alert("Quantity of items sold cannot be negative.");
                isValid = false;
                return false;
            }
            totalSold += value * prices[index];
        });

        if (!isValid) return;

        const baseSalary = 250;
        const commission = totalSold * 0.09;
        const totalEarnings = baseSalary + commission;

        $("#totalSold").val(totalSold.toFixed(2));
        $("#totalEarnings").val(totalEarnings.toFixed(2));
    });
});