// Modals
function openModal(modal){
	if (modal == null){
		return
	}else{
		modal.classList.add('active');
		overlay.classList.add('active');
	}
}
function closeModal(modal){
	if (modal == null){
		return
	}else{
		modal.classList.remove('active')
		overlay.classList.remove('active')
	}
}
// Landing page
