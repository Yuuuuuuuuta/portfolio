<template>
  <v-footer dark>
    <v-card class="flex">
      <v-card-title>
        <strong></strong>
        <v-spacer></v-spacer>
        <v-btn v-for="item in items" :key="item.icon" :href="item.link">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
      items: [
        {icon: 'fab fa-twitter', link: ''},
        {icon: 'fab fa-instagram', link: ''},
        {icon: 'fab fa-facebook', link: ''}
      ]
    }
  }
}
</script>

<style>
v-footer {
  height: 10vh;
  width: 100vw;
}
</style>
