let eProductName = document.getElementById('product-name');
let eDisplay = document.getElementById('display');
let eBtnAdd = document.getElementById('btn-add');

let productList = [];



function renderToHtml(products) {
    let sources = '';
    for(let productIndex in products) {
        sources += `<div class="group-display">
                        <span>${products[productIndex]}</span>
                        <input onclick="edit(this)" data-index="${productIndex}" type="button" id="btn-edit" value="Edit">
                        <input onclick="deleteProduct(this)" data-index="${productIndex}" type="button" id="btn-delete" value="delete">
                    </div>`;
    }
    eDisplay.innerHTML = sources;
}

function edit(product) {

    let productIndex = parseInt(product.getAttribute('data-index')); 
    let newProductName = prompt("Enter new product name: ");
    productList[productIndex] = newProductName;
    renderToHtml(productList); 
}

function deleteProduct(product) {
    let deleteComfirm = confirm('Delete product:');
    if(deleteComfirm) {
        let productIndex = parseInt(product.getAttribute('data-index'));
        productList.splice(productIndex, 1);
        renderToHtml(productList);
    }
}
function addProduct() {
    let productName = eProductName.value;
    productName = productName.trim();
    if(productName.length > 0) {
        productList.push(productName);
        console.log(productList);
        renderToHtml(productList);
    }
}

eBtnAdd.addEventListener('click', addProduct)