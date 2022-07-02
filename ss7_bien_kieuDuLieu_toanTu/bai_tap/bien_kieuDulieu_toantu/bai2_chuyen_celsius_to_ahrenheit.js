/**
 * Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) 
 * và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
 */

var inputCelsius = prompt("Nhập vào độ C");

var cenlsius = parseFloat(inputCelsius);

var fahrenheit = (cenlsius * 1.8) + 32;

alert(`Độ F: ${fahrenheit}`);