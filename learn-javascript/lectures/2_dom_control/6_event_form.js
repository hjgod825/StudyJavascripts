let inputbox = document.querySelector('#inputbox');

// inputbox.addEventListener('keypress', function (e) {
//   console.log('keypress');
// });

// inputbox.addEventListener('keydown', function (e) {
//   console.log('keydown');
// });

// inputbox.addEventListener('keyup', function (e) {
//   console.log('key: ', e.key, 'keyCode :', e.keyCode);
// });

//키보드 유용한 이벤트
//1.key = 사용자가 누른 키값 반환
//2.keyCode = 사용자가 누른 키 아스키코드값 반환

//focus 같을때
// inputbox.addEventListener('focus', function (e) {
//   alert('fouces');
// });
//blur 포커스 떠났을떄
// inputbox.addEventListener('blur', function (e) {
//   alert('blur');
// });

//change 바뀌었을때
// inputbox.addEventListener('change', function (e) {
//   alert('change');
// });

let img = document.querySelector('img');

img.addEventListener('error', function (e) {
  console.log('error');
  // e.target.src = '../../apple.jpg';
});
