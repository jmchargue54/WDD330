/*
onLoad
    check allow input box, hide or show form appropriately
    check local storage, render out any stored expenses
build html
    add checkbox: allow input
    build expense entry form
    add click listener to checkbox
        if checked show form
        else hide form
    add add submit listener to form
        get values from form
        create new object for expense
        add to expense list
        update local storage
        clear form
        render expenses
*/

function setLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getLS(key){
    return JSON.parse(localStorage.getItem(key));
}

const allowBox = document.querySelector('#allow');

function allowHandler() {
    const formEl = document.querySelector('.form');
    console.dir(allowBox);
    if (allowBox.checked) {
        formEl.classList.remove('hide');
    } else {
        formEl.classList.add('hide');
    }
}


allowBox.addEventListener('change', allowHandler);