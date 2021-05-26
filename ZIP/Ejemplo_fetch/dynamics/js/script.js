$(window).on("load", function() {
  // fetch("./imagenes.html").then((respuesta)=>{
  //   return respuesta.text();
  // }).then((txt)=>{
  //   console.log(txt);
  //   var imgs = txt.split("\n");
  //   console.log(imgs);
  //   imgs.forEach((item, i) => {
  //     var div = $("<div>");
  //     var a = $("<a>");
  //     var img = $(item);
  //     var figure = $("<figure>");
  //     a.append(img,figure);
  //     div.append(a);
  //     div.addClass("enlace_card");
  //     $("#galeria").append(div);
  //   });
  // })

  /*----------Dentro de fetch() el parametro enviado es la ruta de donde se quiere enviar la informacion--------------*/

  /*-----.then((respuesta)=>{
        return respuesta.json()
      })
      Lo que hace es generarnos de la promesa fetch() nos da un objeto de "respuesta" en caso de que haya sido exitoso fetch()
  -----*/
  fetch("./dynamics/php/gatos.php").then((respuesta)=>{
    /*------------regresa lo obtenido en respuesta
      .json() este método recibe el flujo de datos de respuesta (en el orden como se encuentran en el archivo) y los guarda como tecto plano

    ------------*/
    return respuesta.json()
    /*-----.then((imgs)=>{
      del primer .then(respuesta) nos da un objeto "imgs" que es el return respuesta.json() en caso de que haya sido exitoso .then(respuesta)
    ------------*/
  }).then((imgs)=>{
    /*----Imprime en consola lo que recibio en imgs-----*/
    console.log(imgs);
    /*----------recorre imgs para acceder a cada indice------------*/
    imgs.forEach((obj, i) => {
        /*------Variable que guarda al elemento $("<div>")-----*/
        var div = $("<div>");
        /*------Variable que guarda al elemento $("a href='./'>")-----*/
        var a = $("<a href='./'> ");
        /*-----Variable guarda la ruta de la imagen con base a la posicion del objeto (obj)------*/
        var img = $("<img src='./statics/img/"+obj.img+"' alt='"+obj.nombre+"'>");
        /*----Variable donde se guarda lo que aparece debajo de la imagen el recuadro----*/
        var figure = $("<figure>"+obj.nombre+"</figure>");
        /*---poner a elemento 'a' despues del elemento img y figure---*/
        a.append(img,figure);
        /*---poner a elemento 'div' despues del elemento a---*/
        div.append(a);
        /*---añadir al elemento 'div' la clase "enlace_card"---*/
        div.addClass("enlace_card");
        /*---poner a elemento con id 'galeria' despues del elemento div---*/
        $("#galeria").append(div);
      });
  })
});
