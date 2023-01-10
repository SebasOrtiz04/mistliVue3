<template>
    <main class="sombra main">
        <div class="articulo">
            <h1 class="margin-top">{{texto[0].contenido}}</h1>
            <article v-for="(element,index) in notas" v-bind:key="index" class="servicio nota">
                <h2>{{element.titulo}}</h2>
                <p>{{element.parrafos[0]}}</p>
                <p >{{element.parrafos[1]}}</p>
                <p class="ocultar">{{element.parrafos[2]}}</p>
            </article>
        </div>
        <aside>
           <div 
           v-for="(nota,index) in aside"
           v-bind:key="index"
           class="aside"
           >
            <h3>{{nota.titulo}}</h3>
            <p>{{nota.info}}</p>
            <button @click="$emit('botonAside')" class="boton-aside">{{nota.boton}}</button>
            <hr>
            </div>
        </aside>
        
    </main>

</template>>

<script>

export default{
    data(){
        return{
            texto:[
                {
                    nombre:'titulo',
                    contenido:'Información útil'
                }
            ],
            notas:[
                {
                    titulo:'¿Qué necesito para tener mi página Web?',
                    parrafos:[
                        'In nulla urna, tempor ut rutrum vel, hendrerit ac nibh. Phasellus lobortis efficitur urna tristique elementum.',
                        ' Suspendisse justo diam, mollis a elementum euismod, elementum eget tellus. Nulla ultricies turpis sit amet lacus scelerisque volutpat. Maecenas lacinia efficitur ligula, a semper turpis placerat nec.',
                        ' Cras sit amet pulvinar est, eget ultricies felis. Sed blandit sem in quam pellentesque, eget fermentum nibh feugiat. In blandit purus id cursus lobortis. Aliquam rutrum in augue quis auctor. Sed posuere ante a eros interdum, euismod varius lorem condimentum. Duis congue nulla ut vehicula euismod. Nulla facilisi. Curabitur scelerisque velit ut sagittis blandit. Pellentesque at velit felis. Nunc dui odio, iaculis a gravida eu, lobortis efficitur massa. Fusce suscipit sit amet quam eu rutrum. Nullam blandit pellentesque metus, ac consectetur purus facilisis et. Nullam sit amet arcu eu felis porttitor posuere eu elementum felis. Proin feugiat maximus quam sit amet aliquam. In ac sodales velit. Donec neque justo, suscipit ut lacus at, convallis porttitor ante. Aenean gravida urna quam, non finibus nibh ornare sodales. Nullam varius lacus vitae mauris mattis tincidunt. Aenean consectetur erat nec facilisis luctus. Pellentesque elementum accumsan velit, a fringilla nisi tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ex libero, fringilla et erat non, tincidunt bibendum velit. Pellentesque blandit auctor iaculis. Etiam nibh tellus, pellentesque vitae enim in, consectetur varius magna. Cras at ultrices ligula. Maecenas in semper nunc, a dignissim nunc.'
                    ]
                },
                {
                    titulo:'¿Base de datos?',
                    parrafos:[
                        'In nulla urna, tempor ut rutrum vel, hendrerit ac nibh. Phasellus lobortis efficitur urna tristique elementum.',
                        ' Suspendisse justo diam, mollis a elementum euismod, elementum eget tellus. Nulla ultricies turpis sit amet lacus scelerisque volutpat. Maecenas lacinia efficitur ligula, a semper turpis placerat nec.',
                        ' Cras sit amet pulvinar est, eget ultricies felis. Sed blandit sem in quam pellentesque, eget fermentum nibh feugiat. In blandit purus id cursus lobortis. Aliquam rutrum in augue quis auctor. Sed posuere ante a eros interdum, euismod varius lorem condimentum. Duis congue nulla ut vehicula euismod. Nulla facilisi. Curabitur scelerisque velit ut sagittis blandit. Pellentesque at velit felis. Nunc dui odio, iaculis a gravida eu, lobortis efficitur massa. Fusce suscipit sit amet quam eu rutrum. Nullam blandit pellentesque metus, ac consectetur purus facilisis et. Nullam sit amet arcu eu felis porttitor posuere eu elementum felis. Proin feugiat maximus quam sit amet aliquam. In ac sodales velit. Donec neque justo, suscipit ut lacus at, convallis porttitor ante. Aenean gravida urna quam, non finibus nibh ornare sodales. Nullam varius lacus vitae mauris mattis tincidunt. Aenean consectetur erat nec facilisis luctus. Pellentesque elementum accumsan velit, a fringilla nisi tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ex libero, fringilla et erat non, tincidunt bibendum velit. Pellentesque blandit auctor iaculis. Etiam nibh tellus, pellentesque vitae enim in, consectetur varius magna. Cras at ultrices ligula. Maecenas in semper nunc, a dignissim nunc.'
                    ]
                },
                {
                    titulo:'¿Qué es IoT?',
                    parrafos:[
                        'In nulla urna, tempor ut rutrum vel, hendrerit ac nibh. Phasellus lobortis efficitur urna tristique elementum.',
                        ' Suspendisse justo diam, mollis a elementum euismod, elementum eget tellus. Nulla ultricies turpis sit amet lacus scelerisque volutpat. Maecenas lacinia efficitur ligula, a semper turpis placerat nec.',
                        ' Cras sit amet pulvinar est, eget ultricies felis. Sed blandit sem in quam pellentesque, eget fermentum nibh feugiat. In blandit purus id cursus lobortis. Aliquam rutrum in augue quis auctor. Sed posuere ante a eros interdum, euismod varius lorem condimentum. Duis congue nulla ut vehicula euismod. Nulla facilisi. Curabitur scelerisque velit ut sagittis blandit. Pellentesque at velit felis. Nunc dui odio, iaculis a gravida eu, lobortis efficitur massa. Fusce suscipit sit amet quam eu rutrum. Nullam blandit pellentesque metus, ac consectetur purus facilisis et. Nullam sit amet arcu eu felis porttitor posuere eu elementum felis. Proin feugiat maximus quam sit amet aliquam. In ac sodales velit. Donec neque justo, suscipit ut lacus at, convallis porttitor ante. Aenean gravida urna quam, non finibus nibh ornare sodales. Nullam varius lacus vitae mauris mattis tincidunt. Aenean consectetur erat nec facilisis luctus. Pellentesque elementum accumsan velit, a fringilla nisi tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ex libero, fringilla et erat non, tincidunt bibendum velit. Pellentesque blandit auctor iaculis. Etiam nibh tellus, pellentesque vitae enim in, consectetur varius magna. Cras at ultrices ligula. Maecenas in semper nunc, a dignissim nunc.'
                    ]
                },
                {
                    titulo:'¿Qué es la Industria 4.0?',
                    parrafos:[
                        'In nulla urna, tempor ut rutrum vel, hendrerit ac nibh. Phasellus lobortis efficitur urna tristique elementum.',
                        ' Suspendisse justo diam, mollis a elementum euismod, elementum eget tellus. Nulla ultricies turpis sit amet lacus scelerisque volutpat. Maecenas lacinia efficitur ligula, a semper turpis placerat nec.',
                        ' Cras sit amet pulvinar est, eget ultricies felis. Sed blandit sem in quam pellentesque, eget fermentum nibh feugiat. In blandit purus id cursus lobortis. Aliquam rutrum in augue quis auctor. Sed posuere ante a eros interdum, euismod varius lorem condimentum. Duis congue nulla ut vehicula euismod. Nulla facilisi. Curabitur scelerisque velit ut sagittis blandit. Pellentesque at velit felis. Nunc dui odio, iaculis a gravida eu, lobortis efficitur massa. Fusce suscipit sit amet quam eu rutrum. Nullam blandit pellentesque metus, ac consectetur purus facilisis et. Nullam sit amet arcu eu felis porttitor posuere eu elementum felis. Proin feugiat maximus quam sit amet aliquam. In ac sodales velit. Donec neque justo, suscipit ut lacus at, convallis porttitor ante. Aenean gravida urna quam, non finibus nibh ornare sodales. Nullam varius lacus vitae mauris mattis tincidunt. Aenean consectetur erat nec facilisis luctus. Pellentesque elementum accumsan velit, a fringilla nisi tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ex libero, fringilla et erat non, tincidunt bibendum velit. Pellentesque blandit auctor iaculis. Etiam nibh tellus, pellentesque vitae enim in, consectetur varius magna. Cras at ultrices ligula. Maecenas in semper nunc, a dignissim nunc.'
                    ]
                },
                {
                    titulo:'¿Hacia dónde apunto el futuro de la comunicación',
                    parrafos:[
                        'In nulla urna, tempor ut rutrum vel, hendrerit ac nibh. Phasellus lobortis efficitur urna tristique elementum.',
                        ' Suspendisse justo diam, mollis a elementum euismod, elementum eget tellus. Nulla ultricies turpis sit amet lacus scelerisque volutpat. Maecenas lacinia efficitur ligula, a semper turpis placerat nec.',
                        ' Cras sit amet pulvinar est, eget ultricies felis. Sed blandit sem in quam pellentesque, eget fermentum nibh feugiat. In blandit purus id cursus lobortis. Aliquam rutrum in augue quis auctor. Sed posuere ante a eros interdum, euismod varius lorem condimentum. Duis congue nulla ut vehicula euismod. Nulla facilisi. Curabitur scelerisque velit ut sagittis blandit. Pellentesque at velit felis. Nunc dui odio, iaculis a gravida eu, lobortis efficitur massa. Fusce suscipit sit amet quam eu rutrum. Nullam blandit pellentesque metus, ac consectetur purus facilisis et. Nullam sit amet arcu eu felis porttitor posuere eu elementum felis. Proin feugiat maximus quam sit amet aliquam. In ac sodales velit. Donec neque justo, suscipit ut lacus at, convallis porttitor ante. Aenean gravida urna quam, non finibus nibh ornare sodales. Nullam varius lacus vitae mauris mattis tincidunt. Aenean consectetur erat nec facilisis luctus. Pellentesque elementum accumsan velit, a fringilla nisi tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ex libero, fringilla et erat non, tincidunt bibendum velit. Pellentesque blandit auctor iaculis. Etiam nibh tellus, pellentesque vitae enim in, consectetur varius magna. Cras at ultrices ligula. Maecenas in semper nunc, a dignissim nunc.'
                    ]
                },
            ],
            aside:[
                {
                    titulo:'Cotiza tu sitio Web',
                    info:'Cras egestas a est a ornare. Suspendisse magna quam, finibus vestibulum lectus ut, suscipit tempor felis. In lacinia erat vel justo luctus, at laoreet turpis porttitor.',
                    boton:'Cotizar'

                },
                {
                    titulo:'Dale un vistazo a nuestros trabajos',
                    info:'Cras egestas a est a ornare. Suspendisse magna quam, finibus vestibulum lectus ut, suscipit tempor felis. In lacinia erat vel justo luctus, at laoreet turpis porttitor.',
                    boton:'Ver'

                },
                {
                    titulo:'Cotiza tu menú virtual',
                    info:'Cras egestas a est a ornare. Suspendisse magna quam, finibus vestibulum lectus ut, suscipit tempor felis. In lacinia erat vel justo luctus, at laoreet turpis porttitor.',
                    boton:'Cotizar'

                },
                {
                    titulo:'Llamanos',
                    info:'Cras egestas a est a ornare. Suspendisse magna quam, finibus vestibulum lectus ut, suscipit tempor felis. In lacinia erat vel justo luctus, at laoreet turpis porttitor.',
                    boton:'Contactar'

                },
            ]

                
        }
    }
}
</script>

