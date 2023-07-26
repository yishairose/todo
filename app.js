const form = document.querySelector('form');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');
const todoCount = document.querySelector('.todo-count');
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete-btn')
const editBtn = document.querySelector('.edit-btn')
const deleteIcon = '<div><span class="material-symbols-outlined edit-btn">edit</span><span class="material-symbols-outlined delete-btn">delete</span><div>';
let count;
let editStatus = false;
let currentItem;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (editStatus === false) {
        const item = document.createElement('div');
        item.classList.add('item');
        const newP = document.createElement('p');
        newP.innerText = input.value;
        item.appendChild(newP)
        item.innerHTML += deleteIcon;
        item.classList.add('new-item')
        list.appendChild(item);
        input.value = '';
        count = list.childElementCount;
        todoCount.innerText = count;
    } else {
        currentItem.children[0].innerText = input.value;
        editStatus = false;
        input.value = '';

    }
})

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const parent = e.target.parentElement.parentElement
        list.removeChild(parent);
        count = list.childElementCount;
        todoCount.innerText = count;

    }
})

list.addEventListener('click', function (e) {
    editStatus = true;
    if (e.target.classList.contains('edit-btn')) {
        const parent = e.target.parentElement.parentElement;
        const todoValue = parent.children[0].innerText;
        input.value = todoValue;
        currentItem = parent;
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





