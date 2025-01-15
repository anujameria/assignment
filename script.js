const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => handleAnswer(option);
        optionsContainer.appendChild(optionButton);
    });
}

function handleAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score;
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
};

document.getElementById("submit-score").onclick = () => {
    const userName = prompt("Enter your name:");
    if (userName) {
        leaderboard.push({ name: userName, score });
        leaderboard.sort((a, b) => b.score - a.score); // Sort descending by score
        leaderboard = leaderboard.slice(0, 5); // Keep top 5 only
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        displayLeaderboard();
        resetQuiz();
    }
};

function displayLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard");
    leaderboardList.innerHTML = "";
    leaderboard.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.name}: ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
}

function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    displayQuestion();
}

// Initialize
displayQuestion();
displayLeaderboard();
