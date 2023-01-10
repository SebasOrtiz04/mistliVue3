<template>
    <v-dialog
    v-model="dialogo">
        <v-card
        class="dialogo">
            <v-card-text>
                Esta acción aún no está habilitada,
                disculpe las molestias que esto le genera
                estamos trabajando para habilitarlo lo antes posible
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default{
    data(){
        return{
            dialogo:true
        }
    }
}
</script>
<style>
.dialogo{
    width: 50%;
    margin:auto;
    text-align: center;
}
</style>