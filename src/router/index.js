import { createRouter, createWebHistory, } from 'vue-router'
import NosotrosView from '../views/NosotrosView.vue'
import ContactoView from '../views/ContactoView.vue'
import NuestrosProductosView from '../views/NuestrosProductosView.vue'
import InicioSesionView from '../views/InicioSesionView.vue'
import RegistroView from '../views/RegistroView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: NosotrosView,
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: ContactoView,
  },
  {
    path: '/NuestrosProductos',
    name: 'NuestrosProductos',
    component: NuestrosProductosView,
  },
  {
    path: '/InicioSesion',
    name: 'InicioSesion',
    component: InicioSesionView,
  },  
  {
    path: '/Registro',
    name: 'Registro',
    component: RegistroView,
  }
]

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //eslint-disable-next-line
  scrollBehavior(to,from,savedPosition) {
    return { top: 0 }
  }
})

export default router
