jQuery(document).ready(function($) {
    $(document).on('click', '#openMenu', (e) => {
    	e.preventDefault();

    	$("#side-menu").toggleClass('active');
    	$("#mainDiv").toggleClass('active');
    });
});