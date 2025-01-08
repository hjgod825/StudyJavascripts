let h2 = document.querySelector('h2');
h2.dataset.test = 'hellojavascripts';
console.log('h2.dataset.test  : ', h2.dataset.test);

let imglis = document.querySelectorAll('ul li');
let selectedItem = document.querySelector('.selecteditem');

imglis.forEach((li) => {
  li.addEventListener('click', changeimg);
});

function changeimg(event) {
  let img = document.querySelector('#furit');
  img.setAttribute('src', event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
}
