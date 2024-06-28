var gTabPersos;

document.addEventListener('DOMContentLoaded', function() {

	var tabThemes = document.querySelectorAll('.skin');
	
	tabThemes.forEach(theme => theme.addEventListener('click', clickSurTheme));
	
	gTabPersos = document.querySelectorAll(".perso");
});

function clickSurTheme() 
{
	var body = document.querySelector('body');
	
	var themeActuel = body.getAttribute('data-classe-theme');
	
	var themeClique = this.getAttribute('data-classe-theme');
	
	body.setAttribute('data-classe-theme', themeClique);
	
	if(themeActuel != "")
		body.classList.remove(themeActuel);
	
	body.classList.add(themeClique);
	
	
}