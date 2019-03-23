$("document").ready(function(){

	alert("This website best works on resolution 1366x768.\nIt is here for demo purposes only. It was made as a part of work allotted to me when working under Department of Creative Media at my University.\nAny reistribution/modification without author's consent is not permitted.");
	
	var id=2;
	
	
	$("#slider").hover(function(){
		$("#slider #arrow img").attr("src","images/up.png");
		$("#slider").animate({top:'0px'});
		$("#slider #games-slider").show();
		$("#slider #games-slider #1,#2,#3").hide();
		$("#slider #games-slider #"+id).show();},function(){
		$("#slider").animate({top:'-190px'});
		$("#slider #arrow img").attr("src","images/down.png");
	});
	
	/* -------------- */
	
	$("#slider ul li img").hover(function(){
		var display = $(this).attr("alt");
		$("#slider p.display").text(display);
	 }, function(){
		 $("#slider p.display").text(" ");
	 });
	 
	 /* -------------------- */
	 
	 $("#slider #heading #ob").click(function(){
		$("#slider #games-slider #1,#2,#3").hide();
		$("#slider #games-slider #1").fadeIn(700);
		$("#slider #heading #ob,#me,#sp").removeClass("active");
		$("#slider #heading #ob").addClass("active");
		id=1;	
	});
	
	$("#slider #heading #me").click(function(){ 
		$("#slider #games-slider #1,#2,#3").hide();
		$("#slider #games-slider #2").fadeIn(700);
		$("#slider #heading #ob,#me,#sp").removeClass("active");
		$("#slider #heading #me").addClass("active");
		id=2;
	
	});
	
	$("#slider #heading #sp").click(function(){ 
		$("#slider #games-slider #1,#2,#3").hide();
		$("#slider #games-slider #3").fadeIn(700);
		$("#slider #heading #ob,#me,#sp").removeClass("active");
		$("#slider #heading #sp").addClass("active");
		id=3;
	});
	
	/*  ---------------------- */
	
	$("#logo").hover(function() {
		$("#p2i").fadeIn();
		$(".center-bg").fadeOut();}, function(){
		$("#p2i").fadeOut();
		$(".center-bg").fadeIn();
	});
	
	/* ------------------ */
	 $('#popup-wrapper').modalPopLite({ openButton: '#info-button', closeButton: '#close-btn' });
	 
	 /* ------------- */

        $('#js-news').ticker({displayType:'fade'});

		
	
});