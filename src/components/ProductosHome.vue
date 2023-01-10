<template>
    <main class=" sombra ">
        <h2 class="titulo-servicios">{{texto.servicios}}</h2>

        <div class="servicios">

            <div v-for="(item,index) in servicios" v-bind:key="index" :class="item.clase">
                <div class="mascara">
                    <div class=mascara-texto>
                      <h3>{{item.titulo}}</h3>
                      <p v-if="item.contenido[0]!=''">{{item.contenido[0]}}</p>
                      <p class="ocultar" v-if="item.contenido[1]!=''">{{item.contenido[1]}}</p>
                      <p class="ocultar" v-if="item.contenido[2]!=''">{{item.contenido[2]}}</p>
                    </div>
                
                    <button @click="$emit('saberMas')" class="boton">{{texto.botonServicios}}</button>
                </div>
            </div>
        
        </div> <!--Cierre clase de servicios-->
    </main>
</template>

<script>

export default{
    data(){
        return{
            h:'imagen',
      texto:{
        servicios:'NUESTROS SERVICIOS',
        botonServicios:'SABER MÁS'
      },
      servicios:[
        {
          titulo:'Creación de sitios y páginas Web',
          contenido:['¿Tu negocio ya está en línea?',
                    '     En Mistli podemos desarrollar un sitio a la medida para ti, con el mejor performance y las utilidades de las plataformas que todos conocen.',
                    ''],
          clase:'imagenDisenoWeb servicio'          
        },
        {
          titulo:'Creación de aplicaciones móviles',
          contenido:['Has que encontrar tu marca sea más cómodo',
                    'Estamos listos para la creación de aplicaciones android e ios, conecta todas tus plataformas y ten al alcance de tus manos y de tus consumidores tus productos' ,
                    ''
                    ],
          clase:'imagenDisenoMovil servicio'          
        },
        {
          titulo:'Creación de aplicaciones para ordenador',
          contenido:[
                      'Ten el control total de tu empresa ',
                      '',
                      'Control de ventas, reportes, inventario, comunicación con PLC´s y control, Trazabilidad, Internet Of Things, Industria 4.0.'
                    ],
          clase:'imagenDisenoSoftware servicio'          
        },
        {
          titulo:'Identidad de imagen',
          contenido:[
                      'Quisque a magna vestibulum, pretium orci eu, eleifend augue ',
                      'Praesent libero lacus, congue in facilisis id, ullamcorper id justo. Nulla facilisi. Suspendisse finibus eros eu enim efficitur, eu sodales orci iaculis',
                      ''
                    ],
          clase:'imagenFotografia servicio'          
        }]
        
    }
}
}
</script>

<style scoped>


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
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: .5rem;
    width: 90%;
    text-align: center; 
    border:var(--azul) solid 1px;
    transition: .3s;
    padding:.5rem 0;
    margin:1rem auto;
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
  padding: 1.5rem 0;
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

p.ocultar{
  display:none;
}

.iconos{
    height: 15rem;
    width: 15rem;
    background-image: 
    -gradient(to top, var(--azul), var(--azul2) 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

div.mascara-texto{
  margin:auto;
}

div.mascara-texto p{
  text-align:center;
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
    height: 95vh;
  }

  div.servicio p{
    font-size:1.3rem;
  }

  p.ocultar{
    display:block;
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