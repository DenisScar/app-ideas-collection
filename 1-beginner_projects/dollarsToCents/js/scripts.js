// Seleção de elementos
const inputDollar = document.querySelector('#input-dollar');
const convertBtn = document.querySelector('#convert-btn');
const resultBox = document.querySelector('#result-box');


// Funções
const convertDollarToCents = () => {
  const dollars = parseFloat(inputDollar.value.replace(',', '.')) || 0; // Corrige o formato
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const currencyValue = formatter.format(dollars);
  let centsValue = Math.round(dollars * 100); // Arredonda para evitar problemas de precisão
  const quarters = Math.floor(centsValue / 25);
  centsValue -= quarters * 25;
  const dimes = Math.floor(centsValue / 10);
  centsValue -= dimes * 10;
  const nickels = Math.floor(centsValue / 5);
  centsValue -= nickels * 5;
  const pennies = centsValue;
  
  const result =
    `${currencyValue} corresponde a:
        
    - ${quarters} Quarter(s) = $${(quarters * 0.25).toFixed(2)}
    - ${dimes} Dime(s) = $${(dimes * 0.10).toFixed(2)}
    - ${nickels} Nickel(s) = $${(nickels * 0.05).toFixed(2)}
    - ${pennies} Penny(ies) = $${(pennies * 0.01).toFixed(2)}`;

  return result;
};


// Eventos
convertBtn.addEventListener('click', () => {
  resultBox.innerText = convertDollarToCents();
});

inputDollar.addEventListener('input', (event) => {
  const regExp = /^\d*([,.]?\d{0,2})?$/;
  let val = inputDollar.value;

  if (!regExp.test(val)) {
    inputDollar.value = val.slice(0, -1);
  }
});