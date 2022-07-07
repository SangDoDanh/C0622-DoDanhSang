/**
 * Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con)
 *  khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
 */

// b = a * (1 + r)^c
// b Tổng số tiền phải trả
// a Số tiền vay
// c Kỳ hạn trả, tính theo tháng
// r Lãi xuất

let eLoanAmount = document.getElementById('loan-amount'), 
    eCalculate = document.getElementById('btn-calculate'), 
    ePayLoan = document.getElementById('pay-loan'),
    eMonth = document.getElementById('month'),
    eBankList = document.querySelectorAll('.bank-name');
let r,a;
// lấy ra lãi xuất
for(eBank of eBankList) {
   eBank.addEventListener('click', function(e) {
        r = parseFloat(e.target.value) 
   })
}

// Tính lãi xuất và in ra
eCalculate.addEventListener('click', function() {
    c = parseInt(eMonth.value)
    a = parseFloat(eLoanAmount.value);

    let b = a * Math.pow((1+r), c)
    ePayLoan.value = b + ' VND'
})
    