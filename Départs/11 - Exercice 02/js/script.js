//================================================================================================
// Variables Globales
//================================================================================================
// Variable qui contiendra les numéros de la séquence
var gTabSequenceNumeros = [];
// Variable qui servira à conserver l'index du numéro pour jouer la séquence
var gIndex;
// Variable qui servira à conserver l'identifiant de l'intervalle pour jouer la séquence
var gHorloge = null;
//================================================================================================


//================================================================================================
// Écouteur de page chargée qui s'occupe d'ajouter les écouteurs sur les éléments de la page.
//================================================================================================
document.addEventListener('DOMContentLoaded', function() {

	// Récupération dans un tableau des éléments qui ont la classe numero (les 10 touches)
    var tabTouches = document.querySelectorAll('.numero');

	// Ajout de trois écouteurs d'événement sur chacune des 10 touches
    for (var index = 0; index < tabTouches.length; index++)
    {
        tabTouches[index].addEventListener('mousedown', sourisMousedown);
        tabTouches[index].addEventListener('mouseup', sourisMouseUpOuOut);
        tabTouches[index].addEventListener('mouseout', sourisMouseUpOuOut);				
	}
	
	// Ajout d'un écouteur pour le click sur le bouton jouer
    jouer.addEventListener('click',jouerSequenceNumeros);
	// Ajout d'un écouteur pour le click sur le bouton vider
    vider.addEventListener('click',viderSequenceNumeros);
});


//================================================================================================
// Fonction qui s'occupe d'afficher la séquence
//================================================================================================
// Déclarez une variable nommée séquence et initialisez-là à "" (chaine vide)
//
// Parcourez tous les éléments du tableau de séquences de numéros
//		Ajoutez au bout de la chaine dans votre variable le numéro de la séquence.
//
// Modifiez le texte de l'afficheur pour la valeur de la séquence
//================================================================================================
function afficherSequence()
{
    var sequence = "";
	
	
	
	afficheur.textContent = sequence;
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe de de gérer un mousedown sur un numéro
//================================================================================================
// Récupérez dans une variable la valeur de l'attribut data-valeur de l'élément ciblé converti en 
//	entier.
//
// Ajoutez la valeur récupérée dans votre variable à la variable globale contenant les numéros de
//	la séquence.
//
// Appelez la fonction pour afficher la séquence
//
// Ajoutez la classe "on" à l'élément ciblé
//================================================================================================
function sourisMousedown()
{
	
	
	
	afficherSequence();
    this.classList.add('on');
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe de de gérer un mouseup ou un mouseout sur un numéro
//================================================================================================
// Retirez la classe "on" à l'élément ciblé
//================================================================================================
function sourisMouseUpOuOut()
{
    this.classList.remove('on');
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe de vider la séquence et d'ajuster l'afficheur
//================================================================================================
// Modifiez la valeur de la variable globale contenant les numéros de la séquence pour un tableau
//	vide ([]).
//
// Appelez la fonction qui affiche la séquence.
//================================================================================================
function viderSequenceNumeros()
{
    gTabSequenceNumeros = [];
	afficherSequence();
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe d'allumer une touche et de l'éteindre après un certain délai
//================================================================================================
// Récupérez dans une variable nommée elem l'élément ayant la classe de forme "noX", ou X est le 
//	numéro de la touche recu en paramètre.
//
// Ajouter la classe "on" à l'élément récupéré dans votre variable.
//
// Déclarez un "Timeout" qui retirera la classe "on" de l'élément récupéré dans votre variable, 
//	après le délai en milliseconde reàu en paramètre.
//================================================================================================
function allumerEtEteindreNumero(pNumero, pDelai)
{
	
	
	
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe de démarrer l'affichage de la séquence de numéros
//================================================================================================
// Modifiez la valeur de la variable globale contenant l'index du numéro de la séquence à 0.
//
// Démarrez un interval qui appellera la fonction qui affiche un numéro à toutes les 500 
//	millisecondes et récupérez son identifiant dans la variable globale gHorloge.
//================================================================================================
function jouerSequenceNumeros()
{
	
}
//================================================================================================


//================================================================================================
// Fonction qui s'occupe d'afficher un numéro de la séquence et d'arrêter l'interval à la fin
//================================================================================================
// Si l'index du numéro de la séquence à afficher (variable globale) est plus petit que le nombre 
//	de numéros dans la séquence
//
//		Récupérez dans une variable le numéro de la séquence à l'index à afficher
//	
//		Appelez la fonction pour allumer et éteindre un numéro en fournissant le numéro de la 
//		 séquence à afficher ainsi que la valeur 225 (le nombre de millisecondes avant d'éteindre 
//		 le numéro).
//
//		Incrémentez la valeur de la variable globale de l'index du numéro de la séquence
//
// Sinon
//
//		Arrêtez l'interval
//		
//		Modifiez la valeur de la variable globale gHorloge à null
//================================================================================================
function afficherUnNumero()
{
	
	
}
//================================================================================================