// Seleção dos elementos:
const lights = document.querySelectorAll(".light");
const onOffBtn = document.querySelector(".onOffBtn");


// Variáveis:
let isBlinking = false;
let intervalId;


// Funções:
const turnOnLight = (arg) => {
  const light = arg;
  const lightClasses = arg.classList;
  
  for(let cls of lightClasses) {
    if(cls.includes("off")) {
      const newClass = cls.replace("off", "on");
      
      light.classList.remove(cls);
      light.classList.add(newClass);
    }
  }
}

const turnOffLight = (arg) => {
  const light = arg;
  const lightClasses = arg.classList;
  
  for(let cls of lightClasses) {
    if(cls.includes("on")) {
      const newClass = cls.replace("on", "off");
      
      light.classList.remove(cls);
      light.classList.add(newClass);
    }
  }
}

const turnOnLeds = () => {
  const items = lights;
  const delay = 100;
  
  items.forEach((item, index) => {
    setTimeout(() => {
      turnOnLight(item);
      
      setTimeout(() => {
        turnOffLight(item);
      }, delay);
    }, index * delay);
  });
};

toggleBlink = () => {
  if(isBlinking) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(() => {
      turnOnLeds();
    }, 250);
  }
  
  isBlinking = !isBlinking;
};

// Eventos:
onOffBtn.addEventListener('click', toggleBlink);
