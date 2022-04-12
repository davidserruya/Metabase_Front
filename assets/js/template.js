jQuery(document).ready(function($) {
	document.getElementById("illustration").hover( function(){
		this.classList.add("expand");
	}, function(){
		this.classList.remove("expand");
	} );
});
