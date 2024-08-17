const baseURL = 'http://localhost:3030/jsonstore/records';

const loadButton = document.getElementById('load-records');
const recordList = document.getElementById('list');

loadButton.addEventListener('click', async () => {
    recordList.innerHTML = '';
    const response = await fetch(baseURL);
    const result = await response.json();
    const records = Object.values(result);

    const recordElements = records.map( record => createRecordElement(record.name, record.steps, record.calories, record._id))

    recordList.append(...recordElements);

});

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

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

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
