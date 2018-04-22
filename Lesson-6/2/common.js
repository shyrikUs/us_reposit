/*for(var i = 0; i < item.length; i++){
 addEvent(item[i].querySelector('.buy'), 'click', addToCart);
}*/
var basket = document.getElementById('basket');

var buy = document.getElementById('buy');
buy.addEventListener('click', f1);

function f1() {
	price = document.getElementById ('price');
	p1 = document.createElement('div');
	p1.textContent = price;
	console.log (price);
	basket.appendChild (p1);
}

/*	appDiv.innerHTML = '';
	var eventElement = eventObj.target;
	var imagerNameParts = eventElement.id.split('_');
	
	var src = 'img/big/' + imagerNameParts[1] + '.jpg';
	
	var imageDomElement = document.createElement('img');
	imageDomElement.onerror = function(){alert('картинка отсутствует')};
	imageDomElement.src = src;

	//.onerror = function(){alert('картинка не существует')};
	appDiv.appendChild(imageDomElement);

}*/