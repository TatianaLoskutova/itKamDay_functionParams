function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

let firstNameId = 'first-name';
let firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

let addressId = 'address';
let addressEl = document.getElementById(addressId);
alertValues(addressEl);

let citiesId = 'cities';
let citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

let hobbiesId = 'hobbies';
let hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);

let avatarWrapperId = 'avatar-wrapper';
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = 'avatar';
let avatarEl = document.getElementById(avatarId);

firstNameEl.value = 'Andrey';
// alertValues(firstNameEl);

lastNameEl.className = 'last-name-input default-input error-input';
// alertValues(lastNameEl);

lastNameEl.title = 'Wrong last name';
// alertValues(lastNameEl);

firstNameEl.className = 'new-class';
// alertValues(firstNameEl);

avatarEl.src = 'https://avatars.mds.yandex.net/i?id=2a00000179fc1ceb9bc245930ab6dd819355-4236087-images-thumbs&n=13';

avatarEl.title = 'I am avatar';

citiesEl.value = 'Minsk2';

hobbiesEl.value = 'I am not interested';

avatarWrapperEl.innerHTML = '<ul id = \'list\'><li>1</li><li>2</li></ul>';

let listId = 'list';
let numberList = document.getElementById(listId);

console.log(numberList.innerHTML);

