let data = [
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

addUserBtn.addEventListener('click', addUser);

let tbody = document.querySelector('table tbody');

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }

    tbody.append(tr);
}

function addUser() {
    let firstName = prompt('input name', 'Vasya');
    let lastName = prompt('input last name', 'Pypkin');
    let age = prompt('input age', 40);
    let tr = document.createElement('tr');
    tr.innerHTML = `            
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>`;
    tbody.append(tr);
}

function deleteUser(userName) {
    tdArr = tbody.querySelectorAll('td');
    for(let i = 0; i < tdArr.length; i++) {
        if (userName === tdArr[i].innerHTML) {
                let tr = tdArr[i].closest('tr');
                tr.remove();
        }
    }
}

deleteUser('Pitt');


 