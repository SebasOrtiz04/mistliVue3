<template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="formulario"
      id="form"
    >
    <label for="form">Deja tu comentario</label>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
        class="input"
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Titulo"
        required
        class="input"
      ></v-text-field>
  
      <v-text-field
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Este campo es obligatorio']"
        label="Comentario"
        required
        class="input"
      ></v-text-field>
      <div 
      class="contenedor-botones">
        <v-btn

          class="mr-4 boton"
          @click="validate"
        >
          Enviar
        </v-btn>
      
        <v-btn
          class="mr-4 boton"
          @click="reset"
        >
          Borrar
        </v-btn>
      </div>
    </v-form>
  </template>

<script>


export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Tu nombre es obligatorio',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'El titulo es obligatorio',
    ]
  }),

  methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) this.$emit('validado');
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>
.formulario{
    background-image: linear-gradient(to top, var(--azulH3) 20%,var(--negro) 80%);
    color:var(--azul1);
    width:60%;
    margin:2rem auto;
    border-radius:5px;
}


label{
    margin:1rem auto;
}

.boton{
    color:var(--azulH3);
    background-color:var(--mascaraBlanca);
    margin-bottom:2rem;
    transition: all .5s;
}

.input{
    width:90%;
    margin:.3rem auto;
}

.boton:hover{
    background: transparent;
    color:var(--azul1);
}
@media (max-width: 564px){
    .formulario{
        width:95%;
    }

    .contenedor-botones{
        display:flex;
        flex-direction:column;
    }

    .boton{
        width:90%;
        margin:.5rem auto;
    }

}

</style>