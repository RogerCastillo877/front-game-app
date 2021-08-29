<template>
  <div class="nav__menu">
    <a>¿Qienes Somos?</a>
    <a>Registrarse</a>
    <Button title="Iniciar Sesión" class="regular" v-on:click="init"/>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Nav',
  components: { Button },
  
  methods:{
    
    init: function(){
      this.$router.push({
        name: "user",
        params:{ username: localStorage.getItem("current_username") }
      })
    }
  }
}
</script>

<style>
.nav__menu {
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  height: 65px;
  padding: 0 50px;
}
.nav__menu a {
  color: var(--secundary-color);
  padding: 0 12px;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  font-size: var(--size);
}
</style>