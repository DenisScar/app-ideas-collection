const binInput = document.querySelector("#form input");
const binBtn = document.querySelector("#form button");
const decResult = document.querySelector("#result-container p");
const msgNotBin = document.querySelector("#msg-notBin");

//Funções:
//CORRIGIR: FUNÇÃO NÃO PODE USAR ARRAY - USAR ln()!!!!!
const convertBin2Dec = () => {
	const binInputValue = binInput.value;
	const numArr = String(binInputValue).split("").map(Number).reverse();
	let sum = 0;
	
	for(let i = 0; i < numArr.length; i++) {
	  let positionValue = Math.pow(2,i) * numArr[i];
	  
	  sum += positionValue;
  }
  
  decResult.innerHTML = sum;
};

const isValidBin = (num) => {
	if(num.keyCode !== 48 || num.keyCode !== 49) {
		return false;
	}
};

//Eventos:
binBtn.addEventListener("click", () => {
	const bin = binInput.value;
	
	if(!binInput) return;
	if(!/^[01]+$/.test(bin)) {
		msgNotBin.classList.remove('hide');
		return;
	} else {
		msgNotBin.classList.add('hide');
	}
	
  convertBin2Dec();
});

binInput.addEventListener("keydown", (e) => {
	if(e.code === "Enter") {
		convertBin2Dec();
	}
});

binInput.addEventListener("keyup", () => {
  if (!binInput.value) {
    decResult.innerText = "Resultado da conversão";
  }
});

binInput.addEventListener("input", () => {
	const validValues = ['0', '1'];
	
	if (!validValues.includes(binInput)) {
    inputElement.value = '';
  }
});
