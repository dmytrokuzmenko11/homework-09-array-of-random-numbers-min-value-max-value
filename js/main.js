

// 1

arrA = new Array(+prompt('Enter length of the Array'));
arrB = [];

// 2, 3

label:
for (let i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random()*100);

    for (j = 2; j < arrA[i] - 1; j++) {
        if (arrA[i] % j == 0) {
            continue label;
        }
    }
    
    arrB[i] = arrA[i];
}
document.write('<br> Array A: ' + arrA + '<br>')

arrB = arrB.filter(Boolean);
document.write('Array B: ' + arrB + '<br>')

// 4

minValue = maxValue = arrB[0];

for (let i = 0; i < arrB.length; i++) {
    if (arrB[i] < minValue) {
        minValue = arrB[i];
    }
    else if (arrB[i] > maxValue) {
        maxValue = arrB[i];
    }
}

document.write(`<br>Min value is <b>${minValue}</b><br>`);
document.write(`Max value is <b>${maxValue}</b>`);
