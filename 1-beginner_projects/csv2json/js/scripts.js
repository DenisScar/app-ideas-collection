// Seleção de elementos
const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const converterBtn = document.querySelector('#converter-btn');
const copyBtn = document.querySelector('#copy-btn');
const clearBtn = document.querySelector('#clear-btn');
const inputEmptyMsg = document.querySelector('#input-empty');


// Funções
const csv2json = (csv) => {
  console.log(csv)
  const arrCsv = csv.split('\n').map(item => item.split(',').map(value => value.trim()));
  console.log(arrCsv)
  const arrObjs = [];

  for(let i = 1; i < arrCsv.length; i++) {
    const register = {};
  
    for(let j = 0; j < arrCsv[i].length; j++) {
      const key = arrCsv[0][j];
      const val = arrCsv[i][j];
    
      register[key] = val;
    }

    arrObjs.push(JSON.stringify(register,null,2));
  }
  
  const json = `[${arrObjs.join(',\n')}]`;
  
  return json;
}

const copyText = () => {
	navigator.clipboard.writeText(outputField.textContent.trim());
	
	copyBtn.textContent = 'Copiado!';
	
	setTimeout(() => {
		copyBtn.textContent = "Copiar";
	}, 2000);
};


// Eventos
converterBtn.addEventListener('click', () => {
  const inputFieldValue = inputField.value;
  const regex = /^[\w\u00C0-\u00FF!"#$%&'()*+\-.:;<=>?@[\\\]^_`{|}~]+(,[\w\u00C0-\u00FF!"#$%&'()*+\-.:;<=>?@[\\\]^_`{|}~]+)+$/;
  const lines = inputFieldValue.split('\n');
  const isValidCSV = lines.every(line => regex.test(line));
  
  if(isValidCSV && inputFieldValue.includes('\n')) {
    inputEmptyMsg.classList.add('hide');
    
    const result = document.createTextNode(`${csv2json(inputField.value)}`);
  
    outputField.innerHTML = '';
    outputField.appendChild(result);
  } else {
    inputEmptyMsg.classList.remove('hide');
    outputField.innerText = '';
  }
});

clearBtn.addEventListener('click', () => {
  inputField.value = '';
  outputField.innerText = '';
});

copyBtn.addEventListener("click", copyText);



/*
TODO
- Validar CSV no input com regex;
- Botão 'Copiar JSON';
*/
