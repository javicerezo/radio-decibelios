$(document).ready(function(){
    const listaEmisoras = [
        {nombreEmisora : '40 principales', frecuenciaEmisora : '93.9 FM', imagen : 'imagenes/40-principales.png', enlace : '#', contador : 0, ranking: c => c++},
        {nombreEmisora : 'Cadena 100', frecuenciaEmisora : '99.5 FM', imagen : 'imagenes/cadena-100.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Cadena Digital', frecuenciaEmisora : '97.8 FM', imagen : 'imagenes/cadena-digital.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Canal Fiesta Radio', frecuenciaEmisora : '103.9 FM', imagen : 'imagenes/canal-fiesta.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Canal Sur Radio', frecuenciaEmisora : '98.6 FM', imagen : 'imagenes/canal-sur-radio.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Radio Catalana', frecuenciaEmisora : '102.8 FM', imagen : 'imagenes/cat-radio.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Cope', frecuenciaEmisora : '100.7 FM', imagen : 'imagenes/cope.png', enlace : '#', contador : 0, ranking : c => c++ },
        {nombreEmisora : 'Cadena Dial', frecuenciaEmisora : '91.7 FM', imagen : 'imagenes/dial.png', enlace : '#', contador : 0, ranking : c => c++ }
    ];
 
    $('img').on('click', function (){
        let comparador = $(this).attr('src');
        SuenaEmisora(comparador);
    });

    function SuenaEmisora(comparador) {
        let inicio = Date.now();

        let imgclic = $('#imagenRadio').attr('src');
        let resultado = listaEmisoras.find( e => e.imagen == comparador);
        console.log(resultado.nombreEmisora);
        if(resultado.imagen != imgclic) {
            $('#nombreRadio').text(resultado.nombreEmisora);
            $('#frecuenciaRadio').text(resultado.frecuenciaEmisora);
            $('#imagenRadio').attr('src', resultado.imagen);
        };
        
        let final = Date.now();
        console.log(`${final - inicio} MILISEGUNDOS`);  
    };

});