const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Marking Language", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const questionBox = document.getElementById("question-box");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => selectOption(btn, current.answer);
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(btn => btn.style.pointerEvents = "none");

  if (selected.textContent === correctAnswer) {
    selected.style.background = "#27ae60"; // green
    score++;
  } else {
    selected.style.background = "#c0392b"; // red
    options.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.background = "#27ae60";
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
};

// Start the quiz
loadQuestion();
