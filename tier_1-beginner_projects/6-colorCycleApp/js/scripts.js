// Seleção dos elementos:
const inputColor = document.querySelectorAll('.input-color');
const colorBox = document.querySelector('.color-box');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const inputR = document.querySelector('#input-r');
const inputG = document.querySelector('#input-g');
const inputB = document.querySelector('#input-b');
const colorLabel = document.querySelector('#color-label');
const warningMsg = document.querySelector('#warning');
const result = document.querySelector('.result');

// Variáveis
let isOn = false;
let intervalId;


// Funções
const validateHex = (num) => {
  let regEx = /^[0-9a-fA-F]+$/;
  let isHex = regEx.test(num.toString());
  
  if(isHex) {
    return true;
  } else {
    return false;
  }
}

const generateHexNum = () => {
  const min = 85;
  const max = 170;

  const r = parseInt(inputR.value, 16);
  const g = parseInt(inputG.value, 16);
  const b = parseInt(inputB.value, 16);

  const maxDec = Math.max(r, g, b);
  let newR, newG, newB, newHex;

  if (maxDec === r) {
    newR = r.toString(16).padStart(2, '0');
    newG = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
    newB = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
  } else if (maxDec === g) {
    newR = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
    newG = g.toString(16).padStart(2, '0');
    newB = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
  } else {
    newR = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
    newG = Math.floor(min + Math.random() * (max - min + 1)).toString(16).padStart(2, '0');
    newB = b.toString(16).padStart(2, '0');
  }
  
  newHex = `${newR}${newG}${newB}`.toUpperCase();

  return newHex;
};

// Eventos
inputColor.forEach(inputCol => {
  inputCol.addEventListener('keyup', (event) => {
    if(!validateHex(event.target.value)) {
      inputCol.value = inputCol.value.slice(0, -1);
    }
  });
});

inputColor.forEach(inputCol => {
  inputCol.addEventListener('keyup', (event) => {
    const hex = `${inputR.value}${inputG.value}${inputB.value}`;
    colorLabel.innerHTML = `#${hex}`;
  
    if(validateHex(hex) && hex.length === 6) {
      colorBox.style.backgroundColor = `#${hex}`;
      
      warningMsg.classList.add('hidden');
    } else {
      colorBox.style.backgroundColor = `#FFFFFF`;
    }
  });
});

startBtn.addEventListener('click', () => {
  const hex = `${inputR.value}${inputG.value}${inputB.value}`;

  if (!isOn && hex.length === 6 && validateHex(hex)) {
    isOn = true;
    intervalId = setInterval(() => {
      let hexaNum = `#${generateHexNum()}`;
      colorBox.style.backgroundColor = hexaNum;
      result.innerHTML = hexaNum;
      
      startBtn.disabled = true;
    }, 1000);
  } else {
    warningMsg.classList.remove('hidden');
  }
});

stopBtn.addEventListener('click', () => {
  if (isOn) {
    clearInterval(intervalId);
    isOn = false;
    
    startBtn.disabled = false;
  }
});
