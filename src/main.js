import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
  //uri: 'https://localhost:8080/', //  Cambiar por la API propia de Heroku
  uri: 'https://ms-usuarios-gameload.herokuapp.com',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "Authorization": localStorage.getItem("access_token") || ""
    }
  }
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient
})

createApp(App).use(router).use(apolloProvider).mount('#app')