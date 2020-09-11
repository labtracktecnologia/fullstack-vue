# fullstack-vue

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Como o projeto chegou até aqui
### Criando o projeto
```
vue create fullstack-vue
```
### Instalando as dependências
```
npm i axios bootstrap-vue bootstrap
npm i https://github.com/AT-UI/feather-font.git
```
### Importação dos estilos no App.vue
```
  @import '~bootstrap/scss/bootstrap';
  @import '~bootstrap-vue/src/index.scss';
  @import "~feather-font/src/css/iconfont.css";

  @import "assets/dashboard.css";
  @import "assets/login.css";
```
### Importação dos componentes no main.js
```
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
```
### Dicas gerais para migração
- Veja os componentes que você pode substituir por bibliotecas já bem conceituadas que atenderão sua necessidade, caso necessário, crie o seu componente em cima desse já existente para customizá-lo as suas necessidades
- Reescreva os componentes mais básicos antes de ir para os mais complexos
- Algumas tags são bem parecidas entre VueJS e AngularJS
1. ng-model -> v-model
2. ng-click -> @click
3. ng-submit -> @submit
- A utilização do vue-router em comparação com o ui-router é tranquila, porém observe:
1. a tag ```<a>``` não deve ser usada, no lugar dela utilize a ```<router-link>```
2. no lugar da ```<ui-view>``` utilize a tag ```<router-view>```
3. o sistema em árvore é construído no vetor do vue-router pela propriedade "children"
4. não deixe uma rota vazia sem a propriedade "redirect"