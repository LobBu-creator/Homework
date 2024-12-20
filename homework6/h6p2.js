        function searchCharacter() {
            const content = document.getElementById("content").value;
            const char = document.getElementById("char").value.trim().toLowerCase();
            
            if (char.length !== 1) {
                document.getElementById("output").innerHTML = "<p style='color: red;'>Please enter exactly one character to search.</p>";
                return;
            }

            let count = 0;
            const contentLower = content.toLowerCase();

            for (let i = 0; i < contentLower.length; i++) {
                if (contentLower.charAt(i) === char) {
                    count++;
                }
            }

            if (count > 0) {
                document.getElementById("output").innerHTML = `<p>The character '${char}' appears ${count} times in your content.</p>`;
            } else {
                const newWindow = window.open("", "MessageWindow", "width=300,height=100");
                newWindow.document.write("<p>Search character '" + char + "' not found in the content you typed.</p>");
                newWindow.document.write('<button onclick="window.close()">Close</button>');
                document.getElementById("output").innerHTML = ""; 
            }
        }