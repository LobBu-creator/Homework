        $(document).ready(function() {
            $('#phone').mask('(000) 000-0000');
        });

        function processPhoneNumber() {
            const phone = document.getElementById("phone").value;
            const output = document.getElementById("output");

            const phonePattern = /^\((\d{3})\) (\d{3})-(\d{4})$/;

            const match = phone.match(phonePattern);

            if (match) {
                document.getElementById("areaCode").value = match[1];
                document.getElementById("firstThree").value = match[2];
                document.getElementById("lastFour").value = match[3];
                output.innerHTML = ""; 
            } else {
                document.getElementById("areaCode").value = "";
                document.getElementById("firstThree").value = "";
                document.getElementById("lastFour").value = "";
                output.innerHTML = "<p>Please enter the phone number in the correct format: (999) 999-9999</p>";
            }
        }

        function clearForm() {
            document.getElementById("phone").value = "";
            document.getElementById("areaCode").value = "";
            document.getElementById("firstThree").value = "";
            document.getElementById("lastFour").value = "";
            document.getElementById("output").innerHTML = "";
        }