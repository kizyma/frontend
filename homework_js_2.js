/*1*/
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
/*2*/
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Какой будет х?", '');
var n = prompt("В какую степень возводим?", '');

if (n <= 1) {
  alert('Степень ' + n +
    ' не поддерживается, пожалуйста введите целую степень, больше 1'
  );
} else {
  alert( pow(x, n) );
}
/*3*/
function rand(a,b)
{
    return Math.floor(Math.random()*(b-a+1)+a);
}
/*4*/
var v = prompt("Введите данные.", '');
function typeOfVar(v) {
	return typeof v;
}

