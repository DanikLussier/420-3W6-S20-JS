//==============================================================================================

var gTabPersos; // Variable qui contient le tableau des personnages.

//==============================================================================================
// Attendre que la page soit chargée puis...
//
// - Distribuer automatiquement tous les éléments de la classe perso dans le tableau gTabPersos.
//
// - Parcourir tous les éléments du tableau gTabPersos pour leur ajouter un écouteur
//   qui associe l'événement click à la fonction clickSurPerso.
//==============================================================================================

document.addEventListener('DOMContentLoaded', function() {

	gTabPersos = document.querySelectorAll('.perso');

	for (var index = 0; index < gTabPersos.length; index++)
        gTabPersos[index].addEventListener('click', clickSurPerso);
});

//==============================================================================================
// Fonction qui est appelée lors d'un click sur un personnage.
//==============================================================================================
//
// Cette fonction va chercher le data-valeur du personnage cliqué et l'affiche dans le titre.
//
//==============================================================================================
//	 À FAIRE :
//
// - Récupérer dans la variable texteElement l'attribut data-valeur.
// - Modifier le texte en haut de la page pour une phrase semblable à
//    "Mon data-valeur est : " suivi de la valeur de la variable.
//    (Note: trouver l'id de l'élément à modifier à partir du fichier html)
// ==============================================================================================
function clickSurPerso()
{
	
}


