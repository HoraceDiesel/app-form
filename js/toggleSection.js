export function toggleSection() {
	let $company = $('#shipping-company');
	$('#commercial').onclick = () => $('#commercial').checked ? $company.show() : $company.hide();

}