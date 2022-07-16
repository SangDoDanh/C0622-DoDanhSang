let eApp = document.querySelector('.app');
let ePlayAgain = document.getElementById('btn-play-again');
let row = 10;
let col = 10;
let isX = true;
let dataXO = inIt(row, col);
/**
 * 
 * @param {number} row số hàng trong bàn cờ
 * @param {number} col số cột trong bàn cờ
 * @returns Một mảng 2 chiều
 */
function inIt(row, col) {
    isX = true;
    let dataXO = new Array(row);
    for(let i = 0; i < row; i++) {
        dataXO[i] = new Array(col);
        for(let j = 0; j < col; j++) {
            dataXO[i][j] = '';
        }
    }
    return dataXO;
}


function checkWin() {
    for(let i = 0; i < dataXO.length; i++) {
        for(let j = 0; j < dataXO[i].length; j++) {
            // Duyệt win theo chiều ngang
            if(j <= dataXO[i].length - 3) {
                if(dataXO[i][j] == 'X' &&
                   dataXO[i][j+1] == 'X' && 
                   dataXO[i][j+2] == 'X' &&
                   !checkStartEnd('O', i, j, 'h')) {
                    return true;
                }
            }

            if(j <= dataXO[i].length - 3) {
                if(dataXO[i][j] == 'O' &&
                   dataXO[i][j+1] == 'O' && 
                   dataXO[i][j+2] == 'O' &&
                   !checkStartEnd('X', i, j, 'h')) {
                    return true;

                }
            }

            // Duyệt win theo chiều dọc
            if(i <= dataXO.length - 3) {
                if(dataXO[i][j] == 'X' &&
                   dataXO[i + 1][j] == 'X' && 
                   dataXO[i + 2][j] == 'X' && 
                   !checkStartEnd('O', i, j, 'v')) {
                    return true;
                }
            }

            if(i <= dataXO.length - 3) {
                if(dataXO[i][j] == 'O' &&
                   dataXO[i + 1][j] == 'O' && 
                   dataXO[i + 2][j] == 'O' && 
                   !checkStartEnd('X', i, j, 'v')) {
                    return true;

                }
            }

            // duyệt chéo từ trái qua phải
            if(i <= dataXO.length - 3 && j <= dataXO[i].length - 3) {
                if(dataXO[i][j] == 'O' &&
                   dataXO[i + 1][j + 1] == 'O' && 
                   dataXO[i + 2][j + 2] == 'O' && 
                   !checkStartEnd('X', i, j, 'l')) {
                    return true;

                }
            }
            if(i <= dataXO.length - 3 && j <= dataXO[i].length - 3) {
                if(dataXO[i][j] == 'X' &&
                   dataXO[i + 1][j + 1] == 'X' && 
                   dataXO[i + 2][j + 2] == 'X' && 
                   !checkStartEnd('O', i, j, 'l')) {
                    return true;

                }
            }
            
            // duyệt chéo từ phải qua trái
            if(i <= dataXO.length - 3 && j >= 2) {
                if(dataXO[i][j] == 'X' &&
                   dataXO[i + 1][j - 1] == 'X' && 
                   dataXO[i + 2][j - 2] == 'X' &&
                   !checkStartEnd('O', i, j, 'r')) {
                    return true;

                }
            }
            if(i <= dataXO.length - 3 && j >= 2) {
                if(dataXO[i][j] == 'O' &&
                   dataXO[i + 1][j - 1] == 'O' && 
                   dataXO[i + 2][j - 2] == 'O' &&
                   !checkStartEnd('X', i, j, 'r')) {
                    return true;

                }
            }

        }
    }

}

/**
 * Hàm kiểm tra bọc hai đầu theo giá trị "X" "O"
 * @param {string} xo Giá trị cần check 'X' hoặc 'O'
 * @param {number} i tọa độ vị trí hàng cần check
 * @param {number} j tọa độ vị trí cột cần check
 * @param {string} direction hướng kiểm tra: h, v, l, r
 * @returns boolean
 */
function checkStartEnd(xo, i, j, direction) {
    // kiểm tra bọc 2 đầu theo chiều ngang
    if(direction == 'h') {
        let start = false;
        let end = false;
        for(let k = 0; k < dataXO[i].length; k++) {
            if(k < j  && dataXO[i][k] == xo) {
                start = true;
            }
            if(k > j + 2 && dataXO[i][k] == xo) {
                end = true;
            }
        }
        console.log(start, end);
        return start && end;
    }
    // kiểm tra bọc 2 đầu theo chiều dọc
    if(direction == 'v') {
        let start = false;
        let end = false;
        for(let k = 0; k < dataXO.length; k++) {
            if(k < i && dataXO[k][j] == xo) {
                start = true;
            }
            if(k > i +2 && dataXO[k][j] == xo) {
                end = true;
            }
        }
        return start && end;
    }

    // kiểm tra bọc hai đầu theo chiều chéo từ trái qua phải
    if(direction == 'l') {
        let start = false;
        let end = false;
        let k = i;
        let l = j;
        while(l > 0 &&  k > 0) {
            k--; 
            l--;
            if(dataXO[k][l] == xo) {
                start = true;
                break;
            }
        }

        while(j < 9 &&  i < 9) {
            j++; 
            i++;
            if(dataXO[i][j] == xo) {
                end = true;
                break;
            }
        }
        return start && end;
    }
    
    // kiểm tra bọc hai đầu theo chiều chéo từ phải qua trái
    if(direction == 'r') {
        let start = false;
        let end = false;
        let k = i;
        let l = j;

        while(l < 8 &&  k >= 0) {
            k--; 
            l++;
            if(dataXO[k][l] == xo) {
                start = true;
                break;
            }
        }

        while(j >= 0 &&  i < 9) {
            j--; 
            i++;
            if(dataXO[i][j] == xo) {
                end = true;
                break;
            }
        }
        console.log(start, end);
        return start && end;
    }
}

function play(i, j) {

    if(isX && !dataXO[i][j]) {
        dataXO[i][j] = 'X';
        isX = false;
        renderHTML(eApp,createResources(dataXO));
    }else if(!isX && !dataXO[i][j]){
        dataXO[i][j] = 'O';
        isX = true;
        // console.log('O ', i, j);
        renderHTML(eApp,createResources(dataXO));
    }

    if(checkWin()) {
        if(!isX) {
            alert(`[X] Win`);
        } else {
            alert(`[O] Win`);
        }
    }
}

function createResources(dataArray) {
    let res = '';
    res += '<table>';
    for(let i = 0; i < dataArray.length; i++) {
        res += `<tr>`;
        for(j = 0; j < dataArray[i].length; j++) {
            res += `<td onclick="play(${i}, ${j})">${dataArray[i][j]}</td>`;
        }
        res +=`</tr>`;
    }
    res += '</table>';
    
    return res;
}
/**
 * 
 * @param {obj} e vị trí cần render ra html 
 * @param {string} res resource html 
 */
function renderHTML(e, res) {
    e.innerHTML = res;
}

function playAgain() {
    dataXO = inIt(row, col);
    renderHTML(eApp, createResources(dataXO));

}

renderHTML(eApp, createResources(dataXO));
ePlayAgain.addEventListener('click', playAgain);