var event, ok;
function correct (c){
	c*=1000;
	return c;
}

function isAnswer(q, event) {
	 if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваш ответ должен біть в диапозоне от 1 до 4');
        return false;
    }
    return true;
}
	
//---------------------------------------------------------


do {
    ok = false;
    event = +prompt(question.a00 + question.a1 + question.a2 + question.a3 + question.a4 +'-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(question.a0, event);
    }
} while (!ok);
switch (event) {
	case 1: 
		var c = 0;
		c ++;
		//correct (c);
		alert ('Правильно - '+ correct (c) );
		do {
			ok = false;
			event = +prompt(question.b00 + question.b1 + question.b2 + question.b3 + question.b4 +'-1 - Забрать деньги');
			if (event == -1) {
				break;
			}
			else {
				ok = isAnswer(question.a0, event);
			}
		} while (!ok);
		switch (event) {
			case 1:
				alert ('Вы проиграли');
				break;
			case 2: 
				alert ('Вы проиграли');
				break;
			case 3: 
				alert ('Вы проиграли');
				break;
			case 4: 
				c ++;
				alert ('Правильно - '+ correct (c) );
				do {
					ok = false;
					event = +prompt(question.c00 + question.c1 + question.c2 + question.c3 + question.c4 +'-1 - Забрать деньги');
					if (event == -1) {
						break;
					}
					else {
						ok = isAnswer(question.a0, event);
					}
				} while (!ok);
				switch (event) {
					case 1:
						alert ('Вы проиграли');
						break;
					case 2:
						c ++;
						alert ('Правильно - ' + correct (c) );
						do {
							ok = false;
							event = +prompt(question.d00 + question.d1 + question.d2 + question.d3 + question.d4 +'-1 - Забрать деньги');
							if (event == -1) {
								break;
							}
							else {
								ok = isAnswer(question.a0, event);
							}
						} while (!ok);
						switch (event) {
							case 1:
								c++;
								alert ('Правильно - '+ correct (c) );
								do {
									ok = false;
									event = +prompt(question.e00 + question.e1 + question.e2 + question.e3 + question.e4 + ' -1 - Забрать деньги');
									if (event == -1) {
										break;
									}
									else {
										ok = isAnswer(question.a0, event);
									}
								} while (!ok);

								switch (event) {
									case 1:
										alert ('Вы проиграли');
										break;
									case 2:
										alert ('Вы проиграли');
										break;
									case 3:
										alert ('Вы проиграли');
										break;
									case 4:
										c++;
										alert ('Ваш выграш - ' + correct (c) + '.' + ' Поздравляем вы миллионер' );
										break;
									case -1 :
										alert ('Ваш выграш - ' + correct (c) );
										break;
									
								}
								break;
							case 2:
								alert ('Вы проиграли');
								break;
							case 3:
								alert ('Вы проиграли');
								break;
							case 4:
								alert ('Вы проиграли');
								break;
							case -1 :
								alert ('Ваш выграш - ' + correct (c) );
								break;
							default:
								alert ('Ошибка');
						}
						break;
					case 3:
						alert ('Вы проиграли');
						break;
					case 4:
						alert ('Вы проиграли');
						break;
					case -1 :
						alert ('Ваш выграш - ' + correct (c));
						break;
					default:
						alert ('Ошибка');
				}
				break;
			case -1 :
				alert ('Ваш выграш - ' + correct (c));
				break;
			default:
				alert ('Ошибка');
		}
		break;
	case 2: 
		alert ('Вы проиграли');
		break;
	case 3: 
		alert ('Вы проиграли');
		break;
	case 4: 
		alert ('Вы проиграли');
		break;
	case -1:
		alert ('Струсил!');
		break;
	default:
		alert ('Ошибка');
}
alert('Спасибо за игру');


