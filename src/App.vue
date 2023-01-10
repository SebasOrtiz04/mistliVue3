<template>

<div v-if="cargando" class="pantalla__carga">
  <!-- <div class="logo"></div> -->
  <!-- <div class="pantalla__carga-titulo">
    <h1>{{texto.titulo}}</h1>
    <span> {{texto.tituloSpan}}</span>
  </div> -->
  <Spinner :color="color"/>  
</div>
<main v-if="cargado">
<div class="bgnav bgnav-fixed"> 
  <div class="bgnav__superior">
      <div class="bgnav__texto ">
        <router-link to="/" >
          <div class="contenedor-logo">
            <div class="logo-nav">
            </div>
        
            <h1 class="titulo-nav">{{texto.titulo}}<span>{{texto.tituloSpan}}</span></h1>
          </div>
        </router-link>
      </div>
      <div class="menu-movil">
        <button v-on:click="menuM" class="toogle">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    
    </div>

    <div class="bgnav__inferior-g " >
        <nav>
          <div class="cont_int">
            <router-link v-on:click="cerrar" to="Nosotros">{{texto.nav.nosotros}}</router-link>
            <router-link v-on:click="cerrar" to="Contacto">{{texto.nav.contacto}}</router-link>
            <router-link v-on:click="cerrar" to="NuestrosProductos">{{texto.nav.nuestrosProductos}}</router-link>
            <router-link v-on:click="cerrar" to="InicioSesion">{{texto.nav.inicioSesion}}</router-link>
            <router-link v-on:click="cerrar" to="Registro">{{texto.nav.registro}}</router-link>
          
          </div>
        </nav>
      </div>
    
      <div class="bgnav__inferior " v-if="menuMovil">
        <nav>
          <div class="cont_int">
            <router-link v-on:click="cerrar" to="Nosotros">{{texto.nav.nosotros}}</router-link>
            <router-link v-on:click="cerrar" to="Contacto">{{texto.nav.contacto}}</router-link>
            <router-link v-on:click="cerrar" to="NuestrosProductos">{{texto.nav.nuestrosProductos}}</router-link>
            <router-link v-on:click="cerrar" to="InicioSesion">{{texto.nav.inicioSesion}}</router-link>
            <router-link v-on:click="cerrar" to="Registro">{{texto.nav.registro}}</router-link>
          
          </div>
        </nav>
      </div>
   
  
  </div>
  <div class="main">
    <transition name="fade">
      <router-view/>
    </transition>
    
  </div>
  <footer>

<div class="iconos__footer">
        <a href="https://api.whatsapp.com/send?phone=+522222506893&text=ho la,%20qu%C3%A9%20tal?,%20me%20gustaría%20cotizar%20una%20página%20para%20mi%20negocio" target="blank">    
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
        </a>
        <a href="https://www.facebook.com/Mistli-102559772505972/">
        
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
            
        </a>
        <a href="https://www.facebook.com/Mistli-102559772505972/">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
        </a>
</div>

<div class="footer__division">

</div>       

<div class="texto__footer">
  <div class="contactoFooter"><p>Contáctanos</p></div>
  <div class="celFooter"><p>Cel: 22 26 62 27 78</p></div>
  <div class="correoFooter"><p>ventas@mistli.com.mx</p></div>
</div>

<div class="footer__division">

</div>
 
<div class="derechos"><p>Mistli 2022, todos los derechos reservados.</p></div>
  
</footer>
</main>
</template>

<script>
import Spinner from 'vue-spinner/src/SkewLoader.vue'
export default{
  name:"App",
  components:{
      Spinner
    },  
  data(){
    return{
      cargando:true,
      cargado:false,
      menuMovil:false,
      color:'#4cccc3',
      texto:{
        titulo:'Mistli',
        tituloSpan:'Soluciones en software y hardware',
        nav:{
          nosotros:'Nosotros',
          contacto:'Contacto',
          inicioSesion:'Inicio de Sesión',
          nuestrosProductos:'Nuestros Productos',
          registro:'Registro'
        }
      }
    }
  },
  beforeCreate(){
    this.$router.push({path:'/'});
    setTimeout(() => {
      this.cargando=false;
      this.cargado=true;
    }, 1500);
  },
  onMounted(){
    
  },
  methods:{
    menuM(){
      if(this.menuMovil)this.menuMovil=false;
      else this.menuMovil=true;
    },
    cerrar(){
        this.menuMovil=false;
    }
  }
}
</script>



<style>
:root{
    --blanco :#ffffff;
    --negro : #212121;
    --amarillo : #ffc107;
    --azul: #84e6df;
    --cinta: #800000;
    --gris: #757575;
    --azul2: #4cccc3;
    --azulH3: #22413e;
    --azul3: #e5f7f5;
    --azul4: #cbefeb;
    --mascaraBlanca:rgba(255,255,255,.85 );
    --mascaraNegra:rgba(0, 0, 0, 0.9);
    --mascaraColaborador:rgba(0,0,0,.5);
    --mascaraBlanca2:rgba(255,255,255,.5);
    --degradado:linear-gradient(to bottom, var(--azulH3),var(--negro));

}
#app {
  font-family: 'Akshar', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--azul4);
  font-size: 1.6rem;
  box-sizing: border-box;
  scroll-snap-type:none;
  margin: 0;
}
.sombra{

-webkit-box-shadow: -1px 0px 15px 0px rgba(13,10,13,0.3);
-moz-box-shadow: -1px 0px 15px 0px rgba(13,10,13,0.3);
box-shadow: -1px 0px 15px 0px rgba(13,10,13,0.3);
background-image: linear-gradient(to top, var(--azul4), var(--azul3) 100%);
border-radius: 1rem;
padding-bottom: 3rem;
width: 90%;
margin: 1rem auto;
}

