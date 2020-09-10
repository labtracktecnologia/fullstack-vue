<template>
  <div class="container-fluid">
    <div class="row justify-content-sm-center">
      <div class="col-sm-8">
        <h2 class="title">{{ $route.name }}</h2>
        <form>
          <b-form-group label="Documento"
            description="Digite um CPF ou CNPJ válido">
            <b-form-input v-model="record.documento" trim></b-form-input>
          </b-form-group>
          <b-form-group label="Nome">
            <b-form-input v-model="record.nome" trim></b-form-input>
          </b-form-group>
          <b-form-group label="E-mail">
            <b-form-input v-model="record.email" trim></b-form-input>
          </b-form-group>
          <b-form-group label="Telefone">
            <b-form-input v-model="record.telefone" trim></b-form-input>
          </b-form-group>
          <button @click="save()" type="button" class="btn btn-primary">
            <span v-show="!$route.params.id">Salvar Registro</span>
            <span v-show="$route.params.id">Atualizar Registro</span>
          </button>
          <b-button @click="$router.go(-1)" variant="danger" class="ml-2">Cancelar</b-button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ClienteService from '@/services/cliente'

export default {
  name: 'ClienteForm',
  data () {
    return {
      record: {}
    }
  },
  async mounted () {
    if (this.$route.params.id) {
      this.record = await this.service.findById(this.$route.params.id)
    }
  },
  computed: {
    service () {
      return new ClienteService()
    }
  },
  methods: {
    async save () {
      if (this.$route.params.id) {
        await this.service.update(this.record)
      } else {
        await this.service.insert(this.record)
      }
      this.$router.go(-1)
    }
  }
}
</script>
