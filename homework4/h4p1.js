// for loop
let product1 = 1;
let sum1 = 0;
for (let i = 5; i <= 25; i += 4) {
    product1 *= i;
    sum1 += i;
}

document.getElementById('for-loop-result').textContent = 
    `The result of 5 * 9 * 13 * 17 * 21 * 25 is ${product1.toLocaleString()}.\n` +
    `The result of 5 + 9 + 13 + 17 + 21 + 25 is ${sum1.toLocaleString()}.`;

// while loop
let product2 = 1;
let sum2 = 0;
let j = 3;
while (j <= 18) {
    product2 *= j;
    sum2 += j;
    j += 3;
}

document.getElementById('while-loop-result').textContent = 
    `The result of 3 * 6 * 9 * 12 * 15 * 18 is ${product2.toLocaleString()}.\n` +
    `The result of 3 + 6 + 9 + 12 + 15 + 18 is ${sum2.toLocaleString()}.`;

// Draggable
$(function() {
    $("#draggable").draggable();
});