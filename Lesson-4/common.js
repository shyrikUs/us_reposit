//Задание 1
var number = +prompt ('Введите число от 0 до 999');

 function numberToObject (number) {
	if (number>999) {
		console.log ('число перевышает 999, введите в диапазоне от 0 до 999');
		return null;
	} else if (number == 0){
		console.log ('введите число больше 0');
		return null;
	} 
	else {
		console.log(new Obj(number));
	}
	
}

function Obj (number) {
	var a = { единицы : number%10, десятки: parseInt(number/10%10), сотни : parseInt(number/100)};
	return a;
}

numberToObject (number);
