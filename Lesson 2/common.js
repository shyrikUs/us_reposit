alert('Задание 1');
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - префиксная форма записи инкримента, сначала производит операцию +1, потом выводит значение перемееной.
d = b++; alert(d); // 1 - Постфиксная  форма записи инкримента, выводит старое значение, бывшее до увеличения.
c = (2+ ++a); alert(c); // (2 + 3) = 5 - префиксная форма. значение с 2 строки - 2 + 1 = 3 
d = (2+ b++); alert(d); // 2+2 = 4 - постфиксная форма. берет 1 + 1 = 2
alert(a); // 3 ( сумируются значение а с первой, второй и четвертой строки, тоесть увеличели переменную в 2 раза
alert(b); //  3 ( сумируются значение b с первой, третей и пятой строки, тоесть увеличели переменную в 2 раза.*/
alert('Задание 2');
var a = 2;
var x = 1 + (a *= 2); // (a *=2) - 2*2 = 4 + 1 =5*/
alert('Задание 3');
/*Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
* если a и b положительные, вывести их разность;
* если а и b отрицательные, вывести их произведение;
* если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.*/
var a = + prompt ('Введите число а - \n значение может быть отрицательным, положительным. значение 0 считается положительным');
var b = + prompt ('Введите число b - \n значение может быть отрицательным, положительным. значение 0 считается положительным');
if (a >= 0 && b >= 0) {
	alert (a-b);
} else if(a<0 && b>=0 || a>=0 && b<0){
	alert (a+b);
} else {
	alert (a*b);
};
alert('Задание 4');
//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a = +prompt('Введите число а - \n значение между 0 и 15')
switch (a) {
	case 0:
		console.log ( '0');
	case 1:
		console.log ('1');
	case 2:
		console.log ('2');
	case 3:
		console.log ('3');
	case 4:
		console.log ('4');
	case 5:
		console.log ('5');
	case 6:
		console.log ('6');
	case 7:
		console.log ('7');
	case 8:
		console.log ( '8');
	case 9:
		console.log ('9');
	case 10:
		console.log ('10');
	case 11:
		console.log ('11');
	case 12:
		console.log ('12');
	case 13:
		console.log ('13');
	case 14:
		console.log ('14');
	case 15:
		console.log ('15');
		break;
	default:
		console.log ('Введите число между 0 и 15')
}
alert('Задание 5');
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
var a = +prompt ('Введите число а - ')
var b = +prompt ('Введите число b - ')
function plus (a,b) {
	return a+b;
};
function minus (a,b) {
	return a-b;
};
function times  (a,b) {
	return a*b
};
function divide  (a,b) {
	return a/b
};
alert ('Сумма Ваших чисел =' + plus(a,b) + '\nВычитание Ваших чисел = ' + minus(a,b) + '\nУмножение Ваших чисел = ' + times(a,b)+ '\nДеление Ваших чисел = '+ divide(a,b));
alert('Задание 6');
 /*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
 operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
 (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
var a = +prompt ('Введите число а - ')
var b = +prompt ('Введите число b - ')
var operation = prompt ('Введите математическую операцию, которую Вы хотите выполнить - \n (Введите +, -, * или /')
function plus (a,b) {
	return a+b;
};
function minus (a,b) {
	return a-b;
};
function times  (a,b) {
	return a*b
};
function divide  (a,b) {
	return a/b
};
function mathOperation(a, b, operation) {
	switch (operation) {
		case '+':
			alert ('Сумма = ' + plus(a,b));
			break;
		case '-':
			alert ('Вычитание = ' + minus(a,b));
			break;
		case '*':
			alert ('Умножение = ' + times(a,b));
			break;
		case '/':
			alert ('Деление = ' + divide(a,b));
			break;
		default:
			alert('Введите +, -, * или /');
		
	}
};
mathOperation(a, b, operation);
alert('Задание 7');
//Сравнить null и 0. Попробуйте объяснить результат.
/*
// null = ничего. Значения null и undefined равны == друг другу и не равны чему бы то ни было ещё. 
Это жёсткое правило буквально прописано в спецификации языка.
При преобразовании в число null становится 0, а undefined становится NaN. */
alert (null == 0); //false 
alert (null > 0); //false
alert (null < 0); //false
alert (null != 0); //true
alert (null >=0); //true
alert (null<=0);//true
alert('Задание 8');
 /*С помощью рекурсии организовать функцию возведения числа в степень. Формат: 
 function power(val, pow), где val – заданное число, pow – степень.*/
var val = +prompt ('Введите число, которое Вы хотите возвести в степень - ');
var pow = +prompt ('Введите степень - ');
function power(val, pow) {
	if (pow!=1){
		return val* power(val, pow -1);
	} 
	return val
  }
 alert (power(val, pow))
