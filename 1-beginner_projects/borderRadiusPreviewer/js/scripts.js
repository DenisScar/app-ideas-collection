const box = document.querySelector("#box");

const inputTopLeft = document.querySelector("#input-top-left");
const inputTopRight = document.querySelector("#input-top-right");
const inputBottomRight = document.querySelector("#input-bottom-right");
const inputBottomLeft = document.querySelector("#input-bottom-left");

const topLeftValue = document.querySelector("#top-left-value");
const topRightValue = document.querySelector("#top-right-value");
const bottomRightValue = document.querySelector("#bottom-right-value");
const bottomLeftValue = document.querySelector("#bottom-left-value");

const btnCopyCSS = document.querySelector("#btn-copy-css");

//Funções:
const copyText = () => {
	let textToCopy = document.querySelector("#container-result-css p");
	
	navigator.clipboard.writeText(textToCopy.textContent.trim());
	
	btnCopyCSS.textContent = 'Copiado!';
	
	setTimeout(() => {
		btnCopyCSS.textContent = "Copiar";
	}, 2000);
};

//Eventos:
inputTopLeft.addEventListener('input', () => {
	box.style.borderTopLeftRadius = `${inputTopLeft.value}px`;
	topLeftValue.textContent = `${inputTopLeft.value}px`;
});

inputTopRight.addEventListener('input', () => {
	box.style.borderTopRightRadius = `${inputTopRight.value}px`;
	topRightValue.textContent = `${inputTopRight.value}px`;
});

inputBottomRight.addEventListener('input', () => {
	box.style.borderBottomRightRadius = `${inputBottomRight.value}px`;
	bottomRightValue.textContent = `${inputBottomRight.value}px`;
});

inputBottomLeft.addEventListener('input', () => {
	box.style.borderBottomLeftRadius = `${inputBottomLeft.value}px`;
	bottomLeftValue.textContent = `${inputBottomLeft.value}px`;
});

btnCopyCSS.addEventListener("click", copyText);
