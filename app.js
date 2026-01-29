const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const scoreCard = document.getElementById("scoreCard");
const scoreText = document.getElementById("scoreText");
const playAgainBtn = document.getElementById("playAgainBtn");
const scorePill = document.getElementById("scorePill");
const finalMessage = document.getElementById("finalMessage");
const card = document.querySelector(".card");

let questions = [];
let order = [];
let currentIndex = 0;
let selected = null;
let score = 0;
let answered = false;

const ANSWER_KEYS = ["a", "b", "c", "d"];

const loadQuestions = async () => {
  const response = await fetch("quiz_finalny.csv");
  const text = await response.text();
  const lines = text.trim().split(/\r?\n/);
  const [, ...rows] = lines;

  questions = rows
    .map((line) => line.split(";"))
    .filter((parts) => parts.length >= 7)
    .map((parts) => ({
      id: parts[0],
      question: parts[1],
      answers: {
        a: parts[2],
        b: parts[3],
        c: parts[4],
        d: parts[5],
      },
      correct: parts[6].trim().toLowerCase(),
    }));

  resetQuiz();
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const resetQuiz = () => {
  order = shuffle([...Array(questions.length).keys()]);
  currentIndex = 0;
  score = 0;
  selected = null;
  answered = false;
  scoreCard.hidden = true;
  document.querySelector(".card").hidden = false;
  renderQuestion();
  updateProgress();
  updateScore();
};

const renderQuestion = () => {
  const question = questions[order[currentIndex]];
  if (!question) {
    return;
  }

  card.classList.remove("animate");
  void card.offsetWidth;
  card.classList.add("animate");

  questionText.textContent = question.question;
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  selected = null;
  answered = false;
  checkBtn.disabled = true;
  nextBtn.disabled = true;

  ANSWER_KEYS.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.dataset.key = key;
    button.innerHTML = `<span class="letter">${key.toUpperCase()}</span>
      <span>${question.answers[key]}</span>`;
    button.addEventListener("click", () => {
      if (answered) return;
      selected = key;
      checkBtn.disabled = false;
      updateSelected();
    });
    answersContainer.appendChild(button);
  });
};

const updateSelected = () => {
  const options = answersContainer.querySelectorAll(".answer");
  options.forEach((option) => {
    option.classList.toggle("selected", option.dataset.key === selected);
  });
};

const checkAnswer = () => {
  if (!selected || answered) return;
  const question = questions[order[currentIndex]];
  const options = answersContainer.querySelectorAll(".answer");
  answered = true;

  options.forEach((option) => {
    const key = option.dataset.key;
    if (key === question.correct) {
      option.classList.add("correct");
    }
    if (key === selected && selected !== question.correct) {
      option.classList.add("incorrect");
    }
    option.disabled = true;
  });

  if (selected === question.correct) {
    score += 1;
    feedback.textContent = "Świetnie! To poprawna odpowiedź.";
  } else {
    feedback.textContent = `Nie tym razem. Poprawna odpowiedź to ${question.correct.toUpperCase()}.`;
  }

  updateScore();
  nextBtn.disabled = false;
};

const nextQuestion = () => {
  if (!answered) return;
  currentIndex += 1;
  updateProgress();
  if (currentIndex >= questions.length) {
    showScore();
    return;
  }
  renderQuestion();
};

const updateProgress = () => {
  const total = questions.length;
  const current = Math.min(currentIndex + 1, total);
  progressText.textContent = `Pytanie ${current} z ${total}`;
  const percent = total ? (currentIndex / total) * 100 : 0;
  progressFill.style.width = `${percent}%`;
};

const updateScore = () => {
  scorePill.textContent = `${score} pkt`;
};

const showScore = () => {
  document.querySelector(".card").hidden = true;
  scoreCard.hidden = false;
  scoreCard.classList.remove("animate");
  void scoreCard.offsetWidth;
  scoreCard.classList.add("animate");
  const total = questions.length;
  const percent = total ? Math.round((score / total) * 100) : 0;
  scoreText.textContent = `${score} / ${total} poprawnych (${percent}%)`;
  finalMessage.textContent =
    "Brawo Oliwka za wykonanie quizu, nie zapomnij o nagrodzie dla Marka!  Pamiętaj ze on lubi gdy jesteś niegrzeczna 😈";
  progressFill.style.width = "100%";
  progressText.textContent = `Pytanie ${total} z ${total}`;
};

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", resetQuiz);
playAgainBtn.addEventListener("click", resetQuiz);

const init = async () => {
  try {
    await loadQuestions();
  } catch (error) {
    questionText.textContent =
      "Nie udało się wczytać pytań. Uruchom stronę przez serwer lokalny.";
  }
};

init();
