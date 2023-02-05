const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
    {
        id: 4,
        question: "What gives flamingos their pink colour?",
        answers: [
          { answer: "reaction to sunlight", isCorrect: false },
          { answer: "eating shrimps", isCorrect: true },
          { answer: "dominant genes", isCorrect: false },
          { answer: "mud captured in feathers", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "The tiniest animal with a backbone is a what?",
        answers: [
          { answer: "fish", isCorrect: false },
          { answer: "lizard", isCorrect: false },
          { answer: "frog", isCorrect: true },
          { answer: "bird", isCorrect: false },
        ],
    },
    {
        id: 6,
        question: "A rattlesnake's rattle is made of the same material as what human body part?",
        answers: [
          { answer: "fingernail", isCorrect: true },
          { answer: "earlobe", isCorrect: false },
          { answer: "teeth", isCorrect: false },
          { answer: "bobe", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "The largest TOWN home to what animal was an underground coloby measuring 25,000 square miles, found in Texas?",
        answers: [
          { answer: "capybara", isCorrect: false },
          { answer: "beaver", isCorrect: false },
          { answer: "meerkat", isCorrect: false },
          { answer: "prairie dog", isCorrect: true },
        ],
    },
    {
        id: 8,
        question: "Known for its intelligence, which dog breed has been found capable of understanding more than a thousand words?",
        answers: [
          { answer: "French Bulldog", isCorrect: false },
          { answer: "Dachshund", isCorrect: false },
          { answer: "Cocker Spaniel", isCorrect: false },
          { answer: "Border Collie", isCorrect: true },
        ],
    },
    {
        id: 9,
        question: "Though they sound happy, what animal's LAUGH is a reaction to being threatened?",
        answers: [
          { answer: "woodpecker", isCorrect: false },
          { answer: "hyena", isCorrect: true },
          { answer: "ox", isCorrect: false },
          { answer: "baboon", isCorrect: false },
        ],
    },
    {
        id: 10,
        question: "Capable of exceeding 186 miles per hour, what is the fastest creature in the animal kingdom?",
        answers: [
          { answer: "horsefly", isCorrect: false },
          { answer: "black marlin", isCorrect: false },
          { answer: "cheetah", isCorrect: false },
          { answer: "peregrine falcon", isCorrect: true },
        ],
    },
    {
        id: 11,
        question: "Which animal species can live in extremes of both heat and cold, from −20 °F to 120 °F?",
        answers: [
          { answer: "chuckwalla iguanas", isCorrect: false },
          { answer: "Bactrian camel", isCorrect: false },
          { answer: "polar bear", isCorrect: true },
          { answer: "emperor penguin", isCorrect: false },
        ],
    },
    {
        id: 12,
        question: "An individual animal of which type was found to be at least 272 years old, suggesting that its type includes the world’s longest-living vertebrate?",
        answers: [
          { answer: "Indian elephant", isCorrect: false },
          { answer: "Galapagos tortoise", isCorrect: false },
          { answer: "Greenland shark", isCorrect: true },
          { answer: "Japanese wagyu cattle", isCorrect: false },
        ],
    },
    {
        id: 13,
        question: "Growing up to 59 feet (18 meters) long, which is the world’s largest living fish?",
        answers: [
          { answer: "whale shark", isCorrect: true },
          { answer: "marlin", isCorrect: false },
          { answer: "manta ray", isCorrect: false },
          { answer: "sailfish", isCorrect: false },
        ],
    },
];

  const gameScreen = document.querySelector(".game")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answersContainer = document.querySelector(".answers")
  const submit = document.querySelector(".submit")
  const play = document.querySelector(".play")

  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;

  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;

    showQuestion(qIndex);
  }

  play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    
    playAgain()
  })

  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Score: ${correctCount* 10}`;
  };

  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
    `<div class="answer">
        <input
            name="answer" 
            type="radio" 
            id=${index} 
            value=${item.isCorrect}
        />
        <label for=${index}>
            ${item.answer}
        </label>
    </div>`
    ).join("");

    selectAnswer()
  };

  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
  };

  const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null ) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else alert("Please select an answer!");
    });
  };
  showQuestion(qIndex);
  submitAnswer();