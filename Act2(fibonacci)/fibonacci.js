// numeros random
const columnas = Math.floor(Math.random() * 10) + 1;

const celdas = Math.floor(Math.random() * 10) + 1;
 
let celdasTot = 0;

let inicio;
let secuencia;
let num_ant=1;
let num_antAnt=0;

let arreglo = [];

for(let i=0; i < celdas; i++)
{
    arreglo[i] = new Array();
    for(let j=0; j < columnas; j++)
    {
        // llena la primera localidad con un 0 :)
        if(i==0 && j==0)
        {
            arreglo[0][0]=0;
        } 
        else
        {
            // cada posicion de la localidad es igual al numero
            // anterior de ésta mas el numero anterior del anterior
            secuencia=num_ant+num_antAnt;
            num_ant=num_antAnt;
            num_antAnt=secuencia;
            // para que sea gusanito se hace la vuelta cuando el
            // numero de fila es impar
            if(i%2 == 0)
            {
                arreglo[i].push(secuencia);
            }
            else
            {
                arreglo[i].unshift(secuencia);
            }
        }
    }
}

console.log(arreglo);
console.log("Largo: ");
console.log(celdas);
console.log("Ancho: ");
console.log(columnas);



