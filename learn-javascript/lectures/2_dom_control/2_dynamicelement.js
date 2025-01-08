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
let removebtn = document.querySelector('#target-button');
let inputbox = document.querySelector('#inputbox');
let li_remove_btn = document.querySelector('.remove_btn');

addbtn.addEventListener('click', function () {
  //li라는 tag생성 createElement
  let li_tag = document.createElement('li');
  //btn tag 생성
  let btn_tag = document.createElement('button');
  //class 가 list인 ul_tag가져옴
  let ul_tag = document.querySelector('.list');
  //btntag에 text를 X로 설정
  btn_tag.textContent = 'X';
  //btn태그에 속성 class remonve_btn을 추가함
  btn_tag.setAttribute('class', 'remove_btn');
  //btn태그 추가될때 함수생성
  // btn_tag.addEventListener('click', function (event) {
  //   event.target.parentNode.remove();
  // });

  //btn 태그 함수 삽입
  btn_tag.addEventListener('click', removeParentNode);
  //li에 inputbox text요소 삽입
  li_tag.textContent = inputbox.value;
  //li에 btn삽입
  li_tag.appendChild(btn_tag);
  //prepend 가장앞에 추가
  ul_tag.prepend(li_tag);
  inputbox.value = '';
});

addbeforbtn.addEventListener('click', function () {
  let li_tag = document.createElement('li');
  let btn_tag = document.createElement('button');
  let ul_tag = document.querySelector('.list');
  btn_tag.textContent = 'X';
  btn_tag.classList.add('remove_btn');
  btn_tag.addEventListener('click', removeParentNode);
  li_tag.textContent = inputbox.value;
  li_tag.appendChild(btn_tag);
  ul_tag.appendChild(li_tag);
  inputbox.value = '';
});

removebtn.addEventListener('click', function () {
  let li_target = document.querySelector('li#target');
  //remove tag = 요소삭제
  li_target.remove();
});

li_remove_btn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
}
