var modal = document.getElementById('signUp');
var signUpBtn = document.getElementById('signUpBtn');
var signUpBtn2 = document.getElementById('signUpBtn2');
var modal2 = document.getElementById('signIn');
var signInP = document.getElementById('signInP');
// var signUnP = document.getElementById('signUnP');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

signUpBtn.addEventListener('click', openModal);
signUpBtn2.addEventListener('click', openModal);
signInP.addEventListener('click', openModal2);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
// signUnP.addEventListener('click', openModal);

function openModal(){
    modal2.style.display = 'none';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
}

function openModal2(){
    modal.style.display = 'none';
    modal2.style.display = 'flex';
    modal2.style.alignItems = 'center';
}

function closeModal(){
    modal.style.display = 'none';
    modal2.style.display = 'none';
    // console.log(123); just for test
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
        modal2.style.display = 'none';
    }
}