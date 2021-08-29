<template>
  <div>
    <section class="products">
      <Cards v-for="product in products" 
      :key="product.title" 
      :product="product"/> 
    </section>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'

export default {
  name: 'Inicial',
  components: { Cards },
  data(){
    return{
    products: [
        {
          title: 'Batman',
          price: '$20.000 COP',
          category: 'Juegos',
          src: '../assets/logo.png'
        },
        {
          title: 'Fifa21',
          price: '$20.000 COP',
          category: 'Juegos',
          src: require('./assets/products/fifa21.jpeg')
        },
        {
          title: 'Marvel spider man',
          price: '$20.000 COP',
          category: 'Juegos',
          src: require('./assets/products/marvel-s-spider-man.jpg')
        },
        {
          title: 'GTA 5',
          price: '$20.000 COP',
          category: 'Juegos',
          src: require('./assets/products/marvel-s-spider-man.jpg')
        }
      ]
    }
  }
}
</script>

<style>

</style>