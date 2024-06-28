/* Fonction qui gère l'événement indiquant que la page est chargée
 *
 * Description:    	Ajout d'un écouteur de l'événement click sur les 4 éléments de type div 
 *					 de la page.
*/
document.addEventListener('DOMContentLoaded', function() {

    divArriereGrandPere.addEventListener('click', clickSurArriereGrandPere);
    
    divGrandPere.addEventListener('click', clickSurGrandPere);
    
    divPere.addEventListener('click', clickSurPere);
    
    divEnfant.addEventListener('click', clickSurEnfant);

});    

	
/* Fonction qui gère le click sur le div noir
 *
 * Description:    	Lors d'un click sur le div noir, elle inscrit dans la console un message 
 *					 pour indiquer que le click a en lieu sur le div arrière grand-père (noir).
 *
 * Paramètre:
 *				e	objet comprenant les informations sur l'événement
*/
function clickSurArriereGrandPere(e) {
	console.log("divArriereGrandPere (noir) : Hein! Quoi? Plus fort SVP. Ah! un Click!");
	if(e.target == divEnfant)
	{
		console.log("divArriereGrandPere (noir) : Le click a eu lieu sur le div Enfant");
	}
}    

	
/* Fonction qui gère le click sur le div blanc
 *
 * Description:    	Lors d'un click sur le div blanc, elle inscrit dans la console un message 
 *					 pour indiquer que le click a en lieu sur le div grand-père (blanc).
 *
 * Paramètre:
 *				e	objet comprenant les informations sur l'événement
*/ 
function clickSurGrandPere(e) {
	console.log("divGrandPere (blanc) : Pffff un Click!");
	if(e.target == divEnfant)
	{
		console.log("divGrandPere (blanc) : Le click a eu lieu sur le div Enfant");
	}
}    

	
/* Fonction qui gère le click sur le div bleu
 *
 * Description:    	Lors d'un click sur le div bleu, elle inscrit dans la console un message 
 *					 pour indiquer que le click a en lieu sur le div père (bleu).
 *
 * Paramètre:
 *				e	objet comprenant les informations sur l'événement
*/    
function clickSurPere(e) {
	console.log("divPere (bleu) : Un Click");
	if(e.target == divEnfant)
	{
		console.log("divPere (bleu) : Le click a eu lieu sur le div Enfant");
	}
}    

	
/* Fonction qui gère le click sur le div rouge
 *
 * Description:    	Lors d'un click sur le div rouge, elle inscrit dans la console un message 
 *					 pour indiquer que le click a en lieu sur le div enfant (rouge).
 *
 * Paramètre:
 *				e	objet comprenant les informations sur l'événement
*/  
function clickSurEnfant(e) {
	console.log("divEnfant (rouge) : Youppi!!! un Click");
	if(e.target == divEnfant)
	{
		console.log("divEnfant (rouge) : Le click a eu lieu sur le div Enfant");
	}
}
