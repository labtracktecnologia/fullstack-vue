import axios from 'axios'

export default class ClienteService {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3000'
    })
  }

  findAll(pesquisa) {
    return this.http.get(`/clientes`, { params: { pesquisa: pesquisa } })
      .then(function(response) {
        return response.data;
      });
  }

  findById(id) {
    return this.http.get(`/clientes/${id}`)
      .then(function(response) {
        return response.data;
      });
  }

  insert(registro) {
    return this.http.post('/clientes', registro).then(function(response) {
      return response.data;
    });
  }

  update(registro) {
    return this.http.put(`/clientes/${registro._id}`, registro)
      .then(function(response) {
        return response.data;
      });
  }

  remove(id) {
    return this.http.delete(`/clientes/${id}`).then(function(response) {
      return response.data;
    });
  }
}
