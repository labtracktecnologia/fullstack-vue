<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Lavanderia</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link class="nav-link" to="/login">Sair</router-link>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <Menu :itens="itens"></Menu>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view/>
        </main>
      </div>
    </div>

  </div>  
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Menu
  },
  data () {
    return {
      itens: [
        {
          state: "/dashboard",
          icon: "icon-home",
          name: "Dashboard"
        },
        {
          state: "/cliente",
          icon: "icon-users",
          name: "Clientes"
        },
        {
          state: "/item",
          icon: "icon-shopping-cart",
          name: "Itens"
        },
        {
          state: "/os",
          icon: "icon-file",
          name: "Ordens de Serviço"
        },
        {
          state: "/about",
          icon: "icon-award",
          name: "Sobre"
        }
      ]
    }
  }
}
</script>
