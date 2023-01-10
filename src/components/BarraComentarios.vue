<template>
    <main class="sombra">
        <div class="contenedor__titulo">
            <h1>{{texto[0].contenido}}</h1>
        </div>

        <ListaComentarios/>
        <Formulario @validado="$emit('validado')"/>

    </main>
</template>


<script>

import ListaComentarios from './ListaComentarios.vue'
import Formulario from './FormularioComentario.vue'


export default{

    components:{
        ListaComentarios,
        Formulario
    },

    data(){
        return{
            texto:[
                {
                    nombre:'titulo',
                    contenido:'Comentarios:'
                }
            ]
        }
    }
}
</script>
<style scoped>

h1{
    color:var(--azulH3);
    text-align: left;
    padding-top:2rem;
    margin:2rem;
    margin-bottom:0;
    font-weight: normal;
}

h3{
    color:var(--azulH3);
}

div.contenedor__titulo{
    border-bottom: var(--azulH3) solid 1px;
    width:95%;
    margin:auto;
}

@media (max-width: 546px){
    h1{
        margin-left:.5rem;
    }
}
</style>