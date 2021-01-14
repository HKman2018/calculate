var firstAnswer = document.querySelector('.firstAnswer')
var secondAnswer = document.querySelector('.secondAnswer')
var result = document.querySelector('.result')
var apple = document.querySelector('.firstImage')
var orange = document.querySelector('.secondImage')
var output = document.querySelector('.outPut')
var answer;


function calculate() {
    result.value = ""

    var randomFirst = Math.floor(Math.random() * 10 + 1)
    var randomSecond = Math.floor(Math.random() * 10 + 1)
    firstAnswer.textContent = randomFirst
    secondAnswer.textContent = randomSecond
    answer = randomFirst + randomSecond


    var str = "";
    var sec = ""
    for (let i = 0; i < randomFirst; i++) {
        str += `<div class="apple" value="${i}"></div>`
        apple.innerHTML = str
    }
    for (let i = 0; i < randomSecond; i++) {
        sec += `<div class="apple"value="${i}"></div>`
        orange.innerHTML = sec
    }

}
calculate()
result.addEventListener('keypress', function(e) {
    var message = ""
    if (e.key === 'Enter') {
        var num = (e.target.value).replace(/[^0-9]/g, "");
        console.log(num)
        if (num == answer) {
            output.innerHTML = `<h1>success <br>
                 答啱啦</h1>`
            calculate()
        } else {
            output.innerHTML = `<h1>wrong <br>
            答案唔啱</h1>`
        }
    }
})