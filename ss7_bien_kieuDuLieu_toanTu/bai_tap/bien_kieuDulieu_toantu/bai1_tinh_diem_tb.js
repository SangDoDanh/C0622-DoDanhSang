/**
 * Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: 
 * Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và 
 * tổng của những điểm này.
 */

var inputPhysicsScore = prompt("Nhập điểm môn Vật Lý", 1);
var inputChemistryScore = prompt("Nhập điểm môn Hóa Học", 1);
var inputMathScore = prompt("Nhập điểm môn Toán", 1);

var physicsScore = parseFloat(inputPhysicsScore);
var chemistryScore = parseFloat(inputChemistryScore);
var mathScore = parseFloat(inputMathScore);

var totalScore = (physicsScore + chemistryScore + mathScore);
var avgScore = totalScore/3;

alert(`Tổng điểm: ${totalScore} Điểm trung bình ${avgScore}`);