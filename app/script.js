let btn = document.getElementsByClassName("content-link")[0];
let modal = document.getElementsByClassName("modal")[0];
let close = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = 'block';
}

close.onclick = function(){
	modal.style.display = 'none';
}

window.onclick = function(event){
	if (event.target === modal) {
		modal.style.display = 'none';
	}
}