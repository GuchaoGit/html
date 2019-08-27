$(document).ready(function (){
	$("#btn1").click(function(){
		$("#p1").css("color","red")
			.css("background-color","yellow")
			.slideUp(2000)
			.slideDown(2000,function(){
				$("#p1").attr("style","color:black;background-color:white;");
			});
	});
	
	$("#btn2").click(function (){
		var test = $("#p2").text();
		$("#p3").text(test);
	});
	$("#btn3").click(function (){
		var test = $("#p2").html();
		$("#p3").html(test);
	});
});
			