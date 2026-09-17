$("#newBtn").on("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

function createTodo(text) {
    const todo = $("<div>")
        .addClass("todo")
        .text(text);

    todo.on("click", function () {
        const shouldDelete = confirm("Do you want to remove this TO DO?");

        if (shouldDelete) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function saveTodos() {
    const todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos))
        + "; max-age=31536000; path=/";
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");

        if (name === "todos") {
            const todos = JSON.parse(decodeURIComponent(value));

            todos.reverse().forEach(function (todo) {
                createTodo(todo);
            });

            break;
        }
    }
}

loadTodos();