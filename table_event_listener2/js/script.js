const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
const addUserBtn = document.querySelector('.add_user_btn');
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');

function addUser() {
    console.log('sd');
    
    /*let firstName = prompt('input name', 'Vasya');
    let lastName = prompt('input last name', 'Pypkin');
    let age = prompt('input age', 40);
    let tr = document.createElement('tr');

    tr.innerHTML = `            
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>`;
    addTdWithBtns(tr);
    tbody.append(tr);*/
}
function deleteUser() {
    let deleteTr = this.closest('tr');
    deleteTr.remove();
}
function addTdWithBtns(tr) {
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');

    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';

    deleteUserBtn.addEventListener('click', deleteUser);

    deleteUserBtn.innerHTML = '-';
    editUserBtn.innerHTML = 'edit';

    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
}

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }

    addTdWithBtns(tr);
    
    tbody.append(tr);
}

addUserBtn.addEventListener('click', addUser);
formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
});


 