var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('slide');
for (var i = 0; i<slides.length; i++){
	 slides[i].style.zIndex = slides.length - i;}

next.onclick = function () {
	var activeEl = document.querySelector('.active');
	if (activeEl.nextElementSibling) {
		activeEl.style.opacity = "0";
		activeEl.classList.remove('active');
		activeEl.nextElementSibling.classList.add('active');
		
	}
}
prew.onclick = function () {
	var activeEl = document.querySelector('.active');
	if (activeEl.previousElementSibling) {
		activeEl.previousElementSibling.style.opacity = "1";
		activeEl.classList.remove('active');
		activeEl.previousElementSibling.classList.add('active');
		
	}
}

