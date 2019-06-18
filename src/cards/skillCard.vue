<template>
  <v-card hover>
    <v-card-title primary-title>
      {{ skillData.title }}
    </v-card-title>
    <v-card-text>{{ skillData.content }}</v-card-text>
    <v-card-text>主な技術</v-card-text>
    <v-list>
      <v-list-tile v-for="skill in skillData.mainSkill" :key="skill.skillName">
        {{ skill.skillName }}
      </v-list-tile>
    </v-list>
    <!-- <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card>
        <v-card-title>{{ skillData.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text height="300px">{{ skillData.content }}</v-card-text>
      </v-card>
    </v-dialog> -->
  </v-card>
</template>

<script>
export default {
  name: 'skillCard',
  props: [ 'skillData' ],
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>

</style>
