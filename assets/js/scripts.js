/* Da color al narbar, para dar contraste */
$(window).scroll(function(){
    if($("#navbar").offset().top > 500){
        $("#navbar").addClass("bg-black");
    }else{
        $("#navbar").removeClass("bg-black");
    }
});

/* Correo enviado */
$(function(){
    $('#enviarCorreo').click(function () {
		alert('El correo fue enviado correctamente...');
	});   
	});