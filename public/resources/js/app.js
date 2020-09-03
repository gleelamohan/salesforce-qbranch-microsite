$(document).ready(function () {
  $('.image-gallery-container').on('mouseleave', function (e) {
    
	});
	
	$('.bg-image').on('mouseleave', function (e) {
		$(".bg-image").removeClass('hide');
		$(".bg-image-color").addClass('hide');
		$('#hiddenDiv')
			.css({
        display: 'none'
      });
	});

	$('.bg-image').on('mouseover', function (e) {
		
		$(this).addClass('hide');
		$(this).siblings("div").removeClass('hide');

		var name = $(this).attr('id');
    var message = '';
		switch(name){
			case 'aravind': 
			message = '<p><b>Agent V :</b> ARAVIND BABU B </p> <br/><p>Demo Engineer</p><br/><p>  He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'arjun': 
			message = '<p><b>Agent V :</b> ARJUN S S </p> <br/><p>Lead Design Engineer</p><br/><p>Arjun is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'lohit': 
			message = '<p><b>Agent V :</b> LOHIT B </p> <br/><p>Demo Engineer</p><br/><p>Lohit is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'chanakya': 
			message = '<p><b>Agent V :</b> CHANAKYA </p> <br/><p>Sr.Demo Engineer</p><br/><p>Chanakya is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'jahnavi': 
			message = '<p><b>Agent V :</b> JAHNAVI </p> <br/><p>Designer</p><br/><p>Jahnavi is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'avinash': 
			message = '<p><b>Agent V :</b> AVINASH </p> <br/><p>Manager</p><br/><p>Avinash is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'venkat': 
			message = '<p><b>Agent V :</b> VENKAT </p> <br/><p>Director</p><br/><p>Leading an extremly talented group of developers and designers who deliver multi-cloud, AI, IoT demos for APAC, EMEA and AMER Regions. </p><br/><p><strong>Q Branch</strong></p>';
			break;
			case 'srinivas': 
			message = '<p><b>Agent V :</b> SRINIVAS </p> <br/><p>Sr.Manager</p><br/><p>Srinivas is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'richard': 
			message = '<p><b>Agent V :</b> RICHARD</p> <br/><p>Sr.Designer</p><br/><p>Richard is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'rohit': 
			message = '<p><b>Agent V :</b> ROHIT </p> <br/><p>Sr.Designer </p><br/><p>Rohit is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'salil': 
			message = '<p><b>Agent V :</b> SALIL </p> <br/><p>Sr.Demo Engineer</p><br/><p>Salil is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'rags': 
			message = '<p><b>Agent V :</b> RAGHZ </p> <br/><p>Sr.Demo Engineer</p><br/><p>Raghavendra is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'vidya': 
			message = '<p><b>Agent V :</b> SRI VIDYA </p> <br/><p>Demo Engineer</p><br/><p>Vidya is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'vamsi': 
			message = '<p><b>Agent V :</b> VAMSIDHAR TAMATAM </p> <br/><p>Demo Engineer</p><br/><p>Vamsi is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'poonam': 
			message = '<p><b>Agent V :</b> POONAM </p> <br/><p>Sr.Demo Engineer</p><br/><p>Poonam is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'leela': 
			message = '<p><b>Agent V :</b> LEELA MOHAN GONGUNTA </p> <br/><p>Lead Demo Engineer</p><br/><p>Poonam is an Lead developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and lead developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			
		}

		$('#hiddenDiv')
			.css({
				position: 'absolute',
				left: e.pageX,
				top: e.pageY,
				display: 'block',
			})
			.html(
				message
			);
	});

	$('.js--section-features').waypoint(
		function (direction) {
			if (direction == 'down') {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		},
		{
			offset: '60px;',
		}
	);

	$('.js--nav-icon').click(function () {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});
});
