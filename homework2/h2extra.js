$(document).ready(function () {
    // Show/Hide Instructions
    $('#toggle-instructions').click(function () {
        $('#instructions').toggleClass('hidden');
    });

    // Highlight USD input on focus
    $('#usd').focus(function () {
        $(this).css('background-color', '#ffffcc');
    });

    $('#usd').blur(function () {
        $(this).css('background-color', '');
    });

    // Calculate exchange rates
    $('#usd').on('input', function () {
        const usdAmount = parseFloat($(this).val());

        if (!isNaN(usdAmount)) {
            $('#euro').val((usdAmount * 0.84).toFixed(2));
            $('#cad').val((usdAmount * 1.23).toFixed(2));
            $('#hkd').val((usdAmount * 7.76).toFixed(2));
            $('#jpy').val((usdAmount * 110.80).toFixed(2));
            $('#mxn').val((usdAmount * 19.82).toFixed(2));
        } else {
            $('#euro, #cad, #hkd, #jpy, #mxn').val('');
        }
    });
});