.servicio{
  background-size: cover;
  background-position-x: center;
  background-repeat:no-repeat;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin:1rem 0;
  border-top:var(--azulH3) solid 1px;
  border-bottom: var(--azulH3) solid 2px;
}
div.pantalla__carga{
  position: absolute;
  top:0;
  z-index:10000;
  height:100vh;
  width: 100vw;
  background:linear-gradient(var(--negro),var(--azulH3));
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
}

div.pantalla__carga-titulo{
  display:inline;
  margin:2rem 4rem;
}

div.pantalla__carga h1{
  margin:0 auto;
  color:var(--azul);
  font-size:4rem;
  display:block;
  font-weight:400;
}
div.pantalla__carga span{
  color:var(--azul4);
  font-size:2rem;
  font-weight: 100;
}

div.logo{
  background-image:url(../src/assets/logo.png);
  width:20vw;
  height:20vw;
  background-size:contain;
  margin:1rem auto;
}

div.bgnav{
    /* background-color: var(--azul); */
    background-image: linear-gradient(to top, var(--azulH3), var(--negro) 100%);
    margin-bottom: 0rem;
    padding: 0rem;
    display: flex;
    flex-direction: column;
}

div.bgnav a{
    text-decoration: none;
    font-size: 1.6rem;
}

div.bgnav-fixed{
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    
}

div.bgnav__superior{
    display: flex;
    width: 100%;
    height: 11vh;
    align-items: center;
}

div.bgnav__texto{
    padding-left: 1rem;
    float: left;
    width: 80%;
    display: flex;
}

div.contenedor-logo{
    display: flex;
    justify-content: left;
    gap: 1rem;
}

div.logo-nav{
    background-image: url(../src/assets/logo.png);
    width: 3rem;
    height: 3rem;
    margin: auto;
    background-size: cover;
}

h1.titulo-nav {
    text-align: center;
    font-size: 1.7rem;
    color: var(--blanco);
    font-weight: 500;
    padding: 0%;
 }
 
 h1.titulo-nav span {
     font-size: 2rem;
     font-weight: 100;
     display:none;
 }

 div.menu-movil{
    width: 60px;
    display: block;
    float: right;
    text-align: right;
    margin-top: 12px;
    padding-right: 2rem;
}

button.toogle{
    background: none;
    border: none;
    cursor: pointer;
}
div.bgnav__inferior{
    width: 100%;
}
div.bgnav__inferior-g{
  display:none;
}
.cont_int{
    padding-top:1rem;
    display:flex;
    flex-direction: column;
    align-items: center;
}

div.cont_int a{
    width: 100%;
    padding:.5rem 0;
}

nav a {
  color:var(--blanco);
  text-decoration:none;
  font-size:2rem ;
  font-weight: 500;
  transition: .5s;
}

nav a:hover{
  background-color: var(--azul4);
  color: var(--azulH3);
}

nav a.router-link-exact-active {
  background-color: var(--azul4);
  color: var(--azulH3)
}

div.main{
  margin-top:15vh;
}

footer{
    width: auto;
    background-image: linear-gradient(to top, var(--azulH3), var(--negro) 100%);
    margin: 0;
    margin-top: 2rem;
    padding: 1rem;
}

div.iconosFooter{
    width: 100%;
    padding-top: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
}

div.footer__division{

margin: 2rem auto;
width: 70%;
height: 1px;
background-color: rgba(1,1,1,.5)
}

@media (min-width: 768px) { 
  div.bgnav__inferior,  
  div.menu-movil{
        display: none; 
    }

    div.bgnav{
        flex-direction: row;
        align-items: center;
        height: 10vh;
    }

    div.bgnav__texto{
        width: 100%;
    }

    div.bgnav__superior{
        width: 30%;
    }

    div.bgnav__inferior-g{
      display: flex;
      justify-content: right;
      padding-right:1rem;
      width: 70%;
      align-items: center;
    }
    
    nav{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;

    }
    
    .cont_int{
        flex-direction: row;
        justify-content: space-around;
        height: 100%;
        padding:0;
    }
    div.cont_int a{
        width: max-content;
        padding: 0 .5rem;
        font-size:1.4rem;
        height: 10vh;
        display:flex;
        align-items: center;
    }

    h1.titulo {
        font-size: 7rem;
        
    }

    h1.titulo span{
        display: inline;
        font-size:1rem;
    }

    
}

@media (min-width: 1200px) { 
    h1.titulo-nav span{
        display: inline;
        font-size:1rem;
    }

    footer{
      display: grid;
      grid-template-columns:repeat(3,1fr);
    }

    div.footer__division{
      display:none;
    }

    div.texto__footer{
      border-left:var(--azulH3) solid 1px;
      border-right:var(--azulH3) solid 1px;
    }
    div.iconos__footer,
    div.derechos{
      display:flex;
      justify-content: center;
      align-items: center;
    }

}

.navegador a{
    color:var(--blanco);
    text-decoration:none;
    font-size:2rem ;
    font-weight: 500;
    padding: 1rem;
    width: 100%;
}

.navegador a:hover{
    background-color: var(--azul4);
    color: var(--azulH3)
}

div.bgnav-fixed{
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    
}

div.espacio{
    height: 12rem;
}

div.iconos__footer{
  display:flex;
  justify-content: space-evenly;
}
.textoFooter{
    width: 90%;
    margin: auto;
    padding-bottom: 1rem;
}
.textoFooter p,
.derechos{
    color: var(--blanco);
    font-size: 1.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity .5s;
  opacity: 0
}
</style>
