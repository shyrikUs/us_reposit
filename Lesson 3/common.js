document.write( "Задание 1 <br>" );
var n = [ 2 ];
var p = 2;
while (  p <= 100) {
    var control = 1;
    for ( var i = 0; i < n.length; i++) 
    {
        if ( p % n [ i ] === 0) 
        {
            control = 0;
        }
    }
    if ( control === 1 ) 
    {
        n.push( p );
    }
    p++;
}
document.write( n + "<br>" );

document.write ("Задание 2<br>")
function para (a) {
	if (a%2==0) {
		return document.write (a + " - четное число<br>");
	} else {
		document.write (a + " - нечетное число<br>");
	}
}
	
var a = 0
do {
	if (a==0) {
		document.write (a + " – это ноль<br>");
	} else {
		para (a);
	}
	a++;
	} while (a<=10)
		
	
	
document.write ("Задание 3 в консоле <br>")
for(i = 0; i++ < 9; console.log (i)){// здесь пусто
}
//
document.write ("Задание 4 в консоле <br>")
var str = "";
var x = "x";
for (i=0; i<=20; i++){
	str+=x
	console.log (str);
}