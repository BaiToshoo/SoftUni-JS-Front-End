const baseURL = 'http://localhost:3030/jsonstore/records';

const loadButton = document.getElementById('load-records');
const recordList = document.getElementById('list');
const addButton = document.getElementById('add-record');
const editButton = document.getElementById('edit-record');
const formElement = document.querySelector('#form form');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

loadButton.addEventListener('click', loadRecords);
addButton.addEventListener('click', addRecord);
editButton.addEventListener('click', editRecord);

function createRecordElement(name, steps, calories, _id) {
    const pName = document.createElement('p');
    pName.textContent = name;
    
    const pSteps = document.createElement('p');
    pSteps.textContent = steps;
    
    const pCalories = document.createElement('p');
    pCalories.textContent = calories;
    
    const divInfo = document.createElement('div');
    divInfo.classList.add('info');
    divInfo.appendChild(pName);
    divInfo.appendChild(pSteps);
    divInfo.appendChild(pCalories);
    
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    
    changeButton.addEventListener('click', async () =>{
        nameInput.value = name;
        stepsInput.value = steps;
        caloriesInput.value = calories;
        
        editButton.removeAttribute('disabled');
        
        addButton.setAttribute('disabled', 'disabled');
        
        formElement.setAttribute('data-record-id', _id);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async () => {
        await fetch(`${baseURL}/${_id}`, {
            method: 'DELETE'
        });
        
        await loadRecords();
    });
    
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('btn-wrapper');
    buttonDiv.appendChild(changeButton);
    buttonDiv.appendChild(deleteButton);
    
    const recordLi = document.createElement('li');
    recordLi.classList.add('record');
    recordLi.appendChild(divInfo);
    recordLi.appendChild(buttonDiv);
    
    return recordLi;
}

async function loadRecords(){
    recordList.innerHTML = '';
    const response = await fetch(baseURL);
    const result = await response.json();
    const records = Object.values(result);
    
    const recordElements = records.map( record => createRecordElement(record.name, record.steps, record.calories, record._id))
    
    recordList.append(...recordElements);
}

async function addRecord() {

    if (!nameInput.value || !stepsInput.value || !caloriesInput.value) {
        return;
    }
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;
    
    clearInputFields();
    await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, steps, calories })
    });
    
    await loadRecords();
    
}

async function editRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;
    const recordId = formElement.getAttribute('data-record-id');

    clearInputFields();
    await fetch(`${baseURL}/${recordId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, steps, calories, _id: recordId })
    });
    
    await loadRecords();
    addButton.removeAttribute('disabled');
    editButton.setAttribute('disabled', 'disabled');

    formElement.removeAttribute('data-record-id');
}

function clearInputFields() {
    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}
