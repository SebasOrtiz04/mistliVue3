<template>
    <div
    v-for="(comentario, index) in comentarios"
    v-bind:key="index"
    class="comentario"
    >
        <div 
        class="comentario__encabezado"
        >
            <h3 >{{comentario.nombre}}</h3>
            <span>{{comentario.fecha}}</span>
        </div>

        <div
        class="contenido"
        >
            <h4>{{comentario.titulo}}</h4>
            <p>{{comentario.contenido}}</p>
        </div>

    </div>
    <div
    class="mostrar"
    >
        <h4>{{texto[0]}}</h4>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                texto:[
                    'Ver más..'
                ],
                comentarios:[
                    {
                        nombre:'José Pérez',
                        fecha:'10/11/2022',
                        titulo:'Ya tengo mi sito web',
                        contenido:'Vestibulum ornare quam sit amet ipsum molestie, suscipit ultricies nibh sagittis. Suspendisse sodales imperdiet urna sed pharetra. Nunc ullamcorper eros ut rhoncus rhoncus.'
                    },
                    {
                        nombre:'Alexa Rodriguez',
                        fecha:'9/11/2022',
                        titulo:'Este es un mensaje de ejemplo',
                        contenido:'Vestibulum ornare quam sit amet ipsum molestie, suscipit ultricies nibh sagittis. Suspendisse sodales imperdiet urna sed pharetra. Nunc ullamcorper eros ut rhoncus rhoncus.'
                    },
                    {
                        nombre:'Joaquín',
                        fecha:'9/11/2022',
                        titulo:'Este es un mensaje de ejemplo',
                        contenido:'Vestibulum ornare quam sit amet ipsum molestie, suscipit ultricies nibh sagittis. Suspendisse sodales imperdiet urna sed pharetra. Nunc ullamcorper eros ut rhoncus rhoncus.'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
h3,h4,span,p{
    color:var(--azul1);
    margin-bottom: 0;
}
p{
    text-align: justify;
    width:95%;
    margin: 1rem auto;
    font-size:1.5rem;
}

h4{
    font-weight: normal;
    font-size:1.7rem;
    text-align:left;
    margin:2rem 0 0 .5rem;
}
span{
    font-size:.8rem;
}

div.comentario,
div.comentario__encabezado{
    border-bottom:var(--azul1) solid 2px;
    width:90%;
    margin:auto;
}

div.comentario{
    background-image: linear-gradient(to top,var(--azulH3),var(--negro));
    width:95%;
    border-radius:10px;
}

div.comentario__encabezado{
    border-bottom:var(--azulH3) solid 1px;
    width:90%;
    display:flex;
    justify-content: space-between;
    align-items:baseline;
    padding:0 .5rem;
    margin:2rem auto;
    padding-top:1rem;
}

div.contenido{
    width:80%;
    margin:auto;
    padding-bottom:1rem;
}

div.mostrar h4{
    text-align:center;
    color:var(--azulH3)
}
</style>