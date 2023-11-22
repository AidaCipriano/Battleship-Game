
function btn_guardar_dato()
{
	var email =  $("email").val();
	var username = $("username").val();
	var password = $("password").val();

	//alert(nombre+" - "+apellido+" - "+edad);

	var ob = {email:email, username:username, password:password};

	
    $.ajax({
      type: "POST",
      url:"entidades/Usuario.php",      
      data: ob,
      beforeSend: function(objeto){
         
      },
      success: function(data)
      {
    
        
         $("#panel_respuesta").html(data);
         setTimeout(function(){
            $("#panel_respuesta").html("");
         },2000);
                
      }
   });
}