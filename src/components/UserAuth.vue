<template>
    <div class="wrapper__login">

        <div class="contain content1">

            <div class="cabecero">
                <h2>{{ msg }}</h2>
                <p>Mejorar tu experiencia de compra y te dara acceso a la mejor opción del mercado.</p>
            </div>

			<form class="form" v-on:submit.prevent="processAuthUser">
				<fieldset>
					<div class="col">
						<label>USUARIO <span class="tooltip">?</span></label>
						<input type="text" id="usuario"  v-model="user_in.username" placeholder="Username" required />

						<label>CONTRASEÑA <span class="tooltip">?</span></label>
						<input type="password" id="contraseña"  v-model="user_in.password" placeholder="Password" required />
					</div>
				</fieldset>

                <Button title="Iniciar Sesión" class="regular" type="submit"/>
                        
                <p>¿Olvidaste tu contraseña?</p>
                <hr/>
                <Button title="Crear cuenta nueva" class="optional"/>
			</form>
		</div>
	</div>
</template>
 
<script>
import Button from './Button.vue'
import gql from 'graphql-tag'
import jwt_decode from "jwt-decode"

export default {
    name: "UserAuth",
    components: { Button },

    data: function(){
        return {
            msg: 'Ingresar',
            user_in: {
                username:"",
                password:""
            }
        }
    },
    methods: {
        processAuthUser: async function(){
            await this.$apollo.mutate({
                mutation: gql`
                    mutation ($authenticateCredentials: CredentialsInput!) {
                        authenticate(credentials: $authenticateCredentials) {
                            refresh
                            access
                        }
                    }`,
                variables: {
                    authenticateCredentials: this.user_in
                }

            }).then((result) => {

                let data = result.data.authenticate
                data.user_id = jwt_decode(data.access).user_id.toString().padStart(3, "0")

                this.$emit('log-in', data, this.user_in.username)

            }).catch((error) => {
                alert("El usuario y/o contraseña son incorrectos")
            });
        }
    }
}
</script>

<style scope>
    .wrapper__login {
        align-items:center;
        background: var(--secundary-color);
        display: flex;
        flex-flow:column;
        justify-content:center;
        min-height: 100%;
        width: 100%;
        color: var(--primary-color);
    }
    .content1 {
        display: flex;
        flex-flow:column;
        padding-bottom: 100px;
        text-align: center;
        width: 430px;
    }
    .cabecero {
        display: block;
        margin-left: 20px;
        margin-right: auto;
        padding: 30px;
    }
    .cabecero h2 {
        font-size: 2em;
        font-weight: 700;
        font-family: var(--ff-secondary);
        letter-spacing: var(--spacing);
    }
    .cabecero p {
        float: left;
        width: 96%;
        padding: 16px 0;
    }
    .form {
        margin:0 auto;
        padding-bottom: 30px;
        text-align: center;
        width: 96%;
    }
    .col {
        width: 90%;   
    }
    .form label {
        color: var(--primary-color);
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
        text-transform: uppercase;
    }
    .form .tooltip {
        background: var(--primary-color);
        border-radius: 50%;
        color: var(--secundary-color);
        display: inline-block;
        height: 16px; width: 16px;
        line-height: 18px;
        margin-bottom: 3px;
        text-align: center;
        vertical-align: middle;
    }
    .form input[type="text"], .form input[type="password"], .form input[type="email"],form select {
        background: #f1f1f1;
        border: 0;
        display: block;
        height: 35px;
        margin-bottom: 15px;
        padding: 5px;
        width: 100%;
    }
    .form p {
        color: var(--primary-color);
        display: inline-block;
        font-size: 14px;
        margin-bottom: 30px;
        margin-top: 16px;
        width: 90%;
    }
    
    hr {
        margin: -15px 0 20px 0;
    }

    @media (max-width: 370px){
        .cabecero p { font-size: 16px;}
        .content1 { width: 350px}
        .form input[type="text"].small { width: 28.5%;}
        .form label { font-size: 13px;}
    }
</style>