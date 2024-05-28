// Selectors
const modal = document.querySelector('#modal');
const close_modal = document.querySelector('#close');
const open_modal_btn = document.querySelector('#open_modal');
const Add = document.querySelector('#add');
const input_todo = document.querySelector('#input_todo');
const form = document.querySelector('#form');
const todo_area = document.querySelector('#todo-area');
const todo_li = document.querySelectorAll('.list-item');

// Array to store todo object
let todos = [];
let count = 0

// Function to set todo area display style
const TodoArea = (displayStyle) => todo_area.style.display = `${displayStyle}`;

// Initially hide the todo area
TodoArea('none')

// Add Todo
const AddTodo = (e) => {
    e.preventDefault();

    const value_input = input_todo.value;

    // Todo Obj
    const Todo = {
        todo_text: value_input,
        todo_id: count++,
        completed: false
    };

    if (!Todo.todo_text || !Todo.todo_text.trim("")) {
        alert('Input cannot be empty!');
    } else {
        todos = [...todos, Todo];
        TodoArea('flex')
        RenderTodos()
        CloseModal();
        input_todo.value = '';
    }
};

// Render Todo
const RenderTodos = () => {
    if (!todos.length) {
        TodoArea('none');
    } else {
        TodoArea('flex');
        todo_area.innerHTML = ''

        let Year = new Date().toLocaleDateString();
        let Time = Date().slice(16, 21);

        todos.forEach((todo) => {
            todo_area.innerHTML += `
                <li onClick='Completed(${todo.todo_id})' class='list-item'>
                    <div>
                        <input class="checkbox" type="checkbox">
                        <div>
                            <span>${todo.todo_text}</span>
                            <span class="date">${Time}, ${Year}</span>
                        </div>
                    </div>
                    <div>
                        <button onClick='DeleteTodo(${todo.todo_id})'>Delete</button>
                        <button onClick='EditTodo(${todo.todo_id})'>Edit</button>
                    </div>
                </li>
            `;
        });
    }
};

// Delete Todo
const DeleteTodo = (id) => {
    todos = todos.filter(todo => todo.todo_id !== id);
    RenderTodos();
};

// Edit Todo 
const EditTodo = (id) => {
    const index = todos.findIndex(todo => todo.todo_id === id);
    input_todo.value = todos[index].todo_text;
    Add.textContent = 'Update';

    // Remove the todo item from the todos array
    todos.splice(index, 1);

    OpenModal();
};

// Check control
const Completed = (id) => {
    const index = todos.findIndex(todo => todo.todo_id === id);
    const todo_li = document.querySelectorAll('.list-item');
    const boxes = document.querySelectorAll('.checkbox');

    todo_li.forEach((el, i) => {
        if (i === index) {
            todos[index].completed = !todos[index].completed;
            boxes[i].checked = todos[index].completed;
            el.classList.toggle('active');
        }
    });

    console.log(todos)
};

// Open Modal
const OpenModal = () => {
    modal.classList.add('active');
};

// Close Modal
const CloseModal = () => {
    modal.classList.remove('active');
};

// Create Functions
form.addEventListener('submit', AddTodo);
close_modal.addEventListener('click', CloseModal);
open_modal_btn.addEventListener('click', OpenModal);