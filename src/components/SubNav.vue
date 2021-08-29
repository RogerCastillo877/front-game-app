<template>
  <div class="wraper__subNav">
    <a href="#">Inicio</a>
    <a href="#">Playstation</a>
    <a href="#">Xbox</a>
    <a href="#">Nintendo</a>
    <a href="#">Acesorios</a>
    <a class="carrito" href="#">$0 <i class="fas fa-shopping-cart"></i></a>
  </div>
</template>

<script>
export default {
  name: 'SubNav'
}
</script>

<style>
.wraper__subNav {
  width: 100%;
  background:var(--medium-blue);
  height: 45px;
  padding: 0 10%;
  display: flex;
}
.wraper__subNav a {
  color: var(--secundary-color);
  margin: auto;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
}
.carrito {
  background: var(--heavy-blue);
  padding: 5px 10px;
  border-radius: 20px;
}
.carrito:hover {
  background: #494949;
}
</style>