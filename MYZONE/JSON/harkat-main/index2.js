let correctAnswers = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTasks() {

    for (let i = 0; i < 10; i++) {
        let a = getRandomInt(1, 10);
        let b = getRandomInt(1, 10);

        correctAnswers[i] = a * b;

        document.getElementById("label" + i).innerHTML = `${i + 1}. ${a} × ${b} = `;     
        document.getElementById("answer" + i).value = "";
    }

    document.getElementById("result").innerHTML = "";
}

function checkAnswers() {
    let correct = 0;


    for (let i = 0; i < 10; i++) {
        let userAnswer = parseInt(document.getElementById("answer" + i).value);

        if (userAnswer === correctAnswers[i]) {
            correct++; 
        }
    }
    document.getElementById("result").innerHTML = `Oikein ${correct} / 10`;
}


generateTasks();