let myImage = document.querySelector('img');

yImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/RandiReyna2.jpg') {
        myImage.setAttribute('src', 'RandiReyna2.jpg');
    } else {
        myImage.setAttribute('src', 'images/RandiReyna2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nice to meet you, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nice to meet you, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}