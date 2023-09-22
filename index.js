function changeImg() {
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

var imgPath1 = './images/dice' + randNum1 + '.jpg';
var imgPath2 = './images/dice' + randNum2 + '.jpg';


var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];

img1.setAttribute('src', imgPath1);
img2.setAttribute('src', imgPath2);

if (randNum1 > randNum2) {
    document.querySelector('h1').innerHTML = ('Player 1 Wins');
}

else if (randNum1 < randNum2) {
    document.querySelector('h1').innerHTML = ('Player 2 Wins');
}

else {
    document.querySelector('h1').innerHTML = ('Draw');
}
}

window.addEventListener('load', changeImg);



