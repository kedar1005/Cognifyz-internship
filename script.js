// Change color function
function changeColor() {
    var button = document.getElementById("colorButton");
    button.style.backgroundColor = button.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

// Greeting function
function showGreeting() {
    var currentHour = new Date().getHours();
    var greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

// Calculator function
function calculate(event) {
    event.preventDefault();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById("result").textContent = "Result: " + result;
}

// Call the greeting function when the page loads
window.onload = function() {
    showGreeting();
};
