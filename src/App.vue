<template>
  <v-app>
    <div id="app">
      <myHeader></myHeader>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import myHeader from '@/components/myHeader'
export default {
  name: 'App',
  components: {
    myHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
