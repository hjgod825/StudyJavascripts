let rectangle = document.querySelector('#rectangle');

//mousedown 마우스가 요소에서 클릭누를때
rectangle.addEventListener('mousedown', function (e) {
  console.log('마우스다운');
  //e.clientX : x축 위치 e.clientY : Y 축위치
  console.log('e.clientX: ', e.clientX, 'e.clientY :', e.clientY);
  //page,client 차이  client 현재 브라우저 기준 ,page 웹페이지 기준
  console.log('pageX: ', e.pageX, 'e.pageY :', e.pageY);
});
//mouseup 마우스가 요소에서 클릭땔때
rectangle.addEventListener('mouseup', function (e) {
  console.log('마우스업');
  console.log(e.target);
  //getBoundingClientRect 요수의 크기와 뷰포트로 부터 상대적인 위치를 반환
  console.log(e.target.getBoundingClientRect());
});

// //mouseenter 마우스가 해당요소로 갈때
// rectangle.addEventListener('mouseenter', function (e) {
//   console.log('mouseenter');
// });

// //mouseleave 마우스가 요소에서 나갈때
// rectangle.addEventListener('mouseleave', function (e) {
//   console.log('mouseleave');
// });

// //mousemove 마우스가 요소에서 움직일때
// rectangle.addEventListener('mousemove', function (e) {
//   console.log('mousemove');
// });

//클릭한 곳에 원찍기기
// let body = document.querySelector('body');
// body.addEventListener('click', function (e) {
//   let div_tag = document.createElement('div');

//   div_tag.classList.add('circle');
//   div_tag.style.left = e.pageX - 25 + 'px';
//   div_tag.style.top = e.pageY - 25 + 'px';
//   body.appendChild(div_tag);
// });
