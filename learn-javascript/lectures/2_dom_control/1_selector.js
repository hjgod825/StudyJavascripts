//get]
//ID요소로 받아옴
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);

console.log('스쿼트', items[0]);
console.log('밴치', items[1]);
console.log('데드', items[2]);

let ullist = document.getElementsByTagName('li');
console.log(ullist);

//qurey]
//qureyselector = CSS가져옴
//ALL 지정된 선택자에 일치하는 요소 목록모두 반환

let h2 = document.querySelector('#title');
console.log('h2" :', h2);

//qurey select 는 하나만 조회함.
let lists = document.querySelector('.item');

console.log('lists : ', lists);

let lists2 = document.querySelectorAll('.item');
console.log('lists2 : ', lists2);
