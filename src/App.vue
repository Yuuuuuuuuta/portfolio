<template>
  <v-app style="height: 100vh ; width: 100vw">
    <!-- <div id="app" style="height: 100vh ; width: 100vw"> -->
      <myHeader></myHeader>
      <div id="main-contents">
        <router-view/>
      </div>
      <myFooter></myFooter>
    <!-- </div> -->
  </v-app>
</template>
<script>
import myHeader from '@/components/myHeader'
import myFooter from '@/components/myFooter'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
myHeader {
  position: fixed;
  bottom: 0;
}
#main-contents {
  overflow: auto;
}
myFooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
}
</style>
