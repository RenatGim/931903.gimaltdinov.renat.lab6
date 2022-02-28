function leftColumn(){
	document.getElementById("left").classList.add("Column")
	document.getElementById("right").classList.add("Hide")
	document.getElementById("left").classList.remove("Hide")
	document.getElementById("right").classList.remove("Column")
}

function centerColumn(){
	document.getElementById("left").classList.remove("Column");
	document.getElementById("right").classList.remove("Column");
	document.getElementById("left").classList.remove("Hide");
	document.getElementById("right").classList.remove("Hide");
}

function rightColumn(){
	document.getElementById("left").classList.add("Hide");
	document.getElementById("right").classList.add("Column");
	document.getElementById("left").classList.remove("Column");
	document.getElementById("right").classList.remove("Hide");
}