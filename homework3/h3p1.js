        document.getElementById('submitBtn').addEventListener('click', function() {
            const hwAvg = parseInt(document.getElementById('hwAvg').value);
            const midExam = parseInt(document.getElementById('midExam').value);
            const finalExam = parseInt(document.getElementById('finalExam').value);
            const participation = parseInt(document.getElementById('participation').value);
            const outputDiv = document.getElementById('output');

            outputDiv.innerHTML = '';

            if (
                isNaN(hwAvg) || isNaN(midExam) || isNaN(finalExam) || isNaN(participation) ||
                hwAvg < 0 || hwAvg > 100 ||
                midExam < 0 || midExam > 100 ||
                finalExam < 0 || finalExam > 100 ||
                participation < 0 || participation > 100
            ) {
                outputDiv.innerHTML = '<p class="error">Error: Please enter valid numbers between 0 and 100 for all fields.</p>';
                return;
            }

            const finalAverage = Math.round((0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation));
            let letterGrade;

            if (finalAverage >= 90) {
                letterGrade = 'A';
            } else if (finalAverage >= 80) {
                letterGrade = 'B';
            } else if (finalAverage >= 70) {
                letterGrade = 'C';
            } else if (finalAverage >= 60) {
                letterGrade = 'D';
            } else {
                letterGrade = 'F';
            }

            outputDiv.innerHTML = `<p>Final Average: ${finalAverage}</p>` +
                                  `<p>Letter Grade: ${letterGrade}</p>`;

            if (letterGrade === 'D' || letterGrade === 'F') {
                outputDiv.innerHTML += '<p class="error">Student must retake the course.</p>';
            }
        });
