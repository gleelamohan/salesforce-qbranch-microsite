$(document).ready(function () {
	$(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
	function animateFootPrints(){

		$('#right3').append('<img src="/resources/images/rightfoot.png">');
		$('#left3').append('<img src="/resources/images/leftfoot.png">');
		$('#right2').append('<img src="/resources/images/rightfoot.png">');
		$('#left2').append('<img src="/resources/images/leftfoot.png">');
		$('#right1').append('<img src="/resources/images/rightfoot.png">');
		$('#left1').append('<img src="/resources/images/leftfoot.png">');
	}

	function addFootPrintContent(){

		$('#footprint-container').append(
			`
			<div class="footprint-container fc-left1">
						<div class="footprint-details left1"><ul><li>164M <span style="font-weight:100;"> Influenced in H1</span></li><li> <span style="font-weight:100;">AMER $96.7M, <br/>EMEA $46M, APAC $20.7M  </span></li></ul></div>
						<div class="line-left left1"></div><div class="footprint-left left1">ACV <br/>Influenced</div>
				
						<div class="footprint left1" id="left1"><img src="/resources/images/leftfoot.png"></div>
						
					</div>
					<div class="footprint-container fc-right1">
					
						<div class="footprint right1" id="right1"><img src="/resources/images/rightfoot.png"></div>
						<div class="footprint-right right1">Overall <br/> Utilization %</div><div class="line right1"></div>
						<div class="footprint-details right1" ><ul><li>49% onDemand <span style="font-weight:100;"> <br/>and with Overall 109%</span></li></ul></div>
				
					</div>
					<div class="footprint-container fc-left2">
						<div class="footprint-details left2"><ul><li>20 <span style="font-weight:100;"> Demo Components</span></li><li>12 <span style="font-weight:100;"> Demo Assets</span></li><li>9 <span style="font-weight:100;"> Trailhead Rangers</span></li></ul></div>
						<div class="line-left left2"></div><div class="footprint-left left2">Demo <br/>Components <br/> & Assets</div>
				
						<div class="footprint left2" id="left2"><img src="/resources/images/leftfoot.png"></div>
					
					</div>
					<div class="footprint-container fc-right2">
					
						<div class="footprint right2" id="right2"><img src="/resources/images/rightfoot.png"></div>
						<div class="footprint-right right2">App Exchange</div><div class="line right2"></div>
						<div class="footprint-details right2"><ul><li>9 <span style="font-weight:100;"> App Exchange Apps</span></li></ul></div>
				
					</div>
					<div class="footprint-container fc-left3">
						<div class="footprint-details left3"><ul><li>13 <span style="font-weight:100;"> Certifications</span></li><li>9 <span style="font-weight:100;"> Double Star Rangers</span></li><li>9 <span style="font-weight:100;"> Trailhead Rangers</span></li></ul></div>
						<div class="line-left left3"></div><div class="footprint-left left3">Learnings</div>
				
						<div class="footprint left3" id="left3"><img src="/resources/images/leftfoot.png"></div>
					
					</div>
					<div class="footprint-container fc-right3">
					
						<div class="footprint right3" id="right3"><img src="/resources/images/rightfoot.png"></div>
						<div class="footprint-right right3">VTO</div><div class="line right3"></div>
						<div class="footprint-details right3"><ul><li>798 hours <span style="font-weight:100;"> of VTO - 71%</span></li><li>7 Volunteer Rockstars</li></ul></div>
				
					</div>
		`
		);
	}

	function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

	$(window).on('load', function() {
      aos_init();
    });

	$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

	$(".inner-tab").on("click", function(){

		$(".inner-tab").removeClass('active1');
		$(this).addClass('active1');

		var tabName = $(this).attr('id');

		switch(tabName){
			case "tab1": 
				$(".tab-detail").addClass('hide').css("height","250px");
				$("#tab-detail1").removeClass('hide');
			break;
			case "tab2": 
				$(".tab-detail").addClass('hide').css("height","250px");
				$("#tab-detail2").removeClass('hide');
			break;
			case "tab3": 
				$(".tab-detail").addClass('hide').css("height","250px");
				$("#tab-detail3").removeClass('hide');
			break;
			case "tab4": 
				$(".tab-detail").addClass('hide').css("height","250px");
				$("#tab-detail4").removeClass('hide');
			break;
		}
	});

	$(".dc-inner-tab").on("click", function(){
		$(".dc-inner-tab").removeClass('active1');
		$(this).addClass('active1');

		var tabName = $(this).attr('id');

		switch(tabName){
			case "dc-tab1": 
				$(".dc-tab-detail").addClass('hide');
				$("#dc-tab-detail1").removeClass('hide');
			break;
			case "dc-tab2": 
				$(".dc-tab-detail").addClass('hide');
				$("#dc-tab-detail2").removeClass('hide');
			break;
		}
	});

	$('.agile-node').mouseover(function(e) {

		var title=$(this).attr('title');
		//var message = '<div><div><span><img src="/resources/images/cat.png" /><span  style="margin-bottom: 20px;vertical-align: super;margin-left: 10px;"> <b>3</b></span></div><div><span style="float: right;vertical-align: middle;margin-top: 12px;"><b>1</b> Demo Asset</span></span><b>1091</b> Hours</div></div>';

		var message = '';
		var color = 'white';

		var left = '';
		var top = '';
		var demoassets ='';
		var assetscount = '';
		var hours = '';
		var hourscount = '';
		var downloadicon = 'download-icon';

 var backgroundcolor='#0B1F52';
		switch(title){
			case 'q3': 
			demoassets= '1';
			assetscount = '4';
			hours = '1091';
			hourscount='6';
			backgroundcolor = '#FFAE00';
			 color = 'black';
			left = e.pageX -250;
			top = e.pageY;
			$('#agileHiddenDiv').find('li').addClass('li-black');
			
			break;
			case 'q4': 
			demoassets= '2';
			assetscount = '14';
			hours = '1361';
			hourscount='4';
			backgroundcolor = '#FFAE00';
			 color = 'black';
			left = e.pageX -250;
			top = e.pageY;
			$('#agileHiddenDiv').find('li').addClass('li-black');
			break;
			case 'q1': 
			demoassets= '2';
			assetscount = '14';
			hours = '785';
			hourscount='3';
			downloadicon = 'download-icon-white';
			 left = e.pageX +50;
			 top = e.pageY ;
			break;
			case 'q2': 
			downloadicon = 'download-icon-white';
			demoassets= '11';
			assetscount = '16';
			hours = '1497';
			hourscount='2';
			left = e.pageX +50;
			top = e.pageY ;
			break;
		}

		message = `<div>
		<div style="
		width: 60px;
		float: left;
	"><img src="/resources/images/${downloadicon}.png" style="height:20px;">
			<span style="margin-bottom: 20px;vertical-align: super;margin-left: 5px;"> 
				<b>${assetscount}</b>
			</span>
		</div>
		<div style="
		width: 80px;
		float: left;
		margin-top: 5px;
	">
			<b>${demoassets}</b> Demo Asset
		</div>
		
	</div>
	
		<div style="float:left;margin-top:15px;">
			<div style="
		width: 60px;
		float: left;
	"><img src="/resources/images/cat.png" style="height:25px;">
			<span style="margin-bottom: 20px;vertical-align: super;margin-left: 5px;"> 
				<b>${hourscount}</b>
			</span>
		</div>
		<div style="
		width: 80px;
		float: left;
		margin-top: 10px;
	">
			<b>${hours}</b> Hours
		</div>
		</div>`;
		$('#agileHiddenDiv')
		.css({
			'position': 'absolute',
			'left': left,
			'top': top ,
			'display': 'block',
			'background-color': backgroundcolor,
			'color': color
		})
		.html(message);
	
		
}).mouseleave(function(e){
	$('#agileHiddenDiv')
			.css({
				display: 'none'
			});
});
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
		if (target.length) {
			$('html,body').animate(
				{
					scrollTop: target.offset().top,
				},
				1000
			);
			return false;
		}
	});

	$('.image-gallery-container').on('mouseleave', function (e) {});

	$('.bg-image').on('mouseleave', function (e) {
		$('#hiddenDiv').css({
			display: 'none',
		});

		$('.bg-image').css({
			filter: 'grayscale(100%)',
			transform: 'scale(1)',
		});
	});

	$('.section-footprints').waypoint(function() {
		if($('#footprint-container div').size() === 0){
		addFootPrintContent();
		setInterval(function(){
			$('.footprint').html('');
			  animateFootPrints();
		 }, 9000);
		}
	});

	$('.bg-image').on('mouseover', function (e) {
		$(this).css({
			filter: 'grayscale(0%)',
			transform: 'scale(2)',
		});

		var name = $(this).attr('id');
		var message = '';
		switch (name) {
			case 'aravind':
				message =
					'<p><b>Agent AB :</b> ARAVIND BABU B </p> <br/><p>Demo Engineer</p><br/><p>Building awesome demos Q India, one at a time. Always up for conversation regarding minimalism, Cricket, movies and Grand Theft Auto. </p> <br/><br/><p><strong>Passionate Learner and Fun Loving person.</strong></p>';
				break;
			case 'arjun':
				message =
					'<p><b>Agent A :</b> ARJUN S S </p> <br/><p>Lead Design Engineer</p><br/><p>Experiences must be meaningful.  In order to understand how to create that meaningful experience, I rely on my research to justify my design decisions. This requires continual design iterations to create the best solution possible.</p><br/><p><strong>Passionate Learner and Fun Loving person.</strong></p>';
				break;
			case 'lohit':
				message =
					'<p><b>Agent L :</b> LOHIT B </p> <br/><p>Associate Demo Engineer</p><br/><p>I am a developer by heart, I love to get my hands dirty on code day In and day out. I work closely with Solution Engineers, build customized components </p><br/><p><strong>I strongly believe "software engineer - an organism that turns caffeine into software"</strong></p>';
				break;
			case 'chanakya':
				message =
					'<p><b>Agent C :</b> CHANAKYA </p> <br/><p>Sr.Demo Engineer</p><br/><p>I am graduated in Computer Science and Engineering. I have 4+ years of experience in implementing Oracle HCM Cloud and Java. I have experience in Programming Languages - Java,PHP, Web Technologies.</p><br/><p><strong>Passionate Learner and Fun Loving person.</strong></p>';
				break;
			case 'jahnavi':
				message =
					'<p><b>Agent J :</b> JAHNAVI </p> <br/><p>Designer</p><br/><p>I am a designer , developer and an art lover trying to explore the essential aspects of creativity and find the nexus between the art and technology.I believe in creating experiences which are simple, clean ,effective .</p><br/><p><strong>Happily motivated to be on stage to perform Dance and Signing</strong></p>';
				break;
			case 'avinash':
				message =
					'<p><b>Agent A :</b> AVINASH </p> <br/><p>Manager</p><br/><p>leading a team of technical and creative wizards called as Demo Engineers.We support Solution Engineers globally in building customisable and innovative Demos, AppExchange Apps, Demo Components and Assets.</p><br/><p><strong>We live, eat, breathe the Salesforce culture. #TRUST and #TRUTH is at the heart of everything we do. #ValuesDriven.</strong></p>';
				break;
			case 'venkat':
				message =
					'<p><b>Agent V :</b> VENKAT </p> <br/><p>Director</p><br/><p>Leading an extremly talented group of developers and designers who deliver multi-cloud, AI, IoT demos for APAC, EMEA and AMER Regions. </p><br/><p><strong>Based in: Hyderabad and Bangalore, both are major cities in India. </strong></p>';
				break;
			case 'srinivas':
				message =
					'<p><b>Agent S :</b> SRINIVAS VARMA VEGESANA </p> <br/><p>Sr.Manager</p><br/><p>	My current role at the Q Branch is to work closely with the Sales Teams across the globe to create reusable/next-gen demo assets for Solution Engineers and create innovative AppExchange Apps.</p><br/><p><strong>Passionate about User Experience UX / Customer Experience CX, nurturing talent and Innovation!</strong></p>';
				break;
			case 'richard':
				message =
					'<p><b>Agent R :</b> RICHARD</p> <br/><p>Sr.Designer</p><br/><p>I work with the Qbranch team in Bangalore, INDIA redefining the branding and UI/UX space, with complete focus revolving around Lean UI/UX and Minimalism design.</p><br/><p><strong>I truly believe that any concept will lose its value if you don’t give it the</strong></p>';
				break;
			case 'rohit':
				message =
					'<p><b>Agent R :</b> ROHIT </p> <br/><p>Sr.Designer </p><br/><p>I am a Graphic Designer with an overall experience of 6 years.Here as a Communications Designer and proud to be joining the Q-branch India Team. </p><br/><p><strong>Looking forward to learning & developing my self.</strong></p>';
				break;
			case 'salil':
				message =
					'<p><b>Agent S :</b> SALIL </p> <br/><p>Sr.Demo Engineer</p><br/><p>Currently playing the amazing role of a Demo Engineer. As a part of the role we help Solution Engineers globally in building customisable and innovative Demo Components and Assets as well as AppExchange Products.</p><br/><p><strong>I like travelling and exploring new places and passionately follow Cricket and EPL.</strong></p>';
				break;
			case 'rags':
				message =
					'<p><b>Agent R :</b> RAGHZ </p> <br/><p>Sr.Demo Engineer</p><br/><p>I am a passionate Developer with an eternal love for learning.I love to create innovative customer experiences with combined power of the Salesforce Platform, Emerging Technologies & Design.</p><br/><p><strong>I love to workout, blog, play video games and do photography.</strong></p>';
				break;
			case 'vidya':
				message =
					'<p><b>Agent S :</b> SRI VIDYA </p> <br/><p>Demo Engineer</p><br/><p>I have 3+ years of experience as a Salesforce Developer.Started off my journey here at Salesforce with the amazing Demo team who work with Solution Engineers in building their Demos.</p><br/><p><strong>I love to create some interesting AppExchange Apps.</strong></p>';
				break;
			case 'vamsi':
				message =
					'<p><b>Agent V :</b> VAMSIDHAR TAMATAM </p> <br/><p>Demo Engineer</p><br/><p>I am the Technical Project Co-ordinator for the Q-Branch India team. We support Global Solution Engineering team in building cutting edge demos and proof of concepts for our Customers</p><br/><p><strong> I am a fun loving person and an extrovert. I love to travel.</strong></p>';
				break;
			case 'poonam':
				message =
					'<p><b>Agent P :</b> POONAM </p> <br/><p>Sr.Demo Engineer</p><br/><p>I am part of the team that creates insanely amazing and cool stuff. We work with the Solution Engineers and Account Executives to build reusable components saving thousands of hours and bring more productivity.</p><br/><p><strong>Experimenter, Explorer and Neophiliac.</strong></p>';
				break;
			case 'leela':
				message =
					'<p><b>Agent L :</b> LEELA MOHAN GONGUNTA</p><br/><p>Lead Demo Engineer</p><br/><p> I work with Solution Engineers and help them in building great demos for customers. I graduated from Sathyabama University with Masters in Electronics. I have done PG diploma in software engineering at NIIT Hyderabad. I possess 10 years of hands-on experience in developing web applications.<p><p><strong>Apart from work, I love watching and playing cricket a lot.</strong></p>';
				break;
			case 'suren':
				message =
					'<p><b>Agent L :</b>SURENDRANATH NUNE</p><br/><p>Lead Demo Engineer</p><br/><p>I am proud to be part of a team that brings an impact on the revenue coming into the organization. It is Q- Branch. I work with Solution Engineers to deliver insane industry-leading demos, time-saving tools to our Sales teams. </p><br/><p><strong>“Learning has no end” is what I always follow to improve my skills.</strong></p>';
				break;
			case 'hemanth':
				message =
					'<p><b>Agent L :</b> HEMANTH</p><br/><p>Demo Engineer</p><br/><p> Member of APAC DE, Q-Branch family. We work with Solution Engineers to help them deliver a wonderful demo to customers with our development skills on our cutting edge products/technologies.</p><br/><p><strong>During my free time I love to learn, travel and spend time with my lovely family.</strong></p>';
				break;
		}

		$('#hiddenDiv')
			.css({
				position: 'absolute',
				left: e.pageX,
				top: e.pageY + 100,
				display: 'block',
			})
			.html(message);
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
