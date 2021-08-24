$(window).on('load resize', function(){
	let logoPosition = $('#menu #header-logo').offset()
	let logoWidth = $('#menu #header-logo').width()
	let newWindowWith = window.outerWidth
	let leftLineTop = 35
	const w = $(window).width();
	if ( w < 768 ) {
		logoPosition = $('.sp_logo img').offset()
		logoWidth = $('.sp_logo img').width()
		newWindowWith = window.outerWidth
		leftLineTop = 40
	}
		
	const P1_S2 = (logoPosition.left + logoWidth) + ',' + leftLineTop
	const P1_E2 = newWindowWith + 3 + ',' + leftLineTop
	gsap.set('#path01', { attr: { d: 'M ' + P1_S2 + ' L ' +  P1_E2 } })

	const P2_S2 = (logoPosition.left - 1) + ',' + (logoPosition.top + 1)
	const P2_E2 = '0,' + (logoPosition.top + 1)
	gsap.set('#path02', { attr: { d: 'M ' + P2_S2 + ' L ' +  P2_E2 } })
	
});
$(document).ready(function() {
    $(window).trigger('resize');
});
