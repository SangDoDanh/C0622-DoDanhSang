let eFullname = document.getElementById('fullname'), 
    eEarnings = document.getElementById('earnings'),
    eDependentPerson = document.getElementById('dependent-person'), 
    eCalculate = document.getElementById('btn-calculate'), 
    eTax = document.getElementById('tax');
// Công thức tính thuế
// Thuế thu nhập cá nhân = tổng thu nhập chịu thuê * thuế suất
//                         thu nhập chịu thuế = tổng thu nhập - các khoản được miễn

/**
 * Thu nhập tính thuế/ tháng <= 5 triệu   -> thuế suất = 5%
 * Thu nhập tính thuế/ tháng trên 5 triệu đến 10 triệu    -> thuế suất = 10% - 0,25 triệu vnd
 * Thu nhập tính thuế/ tháng trên 10 triệu đến 18 triệu   -> thuế suất = 15% - 0,75 triệu vnd
 * Thu nhập tính thuế/ tháng trên 18 triệu đến 32 triệu   -> thuế suất = 20% - 1,65 triệu vnd
 * Thu nhập tính thuế/ tháng trên 32 triệu đến 52 triệu   -> thuế suất = 25% - 3,25 triệu vnd
 * Thu nhập tính thuế/ tháng trên 52 triệu đến 80 triệu   -> thuế suất = 30% - 5,85 triệu vnd
 * Thu nhập tính thuế/ tháng trên 80 triệu                -> thuế suất = 35% - 9,85 triệu vnd
 * 
 **/ 

eCalculate.addEventListener('click', calculationTax)

function calculationTax() {
    let earnings = parseFloat(eEarnings.value),             // tổng thu nhập chịu thuế
        free,                                               // các khoản được miễn
        personalFree = 11000000,                            // Giảm trừ gia cảnh bản thân nên được miễn 11 triệu
        dependentPerson = parseInt(eDependentPerson.value); // số người phụ thuộc miễn 4.4 triệu/người
    let insurance = earnings * 0.105                        // bảo hiểm
    
    free = (insurance + (dependentPerson * 4400000) + personalFree)
    let earningsTax = earnings - free
    console.log('thu nhap chiu thue: ' , earningsTax)
    let tax // thuế phải đóng 
    if(earningsTax > 80000000) {
        tax = earningsTax * 0.35 - 9850000
    } else if(earningsTax > 52000000) {
        tax = earningsTax * 0.3 - 5850000
    } else if(earningsTax > 32000000) {
        tax = earningsTax * 0.25 - 3250000
    } else if(earningsTax > 18000000) {
        tax = earningsTax * 0.2 - 1650000
    } else if(earningsTax > 11000000) {
        tax = earningsTax * 0.15 - 750000
    } else {
        tax = 0
    }

    eTax.value = tax + ' VND'
}
