$(document).ready(function () {
  $('.image-gallery-container').on('mouseleave', function (e) {
    
	});
	
	$('.bg-image').on('mouseleave', function (e) {
	
		$('#hiddenDiv')
			.css({
        display: 'none'
			});
			
			$('.bg-image').css({
				filter: 'grayscale(100%)',
				transform: 'scale(1)'
			});
	});

	$('.bg-image').on('mouseover', function (e) {
		
		$(this).css({
			filter: 'grayscale(0%)',
			transform: 'scale(2)'
		});

		
		//$(this).siblings("div").removeClass('hide');
		//$(this).addClass('hide');
		var name = $(this).attr('id');
    var message = '';
		switch(name){
			case 'aravind': 
			message = '<p><b>Agent AB :</b> ARAVIND BABU B </p> <br/><p>Demo Engineer</p><br/><p>  He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'arjun': 
			message = '<p><b>Agent A :</b> ARJUN S S </p> <br/><p>Lead Design Engineer</p><br/><p>Arjun is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'lohit': 
			message = '<p><b>Agent L :</b> LOHIT B </p> <br/><p>Demo Engineer</p><br/><p>Lohit is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'chanakya': 
			message = '<p><b>Agent C :</b> CHANAKYA </p> <br/><p>Sr.Demo Engineer</p><br/><p>Chanakya is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'jahnavi': 
			message = '<p><b>Agent J :</b> JAHNAVI </p> <br/><p>Designer</p><br/><p>Jahnavi is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'avinash': 
			message = '<p><b>Agent A :</b> AVINASH </p> <br/><p>Manager</p><br/><p>leading a team of technical and creative wizards called as Demo Engineers.We support Solution Engineers globally in building customisable and innovative Demos, AppExchange Apps, Demo Components and Assets.</p><br/><p><strong>We live, eat, breathe the Salesforce culture. #TRUST and #TRUTH is at the heart of everything we do. #ValuesDriven.</strong></p>';
			break;
			case 'venkat': 
			message = '<p><b>Agent V :</b> VENKAT </p> <br/><p>Director</p><br/><p>Leading an extremly talented group of developers and designers who deliver multi-cloud, AI, IoT demos for APAC, EMEA and AMER Regions. </p><br/><p><strong>Based in: Hyderabad and Bangalore, both are major cities in India. </strong></p>';
			break;
			case 'srinivas': 
			message = '<p><b>Agent S :</b> SRINIVAS VARMA VEGESANA </p> <br/><p>Sr.Manager</p><br/><p>	My current role at the Q Branch is to work closely with the Sales Teams across the globe to create reusable/next-gen demo assets for Solution Engineers and create innovative AppExchange Apps.</p><br/><p><strong>Passionate about User Experience UX / Customer Experience CX, nurturing talent and Innovation!</strong></p>';
			break;
			case 'richard': 
			message = '<p><b>Agent R :</b> RICHARD</p> <br/><p>Sr.Designer</p><br/><p>Richard is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'rohit': 
			message = '<p><b>Agent R :</b> ROHIT </p> <br/><p>Sr.Designer </p><br/><p>Rohit is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'salil': 
			message = '<p><b>Agent S :</b> SALIL </p> <br/><p>Sr.Demo Engineer</p><br/><p>Salil is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'rags': 
			message = '<p><b>Agent R :</b> RAGHZ </p> <br/><p>Sr.Demo Engineer</p><br/><p>Raghavendra is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'vidya': 
			message = '<p><b>Agent S :</b> SRI VIDYA </p> <br/><p>Demo Engineer</p><br/><p>Vidya is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'vamsi': 
			message = '<p><b>Agent V :</b> VAMSIDHAR TAMATAM </p> <br/><p>Demo Engineer</p><br/><p>Vamsi is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'poonam': 
			message = '<p><b>Agent P :</b> POONAM </p> <br/><p>Sr.Demo Engineer</p><br/><p>Poonam is an developer at Salesforce. He was a JavaScript tool developer for the Mozilla Corporation. He is also the creator and developer of the jQuery JavaScript library.<p><p><strong>By the way this was hidden div.</strong></p>';
			break;
			case 'leela': 
			message = '<p><b>Agent L :</b> LEELA MOHAN GONGUNTA</p><br/><p>Lead Demo Engineer</p><br/><p> I work with Solution Engineers and help them in building great demos for customers. I graduated from Sathyabama University with Masters in Electronics. I have done PG diploma in software engineering at NIIT Hyderabad. I possess 10 years of hands-on experience in developing web applications.<p><p><strong>Apart from work, I love watching and playing cricket a lot.</strong></p>';
			break;
			
		}

		$('#hiddenDiv')
			.css({
				position: 'absolute',
				left: e.pageX,
				top: e.pageY + 100,
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
