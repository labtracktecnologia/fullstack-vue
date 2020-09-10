<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li v-for="(item, idx) in itens" :key="idx" class="nav-item">
        <router-link class="nav-link active" :to="item.state">
          <span class="feather" :class="item.icon"></span>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    itens: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>
