const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const shouldDelete = confirm("Do you want to remove this TO DO?");

        if (shouldDelete) {
            todo.remove();
            saveTodos();
        }
    });

    list.prepend(todo);
}

function saveTodos() {
    const todos = [];

    list.querySelectorAll(".todo").forEach(function (todo) {
        todos.push(todo.textContent);
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