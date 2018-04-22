function init() {
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener ('click', changeBigPicture);
	}


}

function changeBigPicture(eventObj) {
	var appDiv = document.getElementById('big_picture');
	appDiv.innerHTML = '';
	var eventElement = eventObj.target;
	var imagerNameParts = eventElement.id.split('_');
	
	var src = 'img/big/' + imagerNameParts[1] + '.jpg';
	
	var imageDomElement = document.createElement('img');
	imageDomElement.onerror = function(){alert('картинка отсутствует')};
	imageDomElement.src = src;

	//.onerror = function(){alert('картинка не существует')};
	appDiv.appendChild(imageDomElement);

}

window.onload = init;
