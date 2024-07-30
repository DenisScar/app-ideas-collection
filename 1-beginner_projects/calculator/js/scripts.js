// Seleção dos elementos:


// Variáveis:
const re = /^[-+]?\d{1,8}(?:\.\d+)?[-+*\/][-+]?\d{1,8}(?:\.\d+)?$/;
const input = '30.6+107659643';


// Funções:
const calculateExpression = (exp) => {
  const [a, b] = exp.match(/-?\d{1,8}(?:\.\d+)?/g).map(Number);
	let result = '';
	
	if (!exp.match(/^[-+]?\d{1,8}(?:\.\d+)?[-+*\/][-+]?\d{1,8}(?:\.\d+)?$/)) {
		return 0;
	}
	
  if (exp.match(/[-+]?\d{1,8}(?:\.\d+)?[-+][-+]?\d{1,8}(?:\.\d+)?$/)) {
	  result = a + b;
  }

  if (exp.match(/\d[*]\d/)) {
  	result = a * b;
  }

  if (exp.match(/\d[\/]\d/)) {
  	result = a / b;
  }
  
  return result <= 10000000 ? result : 'ERR';
};

console.log(calculateExpression(input));


// Eventos:

