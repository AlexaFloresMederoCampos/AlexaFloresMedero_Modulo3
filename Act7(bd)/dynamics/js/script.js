$(document).ready(function() {
    // con click
    $(".submitcarr").on("click",function(){
        let consultaCarr= $("input[name=carrera]").val();
        let peticion = $.ajax({
            url:"./dynamics/php/Consultas.php",
            data: {busq:consultaCarr},
            method: "POST"
        });
        peticion.done(function(resp){
            $(".results").html(resp);
        })
        peticion.fail(function(resp){
            alert("Falle");
        });
    });
    // con change(?)
    $(".filtmod").on("change",function(){
        let consultaSelect= $(".filtmod").val();
        let peticion = $.ajax({
            url:"./dynamics/php/Consultas.php",
            data: {dato:consultaSelect},
            method: "POST"
        });
        peticion.done(function(resp){
            $(".results").html(resp);
        })
        peticion.fail(function(resp){
            alert("Falle");
        });
    });
});
