$("#calculator").on("submit", function (event) {
    event.preventDefault();

    const left = $("#left").val();
    const right = $("#right").val();
    const operator = $("#operator").val();

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