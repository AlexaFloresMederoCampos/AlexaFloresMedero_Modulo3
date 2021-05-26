$(document).ready(function() {
    //Metodo $.load
    /*$("#sendinfo").on("click",function(){
        $(".tablero").load("./dynamics/php/Ajedrez.php table");
    });*/
    // Metodo $.POST $.GET cambiar linea 9
    /*$("#sendinfo").on("click",function(){
        let num= $(".numselc").val();
        let peticion = $.post("./dynamics/php/Ajedrez.php", {dato1:num})
        peticion.done(function(resp){
            $(".tablero").html(resp);
        })
        peticion.fail(function(resp){
            alert("Falle");
        })
    });*/
    //Metodo $.ajax
    $("#sendinfo").on("click",function(){
        let num= $(".numselc").val();
        let peticion = $.ajax({
            url:"./dynamics/php/Ajedrez.php",
            data: {dato1:num},
            method: "POST"
        });
        peticion.done(function(resp){
            $(".tablero").html(resp);
        })
        peticion.fail(function(resp){
            alert("Falle");
        });
        peticion.always(function(resp){
            alert("Datos enviados");
        });
    });
});
