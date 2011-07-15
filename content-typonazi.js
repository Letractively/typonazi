function insert_car(car)
{
	var area = document.activeElement;
	if (area.tagName == 'TEXTAREA' || (area.tagName == 'INPUT' && area.type == 'text'))
	{
		var pos = area.selectionStart;
		var car = window.car;
		area.value = area.value.substr(0, pos) + car + area.value.substr(area.selectionEnd);

		pos += car.length;
		area.setSelectionRange(pos, pos);

		document.removeEventListener('click', insert_car, false);
		return true;
	}
	return false;
}

chrome.extension.onRequest.addListener(function(request) {
	if (typeof request == 'string')
	{
		window.car = request;

		if (!insert_car())
		{
			alert('Focus textbox to insert text');
			document.addEventListener('click', insert_car, false);
		}
	}
});