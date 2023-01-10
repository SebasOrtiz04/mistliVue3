<template>
  <section class="main">
    <div class="logo__contenedor">
      <div class="logo"></div>
    </div>
    <div class="identidad">
      <div  v-for="(item,index) in identidad" v-bind:key="index" :class="item.css">
        <h1>{{item.titulo}}</h1>
        <p>{{item.contenido}}</p>
      </div>
    </div>
       
    <!-- <Colaboradores/> -->
  </section>
</template>

<script>
// @ is an alias to /src
// import Colaboradores from '../components/CarrucelColaboradores.vue'
export default {
  name: 'HomeView',
  components:{
    // Colaboradores,

  },
  data(){
    return{
      identidad:[
        {
          titulo:'¿QUIENES SOMOS?',
          contenido:'Somos una empresa comprometida con el performance de nuestras aplicaciones, nuestros sitios web y todos nuestros sistemas, la seguridad y la correcta gestión de tus datos y los de tus clientes o productos es muy importante para nosotros así como el uso de las tecnologías mas actuales, para lograr esto nuestro equipo se sigue preparando constantemente con la finalidad de brindarte el mejor servicio.',
          css:'item izquierda'
        },
        {
          titulo:'NUESTRA MISIÓN',
          contenido:'"Realizar nuestros proyectos con buenas prácticas de programación y con la mejor propuesta de performance y seguridad"',
          css:'item derecha'
        },
        {
          titulo:'NUESTRA VISIÓN',
          contenido:'"Covertiros en una empresa desarrolladora de tecnológia con soluciones integrales de robotica industrial, domótica y entornos virtuales"',
          css:'item izquierda'
        },
        {
          titulo:'NUESTROS VALORES',
          contenido:'Estos son nuestro valores',
          css:'item derecha'
        }
      ],
      equipo:{
        mostrar:0,
        colaboradores:[
          {
            nombre:'Juan Sebastian Ortiz Castro',
            descripcion:'Desarrollador Front end',
            css:'imagen__colaborador colaborador1'
          },
          {
            nombre:'Fernando Sanchez Ortega',
            descripcion:'Desarrollador Back End',
            css:'imagen__colaborador colaborador2'
          },
          {
            nombre:'Sergio Mikahil Baez Ortega',
            descripcion:'Desarrollador Front end',
            css:'imagen__colaborador colaborador3'
          },
          {
            nombre:'Daniel Pérez',
            descripcion:'Diseñador gráfico',
            css:'imagen__colaborador colaborador4'
          }
        ]
      }
    }
  },
 created(){
    setInterval(() => {
      this.colaboradorDerecha();
    }, 10000);
  },
  methods:{
    colaboradorIzquierda(){
      if(this.equipo.mostrar==0)this.equipo.mostrar=this.equipo.colaboradores.length-1;
      else this.equipo.mostrar-=1;
    },
    colaboradorDerecha(){
      if(this.equipo.mostrar==this.equipo.colaboradores.length-1)this.equipo.mostrar=0;
      else this.equipo.mostrar+=1;
    }
  }
}

</script>

<style scoped>
section.main{
  min-height:80vh;
  background-image: var(--degradado);
  width: 95%;
  margin: auto;
  -webkit-box-shadow: -4px 0px 15px 0px rgba(13,10,13,0.3);
  -moz-box-shadow: -4px 0px 15px 0px rgba(13,10,13,0.3);
  box-shadow: -4px 0px 15px 0px rgba(13,10,13,0.3);
  border-radius: .5rem;
  padding: 1rem 0;
}

div.logo{
  background-image: url(../assets/logo.png);
  width: 50vw;
  height: 50vw;
  background-size: contain;
  margin: auto;
  margin-top:2rem;
}

div.item{
  width: 80%;
  margin: auto;
  padding-top:1rem;
  border-bottom: var(--azul) solid 1px;
}


div.item h1{
  color:var(--azul);
  font-size:2.5rem;
}

div.izquierda{
  text-align: left;
}

div.derecha{
  text-align:right;
}

div.colaboradores{
  margin:4rem 2rem;
}

div.colaboradores h1,
div.colaboradores h3{
  color:var(--azul);
}

div.colaboradores p{
  text-align:justify;
}
div.colaboradores__contenedor{
  display: flex;
  justify-content:space-between;
  align-items:center;
}
div.imagen__colaborador{
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-size:cover;
  background-position-x:center;
  margin:auto;
  margin-top:1rem;
  border-radius:10px;
  transition: all .3s;
}

div.colaborador1{
background-image:url(../assets/colaborador1.jpeg)
}

div.colaborador2{
 background-image:url(../assets/colaborador2.jpg) 
}

div.colaborador3{
background-image:url(../assets/colaborador3.jpeg)  
}

div.colaborador4{
  background-image:url(../assets/colaborador4.jpeg)
}
div.mascara{
  width:100%;
  height:100%;
  background-color: var(--mascaraColaborador);
  border-radius:10px;
  
}

div.colaboradores__boton{
  display:flex;
  justify-content: center;
  align-items: center;
  transition:.5s;
  border-radius:1rem;
}
div.colaboradores__boton:hover{
  background-color: var(--mascaraBlanca2);
  
}

@media (min-width:745px) {

  div.logo__contenedor{
    display: flex;
    justify-content: left;
  }

  div.logo{
    width:20vw;
    height: 20vw;
    margin: 5vw 10vw;
  }

  div.imagen__colaborador{
    width:40vw;
  }
  div.colaboradores p{
    margin:0 15vw;
  }

 
}

@media (min-width:1024px){

  div.imagen__colaborador{
    background-position-y: center;
  }
  div.logo{
    width:10vw;
    height:10vw;
  }

  div.identidad{
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }

  div.izquierda,
  div.derecha{
    text-align: center;
  }
}


</style>
