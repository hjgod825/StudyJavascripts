// let addbtn = document.getElementById('button');

// addbtn.addEventListener('click', function () {
//   click();
// });

// function click() {
//   alert('클릭하셨습니다.');
// }

// let beforaddbtn = document.getElementById('before');

// beforaddbtn.addEventListener('click', function () {
//   // let li_tag = document.createElement('li');
//   // let ul_tag = document.querySelector('.list');
//   // console.log(ul_tag);
//   // li_tag.textContent = '렛풀다운';
//   let li_tag = document.createElement('li');
//   let ul_tag = document.querySelector('ul');
//   li_tag.textContent = '렛풀다운';
//   ul_tag.appendChild(li_tag);
// });

// let inputbox_tag = document.querySelector('#inputbox');

let addbtn = document.querySelector('#button');
let addbeforbtn = document.querySelector('#before');

addbtn.addEventListener('click', function () {
  let inputbox = document.querySelector('#inputbox');
  let li_tag = document.createElement('li');
  let ul_tag = document.querySelector('.list');
  li_tag.textContent = inputbox.value;
  //prepend 가장앞에 추가
  ul_tag.prepend(li_tag);
  inputbox.value = '';
});
addbeforbtn.addEventListener('click', function () {
  let inputbox = document.querySelector('#inputbox');
  let li_tag = document.createElement('li');
  let ul_tag = document.querySelector('.list');
  li_tag.textContent = inputbox.value;
  ul_tag.appendChild(li_tag);
  inputbox.value = '';
});
