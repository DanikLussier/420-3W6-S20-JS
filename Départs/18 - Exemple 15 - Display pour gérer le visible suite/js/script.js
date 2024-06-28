var body;

document.addEventListener('DOMContentLoaded', function() {

	var tabThemes = document.querySelectorAll('.skin');
	
	tabThemes.forEach(theme => theme.addEventListener('click', clickSurTheme));
	
	body = document.querySelector('body');
});

function clickSurTheme() 
{
	var themeClique = this.getAttribute('data-classe-theme');
	
	
}