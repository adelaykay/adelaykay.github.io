const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const template = `<li class="list-group-item d-flex  justify-content-between align-items-center">
    <span>${todo}</span>
    <i class=" edit ms-auto me-4 fa-solid fa-pen-to-square"></i>
    <i class="far fa-trash-alt delete"></i>
</li>`;
    list.innerHTML += template;
}

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
    }
    addForm.reset();
});

//edit todos
list.addEventListener('click', e => {
   
    if(e.target.classList.contains('edit')){
        addForm.add.value = e.target.parentElement.textContent.trim();
        addForm.add.focus();
        e.target.parentElement.remove();
    }
});

// delete todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

//filter todos
const filterTodos = term => {
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();
    filterTodos(term);
});
