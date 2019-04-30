$(document).ready(function() {

  	var $default = $('.InputfieldSelectExtended').parent().find('p.description').html();

    $('.InputfieldSelectExtended select').change(function(){

    	var $selected = $(this).find(':selected');
		var $description = $('.InputfieldSelectExtended').parent().find('p.description');
		if($selected.data('description') == null ) $($description).html($default);
		$($description).html($selected.data('description'));

		if($selected.data('thumbnail')) $($description).append('<img style="max-width:100%;margin-top:5px;" src="'+$selected.data('thumbnail')+'">');

	}).trigger('change');

});