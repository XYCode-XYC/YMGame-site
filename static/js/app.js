function jump(sel) {
	window.scrollTo({ 
	    top: document.getElementById(sel).offsetHeight, 
	    left: 0,
	    behavior: "smooth" 
	})
}