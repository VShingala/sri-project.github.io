$(document).ready(function(){
	
	$('.temp').mouseover(function(){
		$(this).css({"marginTop":"-8px"});
	});
	
	$('.temp').mouseout(function(){
		$(this).css({"marginTop":"0px"});
	});
	
	$('#1').on('click',function(){
		$('.hidden_data1').slideToggle(2000);
	});
	
	$('#2').on('click',function(){
		$('.hidden_data2').slideToggle(2000);
	});
	
	$('#3').on('click',function(){
		$('.hidden_data3').slideToggle(2000);
	});
	
	$('#4').on('click',function(){
		$('.hidden_data4').slideToggle(2000);
	});
	
	$('#5').on('click',function(){
		$('.hidden_data5').slideToggle(2000);
	});
	
	$('#6').on('click',function(){
		$('.hidden_data6').slideToggle(2000);
	});
	
	
});