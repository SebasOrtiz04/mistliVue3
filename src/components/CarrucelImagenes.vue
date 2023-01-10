<template>
    <v-card
      theme="ligth"
      rounded="0"
      class="main"
    >
      <v-window  v-model="onboarding">
        <v-window-item
          v-for="(hero, index) in heros"
          v-bind:key="index"
          :value="index"
        >
          <v-card
            :class="hero.css"
            margin="1rem 0"
            height="70vh"
            width="100%"
          >
    
                <div class="contenido-hero">
                
                  <div :class="hero.cssTexto">
                    <h1>{{hero.h1}}</h1>
                    
                    <p>{{hero.p}}</p>
                  </div>
                  
                  <div class="contenedor__boton" v-if="hero.boton">
                    <a class="boton b-whats" href="https://api.whatsapp.com/send?phone=+522213295628&text=hola,%20qu%C3%A9%20tal?,%20me%20gustaría%20cotizar%20una%20página%20para%20mi%20negocio" target="blank">
                      <div class="whats">
                        <label for="">{{hero.textoBoton}}</label>
                      </div>
                    </a>
                  </div>
                
                </div>
            
          </v-card>
        </v-window-item>
      </v-window>
  
      <v-card-actions class="justify-space-between">
        <v-btn
          variant="plain"
          icon="mdi-chevron-left"
          @click="prev"
          :color="botonColor"
        ></v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="(hero, index) in heros"
            v-bind:key="index"
            v-slot="{ isSelected, toggle }"
            :value="index"
            :color="botonColor"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
              :color="botonColor"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          variant="plain"
          icon="mdi-chevron-right"
          @click="siguiente"
          :color="botonColor"
        ></v-btn>
      </v-card-actions>
    </v-card>

    
  </template>

<script>
export default {
  data: () => ({
    botonColor:'#22413e',
    onboarding: 0,
    conteo:'',
    onboardingAnterior: '',
    heros:[
        {
            h1:'¿Quieres un sitio Web como este?',
            css:"d-flex justify-center align-center hero hero1",
            cssTexto:'texto__hero',
            boton:true,
            textoBoton:'Saber más...',
            p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dictum sem. Aenean egestas urna vitae magna euismod eleifend. Phasellus iaculis lobortis risus, sed molestie ex faucibus quis. Phasellus nisi augue, ultricies sit amet dapibus nec, commodo vel ex. Curabitur in tempor enim. Sed tristique convallis augue. Nam suscipit suscipit laoreet.',
        },
        {
            h1:'Lleva tu negocio al siguiente nivel',
            css:"d-flex justify-center align-center hero hero2 texto__hero-grande",
            cssTexto:'texto__hero texto__hero-grande',
            boton:false,
            textoBoton:'',
            p:'Maecenas lacinia rutrum odio nec tempor. Cras dictum nunc non venenatis sollicitudin. In facilisis lacus sed orci maximus sollicitudin. Nulla facilisi. Sed lobortis molestie eros ut pellentesque. In vestibulum rhoncus ligula eu venenatis. Nunc aliquet ante vitae egestas aliquam.',
        },
        {
            h1:'Consigue clientes de todo el mundo',
            css:"d-flex justify-center align-center hero hero3",
            cssTexto:'texto__hero texto__hero-grande',
            boton:false,
            textoBoton:'',
            p:'Morbi commodo ante vel mauris eleifend lobortis. Integer mollis ante vitae lorem scelerisque, ac blandit purus ultrices. Nam tristique metus in turpis semper, vel maximus velit dictum. Aliquam auctor scelerisque ante, quis feugiat arcu pretium vel. Nullam quis odio sed velit consectetur commodo in at velit.',
        },
        {
            h1:'Nosotros te ayudamos',
            css:"d-flex justify-center align-center hero hero4",
            cssTexto:'texto__hero ',
            boton:true,
            textoBoton:'Contactanos',
            p:'Praesent at risus a sapien vehicula elementum. Vivamus non lacinia urna. Curabitur molestie vel eros mattis pharetra. In consectetur diam ut erat gravida fringilla. Quisque a lacus massa. Nullam ',
        },
    ]
  }),
  mounted(){
    this.conteo = setInterval(() => {
      this.siguiente();
    }, 8000);
    },
  methods: {
    siguiente () {
        this.onboarding = this.onboarding + 1 >= this.heros.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding == 0
          ? this.heros.length-1
          : this.onboarding - 1
      },
  },
}
</script>

<style scoped>


p{
  font-size:1.5rem;
  text-align:justify;
}


.main{
  margin-bottom:3rem;
}
.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: auto;
  background-position-x: center;     
  background-position-y: center;     
}

.hero1{
  background-image: url(../assets/hero1.jpg);
  
}

.hero2{
  background-image: url(../assets/hero2.jpg);
  
}

.hero3{
  background-image: url(../assets/hero3.jpg);
  
}

.hero4{
  background-image: url(../assets/hero4.jpg);
  
}

.contenido-hero{
   
    background-color: rgba(0,0,0,.8);
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:1.2rem;
    padding: 0 1.5rem;
    
}


div.contenedor__boton{
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 100%;
  padding-bottom:4rem;
}
a.boton{
    background: transparent;
    color: var(--blanco);
    padding: 1rem 3rem;
    margin-top: 3rem;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 1rem;
    width: 100%;
    height: 15%;
    text-align: center; 
    border:var(--azul) solid 1px;
    transition: .3s;
}

.boton:hover{
cursor:pointer;
background-color: rgba(255,255,255,.5);
}



.b-whats{
    display: flex;
    justify-items:center;
}
.whats{
    display: flex;
    margin: auto;
    align-items: center;
    justify-items:center;
}

.whats label,
.whats svg{
  margin:0 1rem;
}

div.texto__hero{
  width: 55vw;
  height: 100%;
  height:auto;
  margin:auto;
}

div.texto__hero-grande{
  width:80vw;
  margin:auto;
}

@media (max-width: 1024px){
  div.texto__hero{
    width:95%;
    
  }
}
@media (max-width: 545px) {
  div.contenido-hero{
    flex-direction:column;
    align-items:center;
  }

  
  div.contenido-hero p{
    display:none;
  }
  
 

  div.contenedor__boton{
    height:12vh;
  }
  a.boton{
    margin:0 auto;
    width:90vw;
    height: 12vh;
    padding:0;
  }
}


</style>