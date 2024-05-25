// act as a storage
const todoList = [{
    taskName: 'Example',
    dueDate: '2022-12-21'
}];

// to render current list
renderList();

// funtion for rendering new list
function renderList () {
    // var for new html
    let todoListHTML = '';

    todoList.forEach((value) => {
        const todo = value;
        const taskName = todo.taskName;
        const dueDate = todo.dueDate;
        const html = `
            <div class="display-container">
                <span class="task-display">${taskName} </span> <span class="task-date">${dueDate}</span>
                <button class="delete-button">
                    Delete
                </button>
            </div>
        `;
        todoListHTML += html;
    });

    // for(let i = 0; i  < todoList.length; i++) {
    //     const todo = todoList[i];
    //     const taskName = todo.taskName;
    //     const dueDate = todo.dueDate;
    //     const html = `
    //         <div class="display-container">
    //             <span class="task-display">${taskName} </span> <span class="task-date">${dueDate}</span>
    //             <button onclick="
    //                 todoList.splice(${i}, 1);
    //                 renderList();
    //             " class="button">Delete</button>
    //         </div>
    //     `;
    //     todoListHTML += html;
    // }

    // console.log(todoListHTML);
    document.querySelector('.js-display').innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderList();
            });
        });
};

document.querySelector('.add-button')
.addEventListener('click', () => {
    addTask();
});

function addTask () {
    const inputNameElement = document.querySelector('.js-task-name');
    const inputDateElement = document.querySelector('.js-due-date');
    const newTaskName = inputNameElement.value;
    const newDueDate = inputDateElement.value;

    const newTodo = {
        taskName: newTaskName,
        dueDate: newDueDate
    };

     // Push the new task to the todoList array
    if (newTaskName === "" || newDueDate === "") {
        alert("Invalid Task");
    } else {
        todoList.push(newTodo);
    }

    // Log the updated todoList array
    // console.log(todoList);

    // Optionally, clear the input fields after adding the task
    inputNameElement.value = '';
    inputDateElement.value = '';

    renderList();
};
