<template>
    <v-window
      v-model="onboarding"
      show-arrows
      direction="vertical"
    >
      <v-window-item
        v-for="(colaborador, index) in colaboradores"
        :key="`card-${index}`"
      >
        <v-card
          elevation="2"
          height="200"
          class="d-flex align-center justify-center ma-2 colaborador"
          color="transparent"
        >
          <h1
            class="text-h2"
          >
            Slide {{ colaborador }}
          </h1>
        </v-card>
      </v-window-item>
    </v-window>
  </template>
  <script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
      colaboradores:['uno','dos']
    }),
  }
</script>

<style>
    .colaborador{
        color:var(--azul1)
    }
</style>