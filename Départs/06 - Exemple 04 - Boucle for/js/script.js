document.addEventListener('DOMContentLoaded', function() {

	btn1.addEventListener('click', numero1);
	btn2.addEventListener('click', numero2);
	btn3.addEventListener('click', numero3);
	btn4.addEventListener('click', numero4);
	btn5.addEventListener('click', numero5);
	btn6.addEventListener('click', numero6);
	btn7.addEventListener('click', numero7);

	gTabCartes = document.querySelectorAll('li');
});

//===========================================================================
// Variable globale qui contient le tableau des éléments cartes.
//===========================================================================
var gTabCartes;


//=================================================================
// Retire toutes les classes de tous les li
function enleverToutesLesCartes()
{
	for (var i = 0; i< gTabCartes.length;i++)
		gTabCartes[i].className = "";
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 1
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place le roi de coeur (classe coeur13) dans toutes
// les cartes.
//===========================================================================
function numero1()
{
	enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 2
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les 6 premières cartes de pique (as à 6) dans
// les cartes.
//===========================================================================
function numero2()
{
	enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 3
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les 6 dernières cartes de coeur (8 à roi) 
// dans les cartes.
//===========================================================================
function numero3()
{
    enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 4
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les 6 premières cartes de carreau à l'envers
// (6 à as) dans les cartes.
//===========================================================================
function numero4()
{
    enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 5
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les cartes 1, 3, 5, 7, 9 et valet de trèfle
// dans les cartes.
//===========================================================================
function numero5()
{
    enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 6
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les cartes as, 2, 3, as, 2 et 3 de carreau
// dans les cartes.
//===========================================================================
function numero6()
{
    enleverToutesLesCartes();
	
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur le bouton numéro 7
//---------------------------------------------------------------------------
// Fait appel à la fonction enleverToutesLesCartes.
//
// À l'aide d'une boucle, place les cartes as à 6 en alternance pique et 
// coeur dans les cartes.
//===========================================================================
function numero7()
{
    enleverToutesLesCartes();
	
}