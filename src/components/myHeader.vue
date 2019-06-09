<template>
  <v-toolbar dark>
    <v-layout justify-center>
      <v-toolbar-items>
        <router-link to="/" class="link">
          <v-btn flat style="height: 5vh">
          Top
          </v-btn>
        </router-link>
        <router-link v-for="item in items" :key="item.to" :to="item.to" class="link">
          <v-btn flat style="height: 5vh">
          {{ item.to }}
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return{
      items: [
      {to: 'Profile'},
      {to: 'Skill'},
      {to: 'Works'},
      {to: 'Contact'}
      ]
    }
  }
}
</script>

<style>
.link {
  text-decoration: none;
}
</style>
