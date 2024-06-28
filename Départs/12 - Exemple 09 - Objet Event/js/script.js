/* Fonction qui gère l'événement indiquant que la page est chargée
 *
 * Description:    	Ajout d'un écouteur sur le document pour l'événement contextmenu qui
 *					 fait appel à la fonction empecherMenuContextuel et d'un écouteur
 *					 sur la cible pour l'événement mousedown qui fait appel à la fonction
 *					 mouseDownSurCible.
 *
 * Test:            Lancez la page dans Chrome et cliquez sur la cible avec la console ouverte
 *                   et regardez ce qui apparaît.
*/
document.addEventListener('DOMContentLoaded', function() {
	
    document.addEventListener("contextmenu", empecherMenuContextuel);

    cible.addEventListener("mousedown", mouseDownSurCible);
	
});    
	
/* Fonction qui gère le mousedown sur la cible
 *
 * Description:    	Lors d'un mousedown sur la cible, elle inscrit dans la console le 
 *                   paramêtre reçu.
 *
 * Test:            Lancez la page dans Chrome et cliquez sur la cible avec la console ouverte
 *                   et regardez ce qui apparaît.
*/
function mouseDownSurCible(e) {
	// Inscrire dans la console le paramêtre e reçu
	console.log(e);
}

/* Fonction qui gère lévénement contextmenu sur le document
 *
 * Description:    	Lors d'un mousedown sur la cible, elle inscrit dans la console le 
 *                   paramêtre reçu.
 *
 * Test:            Empêche le menu contextuel d'apparaître lors d'un click avec le bouton de
 *                   droite.
*/
function empecherMenuContextuel(e) {
	e.preventDefault();
}