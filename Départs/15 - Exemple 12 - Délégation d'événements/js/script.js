﻿// Constante qui indique la valeur maximum de la propriété css left
var MAX_X = 1720;
// Constante qui indique la valeur maximum de la propriété css top
var MAX_Y = 620;


/* ÉTAPE 1
 *
 * Fonction qui gère l'événement indiquant que la page est chargée
 *
 * Description:    	
 *              Ajoute un écouteur sur la scène pour l'événement click qui fait appel à la fonction
 *              clickSurCanard.
 */
/* TODO:
  *          - Récupérez dans une variable, tous les éléments de la page ayant la classe canard
  *
  *          - Parcourez les éléments récupérés dans votre tableau
  *          
  *          - Ajoutez un écouteur sur la scène (élément ayant le id scene) pour l'événement click 
  *			  faisant appel à la fonction clickSurCanard.
 */
document.addEventListener('DOMContentLoaded', function() {


    
});


/* ÉTAPE 2
 *
 * Gestionnaire d'événement click sur les canards qui se trouvent sur la scène
 *
 * Description:    	
 *              Lors d'un click sur un canard, elle construit une chaine HTML pour le nouveau canard qui sera
 *              affiché, elle retire le canard cliqué de la page et elle ajoute le nouveau canard.
*/
/* TODO:
  *          - Si l'élément cible de l'événement possède la classe canard
  *
  *          		- Récupérez dans une variable nommée face, un nombre aléatoire entre 1 (inclus) et 2 (inclus) pour le choix de la face du canard (canard qui fait face à droite (1) ou à gauche (2)
  *
  *          		- Récupérez dans une variable nommée posX, un nombre aléatoire entre 0 (inclus) et MAX_X (exclus) pour la position horizontale du canard
  *
  *          		- Récupérez dans une variable nommée posY, un nombre aléatoire entre 0 (inclus) et MAX_Y (exclus) pour la position verticale du canard
  *
  *          		- Récupérez dans une variable nommée canard, un nouvel élément de type div (votre nouveau canard)
  *
  *          		- Ajoutez au nouvel élément tout juste créé les classes canard et cX, où X est le nombre aléatoire récupéré dans la variable face.
  *
  *          		- Modifiez les propriétés CSS (style) left et top de votre nouveau canard respectivement aux valeurs de posX et posY.
  *
  *          		- Retirez l'élément cible de l'événement de la page (il faut retirer le canard qui s'est fait tiré!)
  *
  *          		- Ajoutez votre nouveau canard dans l'élément ayant le id scene
 */
function clickSurCanard(e) 
{
	if(e.target.classList.contains('canard'))
	{
		var face = randNumber(2) + 1;
		var x = randNumber(MAX_X);
		var y = randNumber(MAX_Y);
		
		var canard = document.createElement('div');
		
		canard.classList.add('canard');
		canard.classList.add('c' + face);
		
		canard.style.left = x + 'px';
		canard.style.top = y + 'px';

		e.target.remove()
			
		scene.appendChild(canard);		
	}
}


/* Fonction randNumber
 *
 * Gestionnaire d'événement click sur les canards (élément ayant la classe canard)
 *
 * Description:    	
 *              Cette fonction fourni un nombre aléatoire compris entre 0 et pMax - 1.
 *
 * Paramètres:
 *      		pMax:           Le nombre maximum à retourner, non inclus.
*/
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}
