//===========================================================================
// Attendre que la page soit chargée avant d'ajouter les écouteurs
//---------------------------------------------------------------------------
// Ajoutez un écouteur à chacunes des 4 petites images pour les événements
// mouseover (fait appel à la fonction sourisSurPetiteImage), mouseout (fait
// appel à la fonction sourisHorsPetiteImage)et click (fait appel à la 
// fonction clickSurPetiteImage).
//===========================================================================
document.addEventListener('DOMContentLoaded', function() {
  
	petiteImage1.addEventListener('mouseover', sourisSurPetiteImage);
	petiteImage2.addEventListener('mouseover', sourisSurPetiteImage);
	petiteImage3.addEventListener('mouseover', sourisSurPetiteImage);
	petiteImage4.addEventListener('mouseover', sourisSurPetiteImage);	
	
	petiteImage1.addEventListener('mouseout', sourisHorsPetiteImage);
	petiteImage2.addEventListener('mouseout', sourisHorsPetiteImage);
	petiteImage3.addEventListener('mouseout', sourisHorsPetiteImage);
	petiteImage4.addEventListener('mouseout', sourisHorsPetiteImage);	
	
	petiteImage1.addEventListener('click', clickSurPetiteImage);
	petiteImage2.addEventListener('click', clickSurPetiteImage);
	petiteImage3.addEventListener('click', clickSurPetiteImage);
	petiteImage4.addEventListener('click', clickSurPetiteImage);
	
});

//===========================================================================
// Fonction qui est appelée lors d'un mouseover sur une petite image
//---------------------------------------------------------------------------
// Cette fonction ajoute la classe emphase à la petite image sur laquelle 
// le mouseover s'est produit.
//===========================================================================
function sourisSurPetiteImage() {
		
	this.classList.add('emphase');
		
}

//===========================================================================
// Fonction qui est appelée lors d'un mouseout sur une petite image
//---------------------------------------------------------------------------
// Cette fonction retire la classe emphase à la petite image sur laquelle 
// le mouseout s'est produit.
//===========================================================================
function sourisHorsPetiteImage() {
		
	this.classList.remove('emphase');
		
}

//===========================================================================
// Fonction qui est appelée lors d'un click sur une petite image
//---------------------------------------------------------------------------
// Cette fonction récupère dans une variable la source (attribut src) de la 
// petite image cliquée et modifie la source de la grande image (id 
// grandeImage) par celle récupérée dans la variable.
//===========================================================================
function clickSurPetiteImage() {

	
}