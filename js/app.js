// VARIABLES
let imagenEmisoraSuena = document.querySelector('#imagenRadio');
let nombreEmisoraSuena = document.querySelector('#nombreRadio');
let frecuenciaEmisoraSuena = document.querySelector('#frecuenciaRadio');
let ranking = document.querySelector('#ranking');

const emisorasListado = document.querySelector('#emisoras_listado');
let listaTop = [];

// EVENTOS
document.addEventListener('DOMContentLoaded', () =>{
    iniciarApp();
});
emisorasListado.addEventListener('click', cambiarEmisora);

// FUNCIONES
function iniciarApp(){
    imagenEmisoraSuena.src = "imagenes/modulador2.png";
    nombreEmisoraSuena.textContent = '---------';
    frecuenciaEmisoraSuena.textContent = '---------';
};

function cambiarEmisora(e){
    e.preventDefault();
    const srcEmisora = e.target.getAttribute('src');
    
    let ObjEmisora = listaEmisoras.find( e => srcEmisora === e.imagen);
    imagenEmisoraSuena.src = ObjEmisora.imagen;
    nombreEmisoraSuena.textContent = ObjEmisora.nombreEmisora;
    frecuenciaEmisoraSuena.textContent = ObjEmisora.frecuenciaEmisora;
    
    ordenaEmisoras(ObjEmisora);
    suenaEmisora(ObjEmisora);
};

function ordenaEmisoras(ob){
    const ObjEmisora = {
        nomb : ob.nombreEmisora,
        frec : ob.frecuenciaEmisora,
        img : ob.imagen,
        enl : ob.enlace,
        contador : 1
    };

    const existe = listaTop.some( ob => ob.nomb === ObjEmisora.nomb);
    if(existe){
        const listaTop2 = listaTop.map( ob => {
            if(ob.nomb === ObjEmisora.nomb){
                ob.contador++;
                return ob; // devuelve el obj actualizado en cantidad
            } else {
                return ob; //devuelve los obj que no son duplicados
            };
        });
        listaTop = [...listaTop2];
    } else {
        listaTop = [...listaTop, ObjEmisora];
    }

    const listaTopCopia = [...listaTop];
    let indice = null;

    for(let i=0; i<5; i++){
        let cont = 0;
        listaTopCopia.forEach( ob => {
            if( ob.contador > cont){
                cont = ob.contador;
                ranking.children[i].children[0].children[0].textContent = ob.nomb.toUpperCase();
                ranking.children[i].children[1].attributes.href.value = ob.enl;
            };
        });
        indice = listaTopCopia.findIndex( ob => ob.contador === cont);
        listaTopCopia.splice(indice, 1);
    };
};

function suenaEmisora(ob){
    console.log('estoy sonando...');
};