//your JS code here. If required.

const fname = document.querySelector("#fname");

fname.addEventListener("focusout",()=>{
	fname.value = fname.value.toUpperCase();
})