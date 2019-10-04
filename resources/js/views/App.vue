<template>
    <v-app>
        <v-navigation-drawer app></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container>
                <router-link tag="li" to="/">Login</router-link>
                <router-link tag="li" to="/home">Home</router-link>

                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {}
</script>