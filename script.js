let action   = "" ; 
let ordi     = "" ; 
let ordiTxt  = "" ;
const pierre = document.getElementById("pierre") ;
const papier = document.getElementById("papier") ;
const ciseau = document.getElementById("ciseau") ;
const submit = document.getElementById("submit") ; 
const playerIn = document.getElementById("playerIn") ;
const odriIn = document.getElementById("ordiIn") ;
const resultat = document.getElementById("resTxt") ;
function affiche(){playerIn.innerText = action}
pierre.addEventListener('click' , () => {action = "pierre" ;affiche() ;})
papier.addEventListener('click' , () => {action = "papier" ;affiche() ;})
ciseau.addEventListener('click' , () => {action = "ciseau" ;affiche() ;})
function getRandomInt(max) {return Math.floor(Math.random() * max);}
submit.addEventListener('click', () => { 
    ordi = getRandomInt(3) ; 
    if (action === "") { console.log("Error : no selection ") ; return ; }
    switch (ordi){ case 0 : ordiTxt = "pierre" ; break ;case  1: ordiTxt = "papier" ; break ; case  2 :ordiTxt = "ciseau" ; break ; }
    odriIn.innerText = ordiTxt ; 
    switch (action){ case "pierre" : action = 0 ; break ;case "papier" : action = 1 ; break ; case "ciseau" :action = 2 ; break ; }
    if (action === ordi){resultat.innerText = "égalité";return}
    if (action === 0){if (action + 2 === ordi){resultat.innerText = "le joueur a gangé";return ; }}
    if (action - 1 === ordi){resultat.innerText = "le joueur a gangé";return ; }
    if (ordi ===  0) {if (ordi + 2 === action) {resultat.innerText = "l'ordi a gagné"; return ;}}
    if (ordi   - 1 === action){resultat.innerText = "l'ordi a gagné"; return ;}})