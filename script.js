const lightbulb1 = document.getElementById('lightbulb1');
const lightbulb2 = document.getElementById('lightbulb2');
const lightbulb3 = document.getElementById('lightbulb3');
const clickCounter = document.querySelector('.subtitle');

let clickCount = 0;

lightbulb1.addEventListener('click', function() {
    lightbulb1.classList.toggle('active');
    clickCount++;
    updateClickCounter();
});

lightbulb2.addEventListener('click', function() {
    lightbulb2.classList.toggle('active');
    clickCount++;
    updateClickCounter();
});

lightbulb3.addEventListener('click', function() {
    lightbulb3.classList.toggle('active');
    clickCount++;
    updateClickCounter();
});

function updateClickCounter() {
    clickCounter.textContent = `You've clicked the lights ${clickCount} times`;
}
