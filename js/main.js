'use strict';

let books = document.querySelectorAll('.book');
let book3Title = books[4].querySelector('h2 a');
let adv = document.querySelector('.adv');
let book2Chapters = books[0].querySelectorAll('li');
let book5Chapters = books[5].querySelectorAll('li');
let book6Chapters = books[2].querySelectorAll('li');


books[0].before(books[1]);
books[5].after(books[2]);
books[0].after(books[4]);
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book3Title.innerHTML = 'Книга 3. this и Прототипы Объектов';
adv.remove();
book2Chapters[9].after(book2Chapters[2]);
book2Chapters[6].after(book2Chapters[8]);
book2Chapters[8].after(book2Chapters[4]);
book2Chapters[4].after(book2Chapters[5]);
book5Chapters[5].after(book5Chapters[8]);
book5Chapters[8].after(book5Chapters[10]);
book5Chapters[1].after(book5Chapters[9]);
book5Chapters[4].after(book5Chapters[2]);
book5Chapters[2].after(book5Chapters[6]);
book5Chapters[6].after(book5Chapters[7]);
let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
book6Chapters[9].before(newChapter);
console.log(book6Chapters);
