//==============================================================================================

var gTabPersos;         // Variable qui contient le tableau des personnages.

//==============================================================================================
// Attendre que la page soit chargée puis...
//
// - Distribuer automatiquement tous les éléments de la classe perso dans le tableau gTabPersos.
//
// - Parcourir tous les éléments du tableau gTabPersos et à chaque itération:
// 	    -Ajouter un écouteur sur l'élément pour associer le click à la fonction clickSurPerso.
// 	    -Ajouter un écouteur sur l'élément pour associer mouseover à la fonction sourisSurPerso.
// 	    -Ajouter un écouteur sur l'élément pour associer mouseout à la fonction sourisHorsPerso.
//==============================================================================================

document.addEventListener('DOMContentLoaded', function() {


});

//==============================================================================================
// Fonction qui est appelée lors d'un click sur un personnage.
//==============================================================================================
//
// Cette fonction enlève la sélection sur le personnage qui l'a pour la mettre sur le nouveau
// personnage que l'utilisateur vient de cliquer.
//
//==============================================================================================
// À FAIRE:
//
// Obtenir dans une variable le PREMIER élément qui possède la classe selection.
//
// Si la variable n'est pas null:
//    -Enlever la classe selection de l'élément pointé par la variable.
//
// -Enlever la classe emphase de l'élément ciblé.
// -Ajouter la classe selection à l'élément ciblé.
//==============================================================================================

function clickSurPerso()
{
}
//==============================================================================================
// Fonction qui est appelée lorsque la souris passe sur un personnage.
//==============================================================================================
// Si l'élément ciblé NE POSSÈDE PAS la classe selection:
//    -Ajouter la classe emphase à l'élément ciblé.
//==============================================================================================

function sourisSurPerso()
{
	this.classList.add('emphase');
}
//==============================================================================================
// Fonction qui est appelée lorsque la souris quitte un personnage.
//==============================================================================================
// -Retirer la classe emphase de l'élément ciblé.
//==============================================================================================

function sourisHorsPerso()
{
	this.classList.remove('emphase');
}