let belakang = document.getElementById('belakang');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let depan = document.getElementById('depan');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    belakang.style.top = value * 0.35 + 'px';
    text.style.marginRight = value * 3 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})