console.log('si sirve');

class Pokemon
{
    constructor(nombre, naturaleza, tipo, vidas = 0,ataque = 0,defensa = 0,velocidad = 0,nivel = 1)
    {
        // atributos
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vidas = vidas;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    // metodos
    subNivel()
    {
        if((this.nivel >= 1) && (this.nivel < 100))
        {
            this.nivel++;
            if(this.naturaleza == 'audaz')
            {
                this.naturaleza+=4;
            }
            else if(this.naturaleza == 'osada')
            {
                this.defensa+=4;
            }
            else if(this.naturaleza == 'cauta')
            {
                this.vidas+=4;
            }
            else if(this.naturaleza == 'alegre')
            {
                this.velocidad+=4;
            }
            console.log('Tu pokemon ha subido de nivel');
            console.log('Esta en el nivel: ' + this.nivel);
            /*console.log('vidas: ' + this.vidas);
            console.log('velocidad: ' + this.velocidad);
            console.log('ataque: ' + this.ataque);
            console.log('defensa: ' + this.defensa);*/

        }
        else if(this.nivel === 101)
        {
            console.log('Tu pokemon tiene el nivel maximo posible, que es : 100');
        }
    
    }
    presentarse()
    {
        console.log('Hola me llamo ' + this.nombre + ' soy tipo ' + this.tipo + ' y estoy a nivel ' + this.nivel);
    }
    sumEstad()
    {
        // devuelve suma de vida, ataque, defensa y velocidad
        let suma;
        suma = this.vidas + this.ataque + this.defensa + this.velocidad;
        /*console.log('vidas: ' + this.vidas);
        console.log('velocidad: ' + this.velocidad);
        console.log('ataque: ' + this.ataque);
        console.log('defensa: ' + this.defensa);*/

        console.log('La suma de las estadisticas es: ' +suma);
    }
    promEstad()
    {
        // devuelve prom de vida, ataque, defensa y velocidad
        let suma;
        let prom;
        suma = this.vidas + this.ataque + this.defensa + this.velocidad;
        /*console.log('vidas: ' + this.vidas);
        console.log('velocidad: ' + this.velocidad);
        console.log('ataque: ' + this.ataque);
        console.log('defensa: ' + this.defensa);¨*/
        prom = suma/4;
        console.log('El promedio de las estadisticas es: ' +prom);
    }
}

const PIKACHU = new Pokemon (nombre= 'Pikachu', naturaleza= 'alegre', tipo= 'electrico', vidas = 5, ataque = 4, defensa = 3, velocidad = 6, nivel = 1 );
    console.log(PIKACHU);
const CHAMANDER = new Pokemon (nombre= 'Chamander', naturaleza= 'alegre', tipo= 'fuego', vidas = 3, ataque = 5, defensa = 3, velocidad = 5, nivel = 2 );
    console.log(CHAMANDER);
const SNORLAX = new Pokemon (nombre= 'Snorlax', naturaleza= 'alegre', tipo= 'normal', vidas = 10, ataque = 8, defensa = 5, velocidad = 2, nivel = 3 );
    console.log(SNORLAX);
const MEW = new Pokemon (nombre= 'Mew', naturaleza= 'osado', tipo= 'psiquico', vidas = 6, ataque = 6, defensa = 6, velocidad = 6, nivel = 6 );
    console.log(MEW);
const MEWTWO = new Pokemon (nombre= 'Mewtwo', naturaleza= 'audaz', tipo= 'psiquico', vidas = 7, ataque = 6, defensa = 6, velocidad = 7, nivel = 5 );
    console.log(MWETWO);




