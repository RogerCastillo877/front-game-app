<template>
  <div id="Transacction" class="transacction">
    <div class="container_transacction">
      <h2>Realizar Transacción</h2>
    
      <form v-on:submit.prevent="processTransaccion">
        <input
          type="text"
          v-model="createTransacctionTransaction.userIdDestiny"
          placeholder="Id Usuario Destino"
        />
        <br />
        <input
          type="number"
          v-model="createTransacctionTransaction.value"
          placeholder="valor"
        />
        <br />
        <button type="submit">Realizar Transacción</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Transacction",

  data: function () {
    return {
      createTransacctionTransaction: {
        userIdOrigin: localStorage.getItem("user_id"),
        userIdDestiny: "",
        value: "",
      },
    };
  },

  methods: {
    processTransaccion: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($createTransacctionTransaction: TransacctionInput!) {
              createTransacction(transaction: $createTransacctionTransaction) {
                date
                id
                userIdDestiny
                userIdOrigin
                value
              }
            }
          `,
          variables: {
            createTransacctionTransaction: this.createTransacctionTransaction,
          },
        })
        .then((result) => {
          alert("Transacción Realizada de Manera Correcta, Revise Historial")
        })
        .catch((error) => {
          alert("Saldo Insuficiente o Destino Incorrecto");
        });
    },
  },
};
</script>