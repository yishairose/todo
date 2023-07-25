const form = document.querySelector('form');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');
const todoCount = document.querySelector('.todo-count');
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete-btn')
const deleteIcon = '<span class="material-symbols-outlined delete-btn">delete</span>';
let count;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerText = input.value;
    item.innerHTML += deleteIcon;
    item.classList.add('new-item')
    list.appendChild(item);
    input.value = '';
    count = list.childElementCount;
    todoCount.innerText = count;
})

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const parent = e.target.parentElement
        list.removeChild(parent);
        count = list.childElementCount;
        todoCount.innerText = count;

    }
})

clearBtn.addEventListener('click', function () {
    const allItems = list.children;
    const allItemsArray = Array.from(allItems);
    allItemsArray.forEach(function (el) {
        (el.parentElement).removeChild(el);
    })
    count = list.childElementCount;
    todoCount.innerText = count;
})

