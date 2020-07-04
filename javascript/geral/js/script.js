var a = 10;
var b = 20;
var c = null;

document.write('variável A: ' + a + '<br>');
document.write('variável B: ' + b + '<br>');
document.write('variável C: ' + c + '<br>');

c = a;
a = b;
b = c;
c = null;
document.write('<hr/>')

document.write('variável A: <strong>' + a + '</strong><br>');
document.write('variável B: <strong>' + b + '</strong><br>');
document.write('variável C: <strong>' + c + '</strong><br>');