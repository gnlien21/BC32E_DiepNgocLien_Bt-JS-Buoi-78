//Khai báo mảng và thêm số vào mảng:


var arrNumber = [];


document.getElementById('btnNhapSo').onclick = function(){

    var Num = +document.getElementById('nhapSo').value;
    
    var daySo = '';

    arrNumber.push(Num);

    daySo = '[' + arrNumber + ']';

    document.getElementById('arrInput').innerHTML = daySo;

}




//BT1: Tổng số dương

document.getElementById('btnTinhTong').onclick = function(){
    //input: số dương có trong array (number)

     //output: tổng các số dương (number)
     var tongSoDuong = 0;

    for (var index=0; index < arrNumber.length; index++){
        if (arrNumber[index] > 0){
            tongSoDuong += arrNumber[index];
        }
    }
    document.getElementById('ketQua_B1').innerHTML = tongSoDuong;
}

//BT2: Đếm số dương

document.getElementById('btnDemSo').onclick = function(){
    //input: số dương có sẵn trong array (number)
    //output: đếm số dương (number)

    var countPositive = 0;

    for (var index = 0; index < arrNumber.length; index++){
        if (arrNumber[index]>0){
            countPositive++;
        }

        document.getElementById('ketQua_B2').innerHTML = 'có ' + countPositive+ ' số dương';
    }


}


//BT3: Tìm số nhỏ nhứt

document.getElementById('btnTimMin').onclick = function(){
    var min = 0;
    for (var index = 0; index < arrNumber.length; index++){
        min = arrNumber[0];
        if (arrNumber[index] < min){
            min = arrNumber[index];
        }
    }
    
     document.getElementById('ketQua_B3').innerHTML = 'số nhỏ nhất là: ' + min;
}

//BT4: Tìm số dương nhỏ nhứt

document.getElementById('btnTimMinDuong').onclick = function (){
    var positiveNumArray = [];
    var positiveMin = 0;
    for (index = 0; index < arrNumber.length; index++ ){
        if (arrNumber[index] > 0){
            positiveNumArray.push(arrNumber[index]);
        }
    }
    for (i = 0; i < positiveNumArray.length; i++){
        positiveMin = positiveNumArray[0];
        if (positiveNumArray[i] < positiveMin){
            positiveMin = positiveNumArray[i];
        }
    }

    document.getElementById('ketQua_B4').innerHTML = 'số dương nhỏ nhất là: ' + positiveMin;
}

//BT5: TÌm số chẵn cúng cùi

document.getElementById('btnTimChan').onclick = function (){
    var evenNumArray = [];
    var lastEvenNum = 0;

    for (index= 0; index < arrNumber.length; index++){
        if (arrNumber[index]%2 === 0){
            evenNumArray.push(arrNumber[index]);
        }
    }
    
    if (evenNumArray.length == 0){
        lastEvenNum = -1;
    } else {
        lastEvenNum = evenNumArray[evenNumArray.length - 1];
    }

    document.getElementById('ketQua_B5').innerHTML = 'số chẵn cuối cùng là: ' + lastEvenNum;
}


//BT6: Thay đổi vị trí 2 số

document.getElementById('btnDoiCho').onclick = function(){
    var num1 = +document.getElementById('soThu1').value;
    var num2 = +document.getElementById('soThu2').value;

    var output = '';

    if(arrNumber.includes(num1) && arrNumber.includes(num2)) {
        output = swapIndex(num1, num2);
    } else {
        output = 'invalid input';
    }

    document.getElementById('ketQua_B6').innerHTML = output;

}

function swapIndex (num1, num2){
    var index1 = arrNumber.indexOf(num1);
    var index2 = arrNumber.indexOf(num2);
    
    // console.log(index1, index2);

    [arrNumber[index1], arrNumber[index2]]= [arrNumber[index2], arrNumber[index1]];
    
    output = '[' + arrNumber+ ']';

    return output;

}




//BT7: Sắp xếp tăng dần


document.getElementById('btnSapXep').onclick = function(){
    arrNumber.sort((a,b) => a-b );

    document.getElementById('ketQua_B7').innerHTML = 'dãy sau khi sắp xếp: ' + arrNumber;
}


//BT8: Tìm số nguyên tố đầu tiên. Nếu không có thì trả về -1

document.querySelector('#btnSNT').onclick = function(){
    //input: số trong array

    //output: số nguyên tố đầu tiên

    var primeNum1st = 0;
    var primeNumArray = [];
    //progress:


    for (var index = 0; index<arrNumber.length; index++){
        kiemTra = checkSNT(arrNumber[index]);
        if (kiemTra === true && arrNumber[index]>=2){
            primeNumArray.push(arrNumber[index]);
        }
    }

    // console.log(primeNumArray);

    //in output ra giao diện:
    if (primeNumArray.length == 0){
        primeNum1st = -1;
    } else {
        primeNum1st = primeNumArray[0];
    }
    document.querySelector('#ketQua_B8').innerHTML = 'số nguyên tố đầu tiên là: ' + primeNum1st;
}

function checkSNT(so) {
    var kiemTra = true;

    for (var uoc = 2; uoc <= so/2; uoc++){
        if (so % uoc === 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}



//BT9: Đếm số nguyên

document.querySelector('#btnThemSo_9').onclick = function(){
    var numInput = +document.querySelector('#nhapSo_9').value;

    arrNumber.push(numInput);
    // console.log(arrNumber);

    document.querySelector('#soNguyen').innerHTML = 'Mảng số hiện tại là: [' + arrNumber+ ']';
}

document.querySelector('#btnDemSoNguyen').onclick = function(){
    var intergerArray = [];
    var interger = 0;
    for(var index=0 ; index < arrNumber.length; index++){
       if(Number.isInteger(arrNumber[index]) === true){
        intergerArray.push(arrNumber[index]);
       }
    }

    console.log(intergerArray);

    interger = intergerArray.length;
    document.querySelector('#ketQua_B9').innerHTML = 'Có: '+ interger + ' số nguyên. [' + intergerArray+ ']';
}

//BT10: So sánh lượng số âm dương

document.querySelector('#btnSoSanh_10').onclick = function(){
    var arrSoAm = [];
    var arrSoDuong = [];
    var ketQuaSS = '';
    for (var index = 0; index < arrNumber.length; index++){
        if (arrNumber[index] > 0){
            arrSoDuong.push(arrNumber[index]);
        } else if (arrNumber[index] <0){
            arrSoAm.push(arrNumber[index]);
        }
    }

    console.log(arrSoAm);
    console.log(arrSoDuong);

    if (arrSoAm.length > arrSoDuong.length){
        ketQuaSS = 'Số âm > số dương';
    } else if (arrSoDuong.length > arrSoAm.length){
        ketQuaSS = 'Số dương > số âm';
    }

    document.querySelector('#ketQua_B10').innerHTML = ketQuaSS;
}