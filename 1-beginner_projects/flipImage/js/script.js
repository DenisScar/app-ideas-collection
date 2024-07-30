// Seleção de elementos:
const cards = document.querySelectorAll('.card');
const xAxisButtons = document.querySelectorAll('.x-axis-btn');
const yAxisButtons = document.querySelectorAll('.y-axis-btn');


// Funções:
const flipX = (card) => {
  const isFlippedX = card.getAttribute('data-flipped-x') === 'true';
  card.setAttribute('data-flipped-x', !isFlippedX);
  card.style.transform = `rotateX(${!isFlippedX ? 180 : 0}deg) rotateY(${card.getAttribute('data-flipped-y') === 'true' ? 180 : 0}deg)`;
};

const flipY = (card) => {
  const isFlippedY = card.getAttribute('data-flipped-y') === 'true';
  card.setAttribute('data-flipped-y', !isFlippedY);
  card.style.transform = `rotateY(${!isFlippedY ? 180 : 0}deg) rotateX(${card.getAttribute('data-flipped-x') === 'true' ? 180 : 0}deg)`;
};


// Inicialização dos estados:
cards.forEach(card => {
  card.setAttribute('data-flipped-x', false);
  card.setAttribute('data-flipped-y', false);
});


// Eventos:
xAxisButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card-container').querySelector('.card');
    flipY(card);
  });
});

yAxisButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card-container').querySelector('.card');
    flipX(card);
  });
});
