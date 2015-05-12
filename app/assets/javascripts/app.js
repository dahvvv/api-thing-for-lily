function getColors() {
	$.ajax({
		url: '/api/random',
		type: 'GET',
		dataType: 'json',
		success: function(json) {
			var colors = json.palettes.palette.colors.hex;
			for (i = 0; i < colors.length; i++) {
				var color = '#' + colors[i];
				var $div = $('#color' + (i + 1));
				$div.css({'background-color': color});
			}
		}
	})
}

$(function(){
	$('#clickme').on('click', getColors);
	getColors();
});
