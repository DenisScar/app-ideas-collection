const people = [
  {
    name: "Ana Silva",
    street: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    telephone: "+55 11 98765-4321",
    birthday: "1990-05-14"
  },
  {
    name: "Bruno Oliveira",
    street: "Avenida Paulista, 456",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    telephone: "+55 11 91234-5678",
    birthday: "1985-10-22"
  },
  {
    name: "Carla Souza",
    street: "Rua do Comércio, 789",
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
    telephone: "+55 21 99876-5432",
    birthday: "1992-08-30"
  },
  {
    name: "Daniel Costa",
    street: "Rua das Palmeiras, 321",
    city: "Belo Horizonte",
    state: "MG",
    country: "Brasil",
    telephone: "+55 31 98765-4321",
    birthday: "1988-12-15"
  }
];

const ul = document.querySelector('ul');
const infosField = document.querySelector('aside');


people.forEach(person => {
  let newLi = document.createElement('li');
  let newA = document.createElement('a');
  let obj = person;
  let infos = document.createElement('p');
  
  newA.setAttribute("href", "#");
  newA.textContent = person.name;
  
  newA.addEventListener('click', (e) => {
    e.preventDefault();
    
    const arr = Object.values(obj);
    const txt = `Nome: ${arr[0]}
    Logradouro: ${arr[1]}
    Cidade: ${arr[2]}
    Estado: ${arr[3]}
    País: ${arr[4]}
    Telefone: ${arr[5]}
    Nascimento: ${arr[6]}
    `;
    
    infosField.innerText = txt;
  });
  
  newLi.appendChild(newA);
  ul.appendChild(newLi);
})

