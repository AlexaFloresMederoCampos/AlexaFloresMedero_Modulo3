let intervalo
let i=0;
var fecha = new Date();
fecha.setTime(fecha.getTime()+1000*60*15)

// funcion: saca nombre de la cookie
function obtenerCookie(nombreCookie)
{
  let cookies = document.cookie;
  let arrCookies = cookies.split('; ');

  for(const valor of arrCookies)
  {
    const cookie = valor.split('=');
    if(cookie[0] == nombreCookie)
    {
      return cookie[1];
    }
  }
  return null;
}

// funcion principal
function inicio()
{
  let res = prompt('Escribe "derecha" o "izquierda" según el camino que decidas tomar');
  //primer camino
  if(res == "derecha")
  {
    let res2 = prompt('Escribe "derecha" o "izquierda" según el camino que decidas tomar');
    // segundo camino
    if(res2 == "derecha")
    {
       console.log("casa bruja");
       window.location = "./casaBruja.html";
       i++;
    }
    else if(res2 == "izquierda")
    {
      console.log("hongo");
      window.location = "./hongo.html";
      i++;
    }
    i++;
    document.cookie = 'cookie2='+res2+';expires='+fecha.toGMTString();
  }

    // primer camino
    else if(res == "izquierda")
    {
      let res2 = prompt('Escribe "derecha" o "izquierda" según el camino que decidas tomar');
      //segundo camino
      if(res2 == "derecha")
      {
        console.log("arbol");
        window.location = "./arbol.html";
        i++;
      }
      else if(res2 == "izquierda")
      {
        console.log("casa");
        window.location = "./casa.html";
        i++;
      }
      i++;
      document.cookie = 'cookie2='+res2+';expires='+fecha.toGMTString();     
    }
    else if(i==0)
    {
      location.reload();
    } 
    document.cookie = 'cookie1='+res+';expires='+fecha.toGMTString();
}
console.log(document.cookie);
setTimeout(inicio, 1000);
