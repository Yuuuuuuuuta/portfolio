<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card hover>
        <v-card-title primary-title>
          <div>
            <h3>{{ frontEndData.title }}</h3>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'skillCard',
  props: [ 'frontEndData' ],
  data () {
    
  }
}
</script>

<style>

</style>
