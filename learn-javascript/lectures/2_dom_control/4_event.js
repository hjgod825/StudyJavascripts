let propertybtn = document.querySelector('.property');
let AddEventbtn = document.querySelector('.ADDEL');

// console.log(propertybtn);
// console.log(AddEventbtn);

//이벤트 등록
propertybtn.onclick = function () {
  alert('Hello 프로퍼티 Listener');
};

AddEventbtn.addEventListener('click', helloenvent1);
function helloenvent1() {
  alert('Hello addEventListener 1');
}

AddEventbtn.addEventListener('click', helloenvent2);
function helloenvent2() {
  alert('Hello addEventListener 2');
}

//이벤트 삭제
AddEventbtn.removeEventListener('click', helloenvent1);