<style scoped>
p,h1,h2{
    color:var(--azulH3);
}
h2{
    font-weight: normal;
    font-size:2rem;
}
h1{
    text-align:left;
    margin-left:2rem;
    font-weight: normal;
    font-size:3rem;
    text-transform: uppercase;
}
p{
    text-align:left;
    margin:2rem .3rem;
}

main{
    display: flex;
}

aside{
    display:none;
}
.margin-top{
    padding-top:2rem;
}

article.nota{
    margin:2rem auto;
    height: auto;
    padding:2rem ;
    background-color: var(--mascaraBlanca);
}

.ocultar{
    display:none;
}

div.aside{
    margin:0 auto;
    margin-top:5rem;
    border-top:var(--azul1) solid 10px;
    border-bottom: var(--azul1) solid 20px;
    height:auto;
}
div.aside h3{
    margin:0 .5rem;
    width:28vw;
}
button.boton-aside{
    width: 90%;
    background-color: var(--mascaraBlanca);
    height:6vh;
    color:var(--azulH3);
    border-radius: 10px;
    font-weight: bold;
    text-transform:uppercase;
    margin-bottom:2rem;
    transition:all .3s;
}

button.boton-aside:hover{
    color:var(--azul1);
    background-color: transparent;
}

div.aside p{
    color:var(--azul1);
    width:20vw;
    margin:2rem auto;
}

@media (min-width: 545px){
    aside{
        display:inline;
        margin:auto;
        background-image: linear-gradient(to top, var(--negro),var(--azulH3));
        margin: 1rem;
        height: fit-content;
    }


    div.articulo{
        width:70%;
    }
}
</style>