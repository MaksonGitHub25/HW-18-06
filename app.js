alert("Hello Player");

const randomNum = Math.floor(Math.random() * 101);
console.log("Random Number:", randomNum);

const obj = {};
let difference;

function askUserNum(){
    userAnswer = +prompt("Try to guess my number");
    console.log("Niggers User Number:", userAnswer);

    return userAnswer;
}

function askAndCheck() {
    askUserNum();
    while (true) {
        if (userAnswer != randomNum) {
            if (userAnswer > randomNum) {
                difference = "more";
            } else if (userAnswer < randomNum) {
                difference = "less";
            }
            alert(`No! Try to guess my number again. Ur number is ${difference} than expected`);
            isPlayAgian = confirm('Do you wanna continue?');
            if (isPlayAgian == true){
                askUserNum();
            } else {
                alert('Bye-Bye');
                break;
            }
        } else if (userAnswer == randomNum){
            Congratulations();
            break;
        }
    }
}

function Congratulations() {
    alert("Congratulations! You guessed my number!");
    reloadGame = confirm("Wanna play one more time?");
    if (reloadGame == true) {
        document.location.reload();
    } else if (reloadGame == false) {
        alert('See you next time');
    }
}

function dopTask(){
    while (true) {
        userObjName = prompt('What is the name of the key?');
        userObjValue = prompt('What is the value of the key?');
        if (
            userObjName == '' ||
            userObjName == null ||
            userObjValue == '' ||
            userObjValue == null
        ){
            break;
        } else {
            if (parseInt(userObjValue)){
                userObjValue = parseInt(userObjValue); 
            }
            obj[userObjName] = userObjValue;
            console.log(obj);
        }
    };
}

mainGameBtn.addEventListener('click', askAndCheck);
dopTaskBtn.addEventListener('click', dopTask);



// сделать чтоб когда чел негр вводил не число в игре ему говорили что он додик и проверку на NaN
// сделать подсветку тексту в alert

//* Создать программу, которая будет предлагать пользователю угадать число, которое предварительно должно быть загадано (создано в коде программы). В случае неверного ответа, программа должна предложить пользователю очередную возможность угадывать числа, дополнительно сообщив что число, которое он только что ввёл, больше или же меньше, чем загаданное программой число. Если же ответ верный, то пользователю должно поступить предложение завершить этот процесс или же продолжить (дальнейшая судьба программы не важна).

//* Особенности:
//* Подключить внешний скрипт
//* Воспользоваться встроенными функциями (alert, prompt, confirm)
//* Воспользоваться циклами (while, do while, for)
//* Воспользоваться условными операторами (if, ?:, switch)
//* Воспользоваться логическими операторами (&&, ||, !)
//* Воспользоваться операторами сравнения (===, !==, >, >=, <, <= )

// DOP
// Дать возможность юзеру создавать столько свойств и значений для объекта - сколько захочет юзер.