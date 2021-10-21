'use strict'

//recupera contenitore delle card
const teamContainer = document.querySelector('.team-container');

//crea un array di oggetti contenente i 6 membri pre-esistenti
const members = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    img: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    img: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg',
  },
];

//ciclo che scorre tutti gli elementi dell'array 
for (let i = 0; i < members.length; i++) {
  const element = members[i];

  const memberName = element.name;
  const memberRole = element.role;
  const memberImg = element.img;

  createMemberCard(teamContainer, memberName, memberRole, memberImg);  
  
}

//recupera il bottone del form e il container dove si trova
//const addMemberContainer = document.querySelector('form-container'); 
const addMemberBtn = document.getElementById('addMemberButton'); 

//eventListener al click del bottone che prende i dati inseriti nel form e, tramite la funzione createMemberCard, crea la card 
addMemberBtn.addEventListener('click', 
function name() {

  const formName = document.getElementById('name').value;
  const formRole = document.getElementById('role').value;
  const formImg = document.getElementById('image').value;

  members.push({name: formName, role: formRole, img: formImg});
  console.log(members);
  
  createMemberCard(teamContainer, formName, formRole, formImg);

});

//funzione che con un .innerHTML aggiunge, per ogni oggetto, la proprietà giusta a img, h3 e p
function createMemberCard(teamContainer, memberName, memberRole, memberImg) {

  teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                  <img
                                    src="img/${memberImg}"
                                    alt="${memberName}"
                                  />
                                </div>
                                <div class="card-text">
                                  <h3>${memberName}</h3>
                                  <p>${memberRole}</p>
                                </div>
                              </div>`;

}
