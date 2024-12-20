let num1, num2;

        function generateQuestion() {
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
            document.getElementById('question').textContent = `How much is ${num1} times ${num2}?`;
            document.getElementById('answer').value = '';
            document.getElementById('message').textContent = '';
        }

        function checkAnswer() {
            const userAnswer = parseInt(document.getElementById('answer').value, 10);
            const correctAnswer = num1 * num2;
            const message = document.getElementById('message');

            if (isNaN(userAnswer)) {
                message.textContent = 'Please enter a valid number.';
                message.className = 'error';
                document.getElementById('answer').value = '';
                return;
            }

            if (userAnswer === correctAnswer) {
                message.textContent = 'Very good!';
                message.className = 'result';
                document.getElementById('next-buttons').style.display = 'block';
            } else {
                message.textContent = 'No. Please try again.';
                message.className = 'error';
                document.getElementById('answer').value = '';
            }
        }

        function playAgain(keepPlaying) {
            if (keepPlaying) {
                generateQuestion();
                document.getElementById('next-buttons').style.display = 'none';
            } else {
                document.getElementById('question').textContent = 'Thanks for playing, see you next time!';
                document.getElementById('game-form').style.display = 'none';
                document.getElementById('next-buttons').style.display = 'none';
            }
        }

        window.onload = generateQuestion;