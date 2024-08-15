// Sélectionner tous les boutons avec la classe 'button' et créer un tableau
const touche=[...document.querySelectorAll('.button')];
// Extraire les keycodes de chaque bouton à partir de l'attribut data-key
const listeKeycode=touche.map(touches=>touches.dataset.key);
const ecran= document.querySelector('.ecran')


// Ajouter un écouteur d'événement pour capturer la pression des touches
    // Récupérer le code de la touche pressée
    


    document.addEventListener('keydown',(e) =>{

        const valeur= e.keyCode.toString();
        calculer(valeur)
        
    })

    document.addEventListener("click",(e)=>{

    const valeur= e.target.dataset.key;
     calculer(valeur)
   
    });




    const calculer=(valeur) =>{

    
if(listeKeycode.includes(valeur)){
switch(valeur){
case'8':
ecran.textContent='';
break;
case '13':
    const calcul=eval(ecran.textContent);
    ecran.textContent= calcul;
    break;
    default:
        const indexKeycode=listeKeycode.indexOf(valeur);
        const touches =touche[indexKeycode];
        ecran.textContent+= touches.innerHTML;
}

}
}
window.addEventListener('error',(e)=>{
    alert('une erreur est suvernu lors de votre calcul:'+e.message)
})