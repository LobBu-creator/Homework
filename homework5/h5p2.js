        function openInNewTabMenu1() {
            const selectedUrl = document.getElementById('menu1').value;
            if (selectedUrl) {
                window.open(selectedUrl, '_blank');
            }
        }

        function openInNewTabMenu2() {
            const selectedUrl = document.getElementById('menu2').value;
            if (selectedUrl) {
                window.open(selectedUrl, '_blank');
            }
        }