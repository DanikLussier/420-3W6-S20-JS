var body;

document.addEventListener('DOMContentLoaded', function() {

	body = document.querySelector('body');

	var tabElements = document.querySelectorAll('img');

	for (var index = 0; index < tabElements.length; index++)
	{
        tabElements[index].addEventListener('mouseover', sourisSurPerso);
        tabElements[index].addEventListener('mouseout', sourisHorsPerso);
        tabElements[index].addEventListener('click', clickSurPerso);
	}
	
	var tabThemes = document.querySelectorAll('.skin');
	
	for (var index = 0; index < tabThemes.length; index++)
	{
        tabThemes[index].addEventListener('click', clickSurTheme);
	}
});

function clickSurTheme() {
	
}