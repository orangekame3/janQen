<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer" dark color="#8E2DE2">
    </v-navigation-drawer>
    <v-app-bar app clippedLeft flat dark color="#8E2DE2">
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>janQen</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined  href="https://github.com/orangekame3/janqen">GitHub</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
            <v-card>
          <v-card-title>ようこそjanQenへ</v-card-title>
          <v-card-text>
            janQenは量子コンピュータとジャンケンするサービスです。<br>
            「グー」「チョキ」「パー」のボタンを押してください。<br>
            すぐにゲームをはじめることができます。<br>
            janQenの仕組みについて知りたい方は<a href="https://github.com/orangekame3/janqen">こちら</a>
          </v-card-text>
      </v-card>
      </v-container>
    <v-container>
     <v-container> 
       <v-row>
         <v-col>
         <p>あなた</p>
         </v-col>
         <v-col>
         <p>量子コンピューター</p>
         </v-col>
       </v-row>
     <v-container>  
    <v-row>
    <v-col >
      <v-card class="d-flex child-flex" height="100%">
    <img v-if="your_input==null" v-bind:src="your_fig">
    <img v-if="your_input==0" v-bind:src="gu_fig">
    <img v-if="your_input==1" v-bind:src="choki_fig">
    <img v-if="your_input==2" v-bind:src="pa_fig">
      </v-card>
    </v-col>
    <v-col>
      <v-card  class="d-flex child-flex" height="100%">
    <img v-if="q_output==null" v-bind:src="q_fig" >
    <img v-if="q_output==0" v-bind:src="gu_fig">
    <img v-if="q_output==1" v-bind:src="choki_fig">
    <img v-if="q_output==2" v-bind:src="pa_fig">
      </v-card>
    </v-col>
    </v-row>
     </v-container>
     </v-container>
      <v-card
      class="d-flex justify-space-between mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-btn
      height="70px" width="120"
      :loading="loading1"
      :disabled="loading1"
      color="#8E2DE2"
      class="ma-2 white--text"
      @click="gu"
      >
      グー
      </v-btn>
      <v-btn
      height="70px" width="120"
      :loading="loading2"
      :disabled="loading2"
      color="#8E2DE2"
      class="ma-2 white--text"
      @click="tyoki"
      >
      チョキ
      </v-btn>
      <v-btn
      height="70px" width="120"
      :loading="loading3"
      :disabled="loading3"
      color="#8E2DE2"
      class="ma-2 white--text"
      @click="pa"
      >
      パー
      </v-btn>    
      </v-card>  
      <v-row align="start" justify="center">
        <v-col cols="12">
        <v-card
          class="mx-auto"
        >
          <v-toolbar
            color="#8E2DE2"
            dark
          >
            <v-toolbar-title>Result</v-toolbar-title>
          </v-toolbar>
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-list-item
                :key="item.title"
              >
                <v-list-item-content>
                  <v-list-item-title >この勝負は{{ item.result }}です。</v-list-item-title>
                  <v-list-item-subtitle> あなたは{{ item.input }}を </v-list-item-subtitle>
                  <v-list-item-subtitle> 量子コンピューターは{{ item.output }}を出しました。</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider
                :key="index"
                :inset="item.inset"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-content>
    <v-footer app dark color="#8E2DE2">
      @orangekame3
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data () {
    return {
      // 入力データ
      InputText: '',
      TextLength: null,
      items: [],
      loader: null,
      loading1:false,
      loading2:false,
      loading3:false,
      qout:0,
      gu_fig:"static/janken_gu.png",
      choki_fig:"static/janken_choki.png",
      pa_fig:"static/janken_pa.png",
      your_fig:"static/yaruki_moeru_man.png",
      q_fig:"static/computer_ryoushi_quantum.png",
      load_fig:"static/computer_bar5_load.png",
      your_input:null,
      q_output:null,
      drawer: null
    }
  },

  methods: {
    gu:function () {
      var g = {input:0}
      this.your_input = 0
      this.q_output = null
      this.q_fig = this.load_fig
      axios
        .post('/api/post', g)
        .then(response => {
          this.items.push(response.data)
          this.q_output = response.data.output_num
        })
    },
    tyoki:function () {
      var t = {input:1}
      this.your_input = 1
      this.q_output = null
      this.q_fig = this.load_fig
      axios
        .post('/api/post', t)
        .then(response => {
          this.items.push(response.data)
          this.q_output = response.data.output_num
        })
    },
    pa:function () {
      var p = {input:2}
      this.your_input = 2
      this.q_output = null
      this.q_fig = this.load_fig
      axios
        .post('/api/post', p)
        .then(response => {
          this.items.push(response.data)
          this.q_output = response.data.output_num
        })
    },
    SendData: function () {
      var data = this.InputText

      axios
        .post('/api/post', data)
        .then(response => {
          this.items.push(response.data)
        })
        // .catch(err => {
        //   alert('APIサーバと接続できません')
        //   err = null
        // })
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>