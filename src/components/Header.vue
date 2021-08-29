<template>
  <div class="heading_wraper">
    <figure>
      <img src="../assets/Logos/logoWhite.png" alt="logo">
    </figure>
    <h1>GameLoad</h1>
    <Nav />
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>

<style scoped>
  .heading_wraper {
    align-items: center;
    background: var(--heavy-blue);
    color: var(--secundary-color);
    display: flex;
    height: 65px;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
  }
  h1 {
    font-family: var(--ff-secondary);
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
  }
  figure img {
    margin: 0 20px;
    height: 40px;
    vertical-align: bottom;
  }
</style>