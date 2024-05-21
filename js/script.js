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

    for(let i = 0; i  < todoList.length; i++) {
        const todo = todoList[i];
        const taskName = todo.taskName;
        const dueDate = todo.dueDate;
        const html = `
            <div class="display-container">
                <p>${taskName} ${dueDate}</p>
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderList();
                ">Delete</button>
            </div>
        `;
        todoListHTML += html;
    }

    // console.log(todoListHTML);
    document.querySelector('.js-display').innerHTML = todoListHTML;
};

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
     todoList.push(newTodo);

    // Log the updated todoList array
    // console.log(todoList);

    // Optionally, clear the input fields after adding the task
    inputNameElement.value = '';
    inputDateElement.value = '';

    renderList();
};
