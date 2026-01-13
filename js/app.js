document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the home page
    const deckList = document.getElementById('deck-list');
    if (deckList) {
        loadDeckList();
    }

    // Check if we are on the study page
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        initStudyMode();
    }
});

function loadDeckList() {
    const container = document.getElementById('deck-list');

    Object.keys(decks).forEach(key => {
        const deck = decks[key];
        const card = document.createElement('a');
        card.className = 'deck-card';
        card.href = `study.html?deck=${key}`;

        card.innerHTML = `
      <div class="deck-title">${deck.title}</div>
      <div class="deck-info">${deck.cards.length} Cards</div>
      <p class="deck-description">${deck.description}</p>
      <div class="start-btn">Start Studying</div>
    `;

        container.appendChild(card);
    });
}

let currentDeckId = null;
let currentCardIndex = 0;
let isFlipped = false;

function initStudyMode() {
    const params = new URLSearchParams(window.location.search);
    const deckId = params.get('deck');

    if (!deckId || !decks[deckId]) {
        window.location.href = 'index.html';
        return;
    }

    currentDeckId = deckId;
    const deck = decks[currentDeckId];

    // Set Title
    document.getElementById('deck-title').textContent = deck.title;

    // Event Listeners
    const card = document.getElementById('flashcard');
    card.addEventListener('click', flipCard);

    document.getElementById('prev-btn').addEventListener('click', prevCard);
    document.getElementById('next-btn').addEventListener('click', nextCard);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') nextCard();
        if (e.key === 'ArrowLeft') prevCard();
        if (e.key === 'Enter') flipCard();
    });

    renderCard();
}

function flipCard() {
    const card = document.getElementById('flashcard');
    isFlipped = !isFlipped;
    if (isFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

function renderCard() {
    const deck = decks[currentDeckId];
    const cardData = deck.cards[currentCardIndex];

    // Reset flip
    isFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');

    // Update content with a small delay to allow flip animation to reset if needed
    // But since we are changing content, we might want to do it immediately if not flipping

    document.getElementById('card-front-content').textContent = cardData.question;
    document.getElementById('card-back-content').textContent = cardData.answer;

    // Update status
    document.getElementById('status').textContent = `${currentCardIndex + 1} / ${deck.cards.length}`;

    // Update progress bar
    const progress = ((currentCardIndex + 1) / deck.cards.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // Update button states
    document.getElementById('prev-btn').style.opacity = currentCardIndex === 0 ? '0.5' : '1';
    document.getElementById('prev-btn').style.pointerEvents = currentCardIndex === 0 ? 'none' : 'auto';

    document.getElementById('next-btn').style.opacity = currentCardIndex === deck.cards.length - 1 ? '0.5' : '1';
    document.getElementById('next-btn').style.pointerEvents = currentCardIndex === deck.cards.length - 1 ? 'none' : 'auto';
}

function nextCard() {
    if (currentCardIndex < decks[currentDeckId].cards.length - 1) {
        currentCardIndex++;
        renderCard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        renderCard();
    }
}
