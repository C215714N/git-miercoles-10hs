document.querySelector('.#menu').addEventListener(
	'click', () => {
		document.querySelector('.menu').classList.toggle('openMenu')
		if(true){
			document.querySelector('#menu').innerHTML = '&times;'
		} else {
			document.querySelector('#menu').innerHTML = '&equiv;'
		}
	}
)

