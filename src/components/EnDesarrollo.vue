<template>
  <section>
    <h1>Esta página está en desarrollo</h1>
    <div class="logo"></div>
    <p>Disculpe las molestias,
      nuestro equipo está trabajando
      arduamente para brindarle el mejor servicio.
    </p>
    <p>Lo invitamos a seguir navegando en nuestras secciones disponibles.</p>

  </section>
</template>>
<style scoped>

section{
  margin:auto;
  width: 90%;
  background-color:black;
  border-radius: 1rem;
}

h1{
  color:var(--azul);
  padding: 1rem;
}
p{
  text-align:justify;
  margin:0 2rem;
  padding-bottom: 2rem;
}
div.logo{
  width: 40vw;
  height:40vw;
  background-image:url(../assets/logo.png);
  margin: 2rem auto;
  background-repeat:no-repeat;
  background-size: contain;

}

@media (min-width:745px){
  section{
    width: 70%;
  }
  div.logo{
    width:20vw;
    height:20vw;
  }
  p{
    margin:0 4rem;
  }
}

@media (min-width:1024px){
  
  section{
    width:50%;
  }
  div.logo{
    width:10vw;
    height:10vw
  }

  p{
    margin:0 6rem;
  }
}
</style>