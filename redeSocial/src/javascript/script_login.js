
abrirMenu.addEventListener('click', () => {
    menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	setTimeout(()=> {
		menu.style.opacity = '1'
		menu.style.right = "0"
		abrirMenu.style.display = 'none'
	}, 10);
})


fecharMenu.addEventListener('click', () => {

	menu.style.opacity = '0'

	menu.style.right = (menu.offsetWidth * -1) + 'px'
	
	setTimeout(()=> {
		menu.removeAttribute('style')
		abrirMenu.removeAttribute('style')
	}, 200);
})
