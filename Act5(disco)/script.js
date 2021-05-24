window.addEventListener('load', ()=>{
  // 1 amarillo, 2 verde, 3 azul, 4 rojo
	let array=[];
  //aparece el h1 de ganaste o perdiste y quita el tablero
  function estado(x){
    var ganaste= document.createElement("div");
    var div=document.getElementById("titulo");
    var cuadro=document.getElementById("pistaGrande");
    if(x==1)
      ganaste.innerHTML="<h1>Ganaste!!</h1>";
    else
      ganaste.innerHTML="<h1>Perdiste!!</h1>";
    div.append(ganaste);
    cuadro.style.display='none';
  }
  //te da un número aleatorio y a partir de ese colorea un div del tablero
  function color(){
    let n= Math.round(Math.random()*3)+1;
    let id;
    let color;
    let color2;
    if(n==1){
      id="uno";
      color="#ffff6f";
    }
    else if(n==2){
      id="dos";
      color="#3ff357";
    }
    else if(n==3){
      id="tres";
      color="#3d62c4";
    }
    else if(n==4){
		  id="cuatro";
			color="#ff3333";
    }
    var div=document.getElementById(id);
      div.style.backgroundColor=color;
      setTimeout(()=>{
        div.removeAttribute("style");
      }, 250);
      return id;
  }
  //cuando  presiones el botón de inicio va a comenzar el patrón con la promesa
  const boton=document.getElementById('boton');
  boton.addEventListener('click',()=>{
    boton.style.display='none';
    new Promise((resolve, reject)=>{
      setTimeout(()=>{
        let n = color();
        array.push(n);
        resolve(array);
      }, 1000)
    }).then((array)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let n = color();
          array.push(n);
          resolve(array);
        }, 1000)
      })
    }).then((array)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let n = color();
          array.push(n);
          resolve (array);
        }, 1000)
      })
    }).then((array)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let n = color();
          array.push(n);
          resolve(array);
        }, 1000)
      })
    }).then((array)=>{
      setTimeout(()=>{
        let n = color();
          array.push(n);
      }, 1000)
    })

    setTimeout(()=>{
      //Valida que el color que clickearon sea el correcto
      let n=0;
      const div=document.getElementById('uno');
      div.addEventListener('click',()=>{
          if(array[n]=="uno" && n<5)
          {
            if(n==4)
              estado(1);
            else
              n++;
          }
          else{ 
            estado(2)
          }
      })
      let divDos=document.getElementById('dos');
      divDos.addEventListener('click',()=>{
        if(array[n]=="dos" && n<5)
        {
          if(n==4)
            estado(1);
          else
            n++;
        }
        else{ 
          estado(2)
        }
      })
      let divTres=document.getElementById('tres');
      divTres.addEventListener('click',()=>{
        if(array[n]=="tres" && n<5)
        {
          if(n==4)
            estado(1);
          else
            n++;
        }
        else{ 
          estado(2)
        }
      })
      let divCuatro=document.getElementById('cuatro');
      divCuatro.addEventListener('click',()=>{
        if(array[n]=="cuatro" && n<5)
        {
          if(n==4)
            estado(1);
          else
            n++;
        }
        else{ 
          estado(2)
        }
      })
    },5000)
  })	
})
  