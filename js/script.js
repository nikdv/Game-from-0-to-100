
let userNum;
let randomNum = parseInt(Math.random() * 100);


function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

while (true) {
    userNum = prompt('Введите число от 0 до 100');
    if (userNum === null) break;

    if (isNum(userNum)) {
        userNum = +userNum;

        if (userNum > randomNum) {
            alert('Загаданое число большее');
        } else if (userNum < randomNum) {
            alert('Загаданое число меньшее');
        } else if (userNum === randomNum) {
            alert('Поздравляю, вы победили!');
            randomNum = parseInt(Math.random() * 100);
        }
    } else {
        alert('Можно вводить только числа');
    }
      
}
