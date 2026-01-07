document.addEventListener('DOMContentLoaded', initQuiz);

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let allAnswers = []; // Pool of distracting answers

function initQuiz() {
    const topicList = document.getElementById('topic-list');

    // Create button for "All Topics"
    const allBtn = document.createElement('button');
    allBtn.className = 'option-btn';
    allBtn.innerHTML = '<strong>All Topics</strong> <span style="font-size: 0.9em; opacity: 0.8; margin-left: 10px;">(Mix of everything)</span>';
    allBtn.onclick = () => startQuiz('all');
    topicList.appendChild(allBtn);

    // Create buttons for each deck
    Object.keys(decks).forEach(key => {
        const deck = decks[key];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${deck.title}</strong> <span style="font-size: 0.9em; opacity: 0.8; margin-left: 10px;">(${deck.cards.length} Questions)</span>`;
        btn.onclick = () => startQuiz(key);
        topicList.appendChild(btn);
    });
}

function startQuiz(deckKey) {
    // Hide selection, show quiz
    document.getElementById('topic-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Pool answers from ALL decks for better distractors, even if playing one topic
    Object.values(decks).forEach(deck => {
        if (deck.cards) {
            allAnswers.push(...deck.cards.map(c => c.answer));
        }
    });

    // Load Questions based on selection
    if (deckKey === 'all') {
        Object.values(decks).forEach(deck => {
            if (deck.cards) questions.push(...deck.cards);
        });
    } else if (decks[deckKey]) {
        questions.push(...decks[deckKey].cards);
    }

    // Shuffle questions
    shuffleArray(questions);

    // Update Total Count
    document.getElementById('total-q-num').textContent = questions.length;

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQ = questions[currentQuestionIndex];

    // Update counts
    document.getElementById('current-q-num').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    document.getElementById('result-message').textContent = "";

    // Render text
    document.getElementById('question-text').textContent = currentQ.question;

    // Generate Options
    const correctAns = currentQ.answer;
    const options = [correctAns];

    // Pick 3 random distractors that are NOT the correct answer
    const distractors = allAnswers.filter(a => a !== correctAns);
    shuffleArray(distractors);

    // Take top 3, or less if not enough unique distractors
    options.push(...distractors.slice(0, 3));

    // Shuffle options so correct isn't always first
    shuffleArray(options);

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear old

    options.forEach(optText => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optText;
        btn.onclick = () => handleAnswer(btn, optText, correctAns);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedBtn, selectedText, correctText) {
    const buttons = document.querySelectorAll('.option-btn');

    // Disable all buttons to prevent double guess
    buttons.forEach(btn => btn.disabled = true);

    if (selectedText === correctText) {
        selectedBtn.classList.add('correct');
        score++;
        document.getElementById('result-message').style.color = "#4ade80";
        document.getElementById('result-message').textContent = "Correct! Well done.";
    } else {
        selectedBtn.classList.add('wrong');
        document.getElementById('result-message').style.color = "#f87171";
        document.getElementById('result-message').textContent = "Incorrect.";

        // Highlight the correct one
        buttons.forEach(btn => {
            if (btn.textContent === correctText) {
                btn.classList.add('correct');
            }
        });
    }

    // Update Score UI
    document.getElementById('score').textContent = score;

    // Wait and go next
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const summary = document.getElementById('quiz-summary');
    summary.style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('final-score').textContent = percentage;
    document.getElementById('final-stats').textContent = `You got ${score} out of ${questions.length} questions correct.`;
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
