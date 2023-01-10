<template>
<Mensaje v-if="alerta"/>

<Carrucel/>


<Productos @saberMas="mostrarAlerta" />

<Info @botonAside="mostrarAlerta" />
<Comentarios @validado="mostrarAlerta"/>




</template>

<script>

import Carrucel from '../components/CarrucelImagenes.vue'
import Productos from '../components/ProductosHome.vue'
import Info from '../components/DashInformativos.vue'
import Comentarios from '../components/BarraComentarios.vue'
import Mensaje from '../components/MensajeAlerta.vue'


export default{
  components:{
      Carrucel,
      Productos,
      Info,
      Comentarios,
      Mensaje
    },
    data(){
      return{
        isActive: false,
        alerta:false
      }
    },
    methods:{
      mostrarAlerta(){
        this.alerta=true;
        setTimeout(() => {
          this.alerta=false;
        }, 6000);
      }
    } 
    
}
  
</script>

<style scoped>

div.espacio{
  height: 2rem;
}
div.servicio{
  background-size: cover;
  background-position-x: center;
  background-repeat:no-repeat;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgba(255,255,255,.3);
  width: 90%;
  margin:1rem 0;
  border-top:var(--azulH3) solid 1px;
  border-bottom: var(--azulH3) solid 2px;
}

div.imagenDisenoWeb{
  background-image: url(../assets/fondoDW.jpg);
}

div.imagenDisenoMovil{
  background-image: url(../assets/fondoDM.jpg);
}

div.imagenDisenoSoftware{
  background-image: url(../assets/fondoDS.jpg);
}

div.imagenAutomatizacion{
  background-image: url(../assets/fondoA.jpg);
}

div.imagenFotografia{
  background-image: url(../assets/fondoF.jpg);
}



h3,
p,
h2{ 
    color:var(--azulH3);
}



.contenido-hero h2, .contenido-hero p{
    color: var(--blanco);
    padding: 1rem;
}

.ubicacion{
    display: flex;
    flex-direction:column;
    align-items: center;
}

div.ubicacion p{
  padding: 0;
}

.boton{
    background: var(--azulH3);
    color: var(--blanco);
    padding: 1rem 3rem;
    margin-top: 3rem;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 1rem;
    width: 80%;
    text-align: center; 
    border:var(--azul) solid 1px;
    transition: .3s;
}

.boton:hover{
cursor:pointer;
background-color: var(--azul1);
color:var(--azulH3)
}


div.servicios{
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.mascara{
  background-color: var(--mascaraBlanca);
  z-index:11;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .3rem 0
}

h2.titulo-servicios{
  padding-top:2rem;
  font-size:3rem;
}

div.servicio h3{
    color: var(--azulH3);
    margin:1rem;
}

div.servicios p{
  text-align:justify;
  margin:1rem 2rem;
  font-size:1.4rem;
}



.iconos{
    height: 15rem;
    width: 15rem;
    background-image: linear-gradient(to top, var(--azul), var(--azul2) 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}



@media (min-width:756px) {
  div.servicios{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    margin:auto;
    grid-row-gap: 1rem;
  }

  div.servicio{
    width: 98%;
    margin: auto;
    
  }

  div.servicio p{
    font-size:1.3rem;
  }

  .boton{
    margin:.2rem auto;
  }

}

@media (min-width:1024px) {
  div.servicios{
    grid-template-columns: repeat(3, 1fr);
  }

  div.servicio{
    width:95%;
  }
}

</style>