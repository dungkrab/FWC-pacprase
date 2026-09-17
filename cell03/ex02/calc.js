const form = document.getElementById("calculator");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
    const operator = document.getElementById("operator").value;

    if (!/^\+?\d+$/.test(left) || !/^\+?\d+$/.test(right)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    const a = Number(left);
    const b = Number(right);
 
    if ((operator === "/" || operator === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);