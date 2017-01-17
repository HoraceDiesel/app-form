const toggleSection = function() {
	let $company = $('#shipping-company');
	$('#commercial').click(function(){
		$company.show();
	})
	$('#residential').click(function(){
		$company.hide();
	})

	$company.hide();
}

window.onload = () => toggleSection();
