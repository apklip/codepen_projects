 $(function() {

 var height=$( window ).height()-40;

 $(".codecontainer").css("height",height+"px");
 $(".selector").click(function() {

 $( this ).toggleClass( "selected" );

 	 	 var id=$(this).attr("name");
 	 	 	
 	 	 $("#"+id+"Container").toggle();
 	 	 	
 	 	 var number = $('.codecontainer').filter(function() {
 return $(this).css('display') !== 'none';
}).length;
	 	 var width=100/number;
			
	 	 $(".codecontainer").css("width",width+"%"); 		 	

 });
 	 	
 	 	
 $("#run").click(function() {
 	 	

 	 	 $('#resultFrame').contents().find('html').html("<style>"+$
('#css').val()+"</style>"+$("#html").val());
 	 	 	
 document.getElementById('resultFrame').contentWindow.eval( $
('#js').val() );
 });


 });