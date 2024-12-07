let timer;
function firstToSecond() {
    let first = document.getElementById("first_div_btn");
    first.style.display = "none";
    let show1 = document.getElementById("timer");
    show1.style.display = "block";
    let show2 = document.getElementById("second_div");
    show2.style.display = "block";
    let show3 = document.getElementById("footer");
    show3.style.display = "flex";
    timer = setInterval(makeTimer, 1000);
}
let max = 60;
function makeTimer() {
    let sec = document.getElementById("timer");
    sec.innerText = max + " sec";
    console.log(max);
    max--;
    if (max == 0) {
        alert("Time is up");
        location.reload
    }
}

function quizReset() {
    document.getElementsByTagName("form").reset();
}

function submitQuiz() {
    clearInterval(timer);
    let score = 0;
    const correctAnsArr = ["Lecture Pavilion", "16 November", "F", "Your Happy Place", "MLSC"];
    const quesArr = ["LP", "Date", "Hostel", "Kravings", "Soc"];
    let toStoreSelected = [];
    let selectedOption = "";
    for (let v = 0; v <= 5; v++) {
        let radios = document.getElementsByName(quesArr[v]);
        for (const radio of radios) {
            if (radio.checked) {
                selectedOption = radio.value;
                toStoreSelected[v] = selectedOption;
                break;
            }
        }
        if (selectedOption === correctAnsArr[v]) {
            score++;
        }
    }

    let final = document.getElementById("appendInto");
    final.innerText = `Your score is ${score}/5`
    {
        if (score == 5 || score == 4) {
            final.style.backgroundColor = "rgb(0, 179, 0)";
        }
        else if (score == 3 || score == 2) {
            final.style.backgroundColor = "rgb(204, 204, 0)";
        }
        else {
            final.style.backgroundColor = "rgb(204, 0, 0)";
        }
    }
    let show1 = document.getElementById("timer");
    show1.style.display = "none";
    let show2 = document.getElementById("second_div");
    show2.style.display = "block";
    let show3 = document.getElementById("footer");
    show3.style.display = "none";
    let show4 = document.getElementById("resultCol");
    show4.style.display = "flex"
    final.style.display = "block";

    let correctAnsCollect = document.getElementsByClassName("correctAns");
    for (let v = 0; v < 5; v++) {
        correctAnsCollect[v].style.backgroundColor = "rgb(0, 179, 0)";
    }

    let selectedLabel = [];
    let labels = document.getElementsByClassName("label..")
    for (let a = 0; a < 15; a++) {
        let labelUnderConsideration = labels[a];
        for (let v = 0; v < 5; v++) {
            if (labelUnderConsideration.innerText == toStoreSelected[v]) {
                selectedLabel[v] = labelUnderConsideration;
                break;
            }
        }
    }
    console.log(selectedLabel)
    console.log(correctAnsCollect)

    for (let a = 0; a < 5; a++) {
        let ele = selectedLabel[a];
        let parent = ele.parentElement;
        console.log(parent)
        console.log(correctAnsCollect[a])
        if (parent !== correctAnsCollect[a]) {
            correctAnsCollect[a].style.backgroundColor = "rgb(0, 179, 0)";
            console.log(parent)
            parent.style.backgroundColor = "red";
        } else if (parent == correctAnsCollect[a]) {
            parent.style.backgroundColor = "rgb(0, 179, 0)";
        }
    }
}