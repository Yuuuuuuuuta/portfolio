<template class="Skill">
  <!-- <v-parallax dark height="824"> -->
    <div style="height: 80vh">
    <div class="title">
      <h1 style="color:black">Skill</h1>
    </div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="skill in skillList" :key="skill.skillId" xs6>
          <skillCard :skillData = "skill" ></skillCard>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
  <!-- </v-parallax> -->
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
      skillList: [
      {
        skillId: 1,
        title: 'フロントエンド',
        content: '直近の案件ではVue.jsで業務アプリのフロント部分の開発を行なっていました',
        mainSkill: [
          {skillName: 'JavaScript', level: '2'},
          {skillName: 'Vue.js', level: '3'}
        ]
      },
      {
        skillId: 2,
        title: 'バックエンド',
        content: '直近の案件ではJavaを使ってAPIの開発を行なっていました',
        mainSkill: [
          {skillName: 'Java', level: '3'},
          {skillName: 'Python', level: '1'}
        ]
      },
      {
        skillId: 3,
        title: 'インフラ',
        content: '業務でのネットワーク機器の設定・構築の経験があります。',
        mainSkill: [
          {skillName: 'ルータ(Cisco,Yamaha)', level: '1'},
          {skillName: 'FireWall', level: '1'},
          {skillName: 'Proxyサーバ', level: '1'},
          {skillName: '等', level: '1'}
        ]
      },
      {
        skillId: 4,
        title: 'クラウド',
        content: '現在はクラウドサービスとしてAWSとGCP、コンテナ技術としてDockerを学習中です。',
        mainSkill: [
          {skillName: 'AWS', level: '1'},
          {skillName: 'GCP', level: '1'},
          {skillName: 'Docker', level: '1'}
        ]
      },
      {
        skillId: 5,
        title: 'その他',
        content: 'SIerとして3年の業務経験があります。要件定義から提案、運用、保守まで一通りの経験があります。お客様との折衝や海外の担当者と連携したサービスのグローバル展開の経験があります。',
        mainSkill: [
          {skillName: 'Git', level: '1'},
          {skillName: 'Redmine', level: '1'},
          {skillName: '各種Office製品', level: '1'}
        ]
      },
      {
        skillId: 6,
        title: '所有資格',
        content: '直近3年以内に取得した資格は以下となります。',
        mainSkill: [
          {skillName: '応用情報技術者', level: '1'},
          {skillName: 'セキュリティスペシャリスト', level: '1'},
          {skillName: 'Oracle認定 Java Programmer Silver SE 8', level: '1'},
          {skillName: 'ORACLE MASTER Bronze 12c(SQL,DBA) ', level: '1'},
          {skillName: 'TOEIC600点', level: '1'}
        ]
      }
      ]
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
