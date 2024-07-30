// Seleção dos elementos
const eventNameInput = document.querySelector('#event-name');
const eventDateInput = document.querySelector('#event-date');
const eventTimeInput = document.querySelector('#event-time');
const startBtn = document.querySelector('#start-btn');
const resultField = document.querySelector('#result');


// Funções
const calculateTimeInSeconds = (date, time) => {
  // Obtém o valor em segundos do tempo resultante
  const dateObj = new Date(`${date}T${time}`);
  const eventSec = Math.floor(dateObj.getTime() / 1000);
  const nowSec = Math.floor(Date.now() / 1000);
  const sumTime = eventSec - nowSec;
  const timeInSec = sumTime >= 0 ? sumTime : 0;
  
  return timeInSec;
};

const generateTimerTxt = (secs) => {
  let result;
  
  // Função para formatar o tempo
  const formatTime = (d, h, m, s) => {
    return `${d.toString().padStart(2, '0')} : ${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };
  
  let totalSeconds = secs;
  
  // Função para atualizar e exibir o temporizador
  const updateTimer = () => {
    if (totalSeconds >= 0) {
      const daysLeft = Math.floor(totalSeconds / 86400);
      const hoursLeft = Math.floor((totalSeconds % 86400) / 3600);
      const minsLeft = Math.floor((totalSeconds % 3600) / 60);
      const secsLeft = totalSeconds % 60;
      const eventName = eventNameInput.value;
      
      result = `${eventName}
      ${formatTime(daysLeft, hoursLeft, minsLeft, secsLeft)}`;
      
      // Preenchimento do timer do evento
      resultField.innerText = `${result}`;
      
      totalSeconds--;
      setTimeout(updateTimer, 1000);
    }
  };
  
  updateTimer();
};

const validateTime = (date, time) => {
  const dateInMiliSec = new Date(`${date}T${time}`).getTime();
  const nowTime = Date.now();
  const timeLapse = Math.floor((dateInMiliSec - nowTime) / 1000);
  
  return timeLapse >= 0;
};


// Eventos
startBtn.addEventListener('click', () => {
  // Valores dos inputs
  const eventName = eventNameInput.value;
  const eventDate = eventDateInput.value;
  const eventTime = eventTimeInput.value || '00:00';
  
  const isValidTime = validateTime(eventDate, eventTime);
  
  if (eventName && eventDate && isValidTime) {
    // Obtenção do tempo resultante, em segundos
    const resultTime = calculateTimeInSeconds(eventDate, eventTime);
    
    // Inicializa timer do evento
    resultField.classList.remove('warning');
    generateTimerTxt(resultTime);
  } else {
    resultField.classList.add('warning');
    resultField.innerText = 'Por favor, preencha o nome e a data futura corretamente.';
  }
});
