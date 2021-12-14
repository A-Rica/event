//variables //

// let cours = 'nouvelle fonctionnalité javascript';
//console.log(cours + ' // avant MAJ ')
// const prenoms = 'patrice';
//console.log(prenoms);

// Let changeant; évolutive.
// const variable fixe; immuable; qui ne peut pas changer.

// Functions

// plusieurs facon de déclarer une fonction

// function fairequelqueschose(){
  //  console.log('je fais un truc');
//}
// fonction, une suite d'instruction, algorithme 

// const faireunetache = (type) => {
 //   console.log('je fais une tache : ' + type);
//}
// fonction flécher

// faireunetache('la vaisselle');
// faireunetache('les courses')

const btn = document.querySelector('#btn');
const img = document.getElementById('img');


btn.addEventListener('click', () => {
     img.classList.toggle('show');
})

//****

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove' , (e) => {
horizontal.innerHTML = e.x;
vertical.innerHTML = e.y;
mouseEvent.style.left = e.x / window.innerWidth * 100 + '%';

if ( e.x > 500) {
  document.body.style.filter = "blur(3px)";
}
 else {
  document.body.style.filter = "none";
}

});


//****

document.getElementById('input').addEventListener('input', (e) => {
vertical.innerHTML = e.target.value;
})
//*** 
const theme = document.querySelectorAll('.theme');

theme.forEach ( (item) => {
  item.addEventListener('click', (e) => {
    document.body.classList.remove('darktheme', 'salmontheme', 'yellowtheme');
    switch (e.target.id) {
      case "dark": 
      document.body.classList.add('darktheme');
      break;
      case "salmon": 
      document.body.classList.add('salmontheme');
      break;
      case "yellow": 
      document.body.classList.add('yellowtheme');
      break;
      default:
        null;
    }
  })
}
)