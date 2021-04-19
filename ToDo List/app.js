const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search value");


const generateTemp = todo =>{
const temp = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fas fa-minus-circle delete"></i>
    </li>
`;

list.innerHTML += temp;
};

//add ToDos
addForm.addEventListener('submit',e => {
    e.preventDefault();
    const todos = addForm.add.value.trim();

    if(todos.length)
    generateTemp(todos);
    addForm.reset(); 

});

// Delete task
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    e.target.parentElement.remove();
});

// Search ToDo

const filterToDos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"));
        
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("filtered"));
};

//Keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  });