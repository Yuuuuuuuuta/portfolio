<template class="Skill">
  <v-parallax dark height="824">
    <div class="title">
      <h1 style="color:black">Skill</h1>
    </div>
    <v-layout align-center justify-center>
      
      <!-- 表示させる内容ををDialogコンポーネントへ渡す -->
        <skillCard :frontEndData="frontEnd"></skillCard>
    </v-layout>
  </v-parallax>
</template>

<script>
import skillCard from '@/cards/skillCard'

export default {
  name: 'Skill',
  components: {
    skillCard
  },
  data () {
    return {
      frontEnd: {
        title: 'フロントエンド',
        content: '直近の案件ではVue.jsで開発を行なっていました',
        languages: [
          {langName: 'JavaScript', level: '2'},
          {langName: 'Vue.js', level: '3'}
        ]
      },
      backEnd: {
        title: 'バックエンド',
        content: '直近の案件ではJavaで開発を行なっていました',
        languages: [
          {langName: 'Java', level: '3'},
          {langName: 'Python', level: '1'}
        ]
      }
    }
  }
}
</script>

<style>
.title {
  text-align: center;
}
.Skill {
  height: 85vh;
  width: 100vw;
}
</style>
