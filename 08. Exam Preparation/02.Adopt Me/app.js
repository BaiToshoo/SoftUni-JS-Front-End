window.addEventListener("load", solve);

function solve() {
    const adoptButton = document.getElementById('adopt-btn');
    const adoptionInfoList = document.getElementById('adoption-info');
    const adoptedList = document.getElementById('adopted-list');

    const typeInput = document.getElementById('type');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender')

    adoptButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (typeInput.value === '' || ageInput.value === '' || genderInput.value === '') {
            return;
        }

        const type = typeInput.value;
        const age = ageInput.value;
        const gender = genderInput.value;

        const liElement = createListItemElement(type, age, gender);

        adoptionInfoList.appendChild(liElement);

        clearInputs();
});

function clearInputs() {
    typeInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
}

function createListItemElement(type, age, gender) {
    const pTypeElement = document.createElement('p');
    pTypeElement.textContent = `Pet:${type}`;

    const pGenderElement = document.createElement('p');
    pGenderElement.textContent = `Gender:${gender}`;

    const pAgeElement = document.createElement('p');
    pAgeElement.textContent = `Age:${age}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pTypeElement);
    articleElement.appendChild(pGenderElement);
    articleElement.appendChild(pAgeElement);

    const buttonEditElement = document.createElement('button');
    buttonEditElement.classList.add('edit-btn');
    buttonEditElement.textContent = 'Edit';

    buttonEditElement.addEventListener('click', () => {
        typeInput.value = type;
        ageInput.value = age;
        genderInput.value = gender;

        liElement.remove();
    });

    const buttonDoneElement = document.createElement('button');
    buttonDoneElement.classList.add('done-btn');
    buttonDoneElement.textContent = 'Done';

    buttonDoneElement.addEventListener('click', () => {
        buttonDivElement.remove();

        const clearButtonElement = document.createElement('button');
        clearButtonElement.classList.add('clear-btn');
        clearButtonElement.textContent = 'Clear';

        clearButtonElement.addEventListener('click', () => {
            liElement.remove();
        });

        liElement.appendChild(clearButtonElement);

        adoptedList.appendChild(liElement);
    });


    const buttonDivElement = document.createElement('div');
    buttonDivElement.classList.add('buttons');
    buttonDivElement.appendChild(buttonEditElement);
    buttonDivElement.appendChild(buttonDoneElement);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(buttonDivElement);

    return liElement;
}
}
