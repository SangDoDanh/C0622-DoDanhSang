/**
 * Bài 3: Viết chương trình tính diện tích hình tròn
 * Bài 4: Viết chương trình chu vi hình tròn
 */

var inputR = prompt("Nhập vào bán kính hình tròn",1);

var r = parseFloat(inputR);
// Tính chu vi hình tròn
var perimeter = Math.PI * r;
// Tính diện tích hình tròn
var area = Math.PI * (r * r);
alert(`Chu vi hình tròn: ${perimeter}, diện tích hình tròn ${area}`)