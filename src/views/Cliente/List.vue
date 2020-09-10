<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline" @submit.prevent="load()">
        <input
          v-model="filterValue"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Buscar
        </button>
      </form>
      <router-link class="btn btn-outline-info" to="new">Novo registro</router-link>
    </nav>
    <b-table striped show-empty empty-text="Sem registros para listar" :items="records" :fields="cols">
      <template v-slot:cell(actions)="{ item }">
        <router-link class="btn btn-sm btn-success" :to="item._id">
          Editar
        </router-link>
        <button @click="excluir(item._id)" class="btn btn-sm btn-danger" type="button">
          Excluir
        </button>
      </template>
    </b-table>
  </div>
</template>
<script>
import ClienteService from '@/services/cliente'

export default {
  data () {
    return {
      filterValue: '',
      cols: [
        { key: 'documento', label: 'Documento' },
        { key: 'nome', label: 'Nome do cliente' },
        { key: 'telefone', label: 'Telefone' },
        { key: 'email', label: 'E-mail' },
        { key: 'actions', label: ' ', tdClass: 'text-right' }
      ],
      records: []
    }
  },
  computed: {
    service () {
      return new ClienteService()
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      this.records = await this.service.findAll(this.filterValue)
    }
  }
}
</script>
