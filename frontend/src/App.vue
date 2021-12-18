<template>
  <v-app>
    <!-- <Snow/> -->
    <v-navigation-drawer app clipped v-model="drawer" dark color="#146B3A">
    </v-navigation-drawer>
    <v-app-bar app clippedLeft flat dark color="#146B3A">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>janQen</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined href="https://github.com/orangekame3/janqen" 
        >GitHub</v-btn
      >
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-card class="mx-auto my-12" width="90%">
          <v-col justify="center" align-content="center">
            <v-raw>
              <v-card-title class="text-sm-h4 font-weight-bold"
                >ようこそjanQenへ</v-card-title
              >
              <v-card-text class="text-sm-h5">
                janQenは量子コンピュータとジャンケンするサービスです。<br />
                「グー」「チョキ」「パー」のボタンを押してください。すぐにゲームをはじめることができます。<br />
                janQenの仕組みについては<a
                  href="https://github.com/orangekame3/janqen"
                  >こちら</a
                >の記事で解説してます。<br />
                量子コンピュータはあなたの入力が完了したら乱数計算をはじめます。出力結果は[Result]に表示されます。<br />
              </v-card-text>
            </v-raw>
            <v-raw class="mx-auto my-auto">
              <v-layout justify-center>
                <img v-bind:src="histogram" width="50%" />
              </v-layout>
            </v-raw>
          </v-col>
        </v-card>
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <v-layout justify-center>
              <v-card class="d-flex child-flex" width="70%" fluid>
                <img v-if="your_input == null" v-bind:src="your_fig" />
                <img v-if="your_input == 0" v-bind:src="gu_fig" />
                <img v-if="your_input == 1" v-bind:src="choki_fig" />
                <img v-if="your_input == 2" v-bind:src="pa_fig" />
              </v-card>
            </v-layout>
          </v-col>
          <v-col>
            <v-layout justify-center>
              <v-card class="d-flex child-flex" width="73%" fluid>
                <img v-if="q_output == null" v-bind:src="q_fig" />
                <img v-if="q_output == 0" v-bind:src="gu_fig" />
                <img v-if="q_output == 1" v-bind:src="choki_fig" />
                <img v-if="q_output == 2" v-bind:src="pa_fig" />
              </v-card>
            </v-layout>
          </v-col>
        </v-row>
        <v-container class="my-auto">
          <v-row>
            <v-col>
              <v-layout justify-center>
                <p class="text-sm-h5 font-weight-bold">あなた</p>
              </v-layout>
            </v-col>
            <v-col>
              <v-layout justify-center>
                <p class="text-sm-h5 font-weight-bold">量子コンピューター</p>
              </v-layout>
            </v-col>
          </v-row>
          <v-container> </v-container>
        </v-container>
        <v-layout justify-center>
          <v-card
            height="100"
            class="d-flex justify-space-between my-6"
            :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
            flat
            tile
            width="80%"
          >
            <v-btn
              height="80%"
              width="20%"
              :loading="loading1"
              :disabled="loading1"
              color="#BB2528"
              class="ma-2 white--text"
              @click="gu"
            >
              グー
            </v-btn>
            <v-btn
              height="80%"
              width="20%"
              :loading="loading2"
              :disabled="loading2"
              color="#BB2528"
              class="ma-2 white--text"
              @click="tyoki"
            >
              チョキ
            </v-btn>
            <v-btn
              height="80%"
              width="20%"
              :loading="loading3"
              :disabled="loading3"
              color="#BB2528"
              class="ma-2 white--text"
              @click="pa"
            >
              パー
            </v-btn>
          </v-card>
        </v-layout>
        <v-row align="start" justify="center">
          <v-col cols="12">
            <v-card class="mx-auto" width="80%">
              <v-toolbar color="#BB2528" dark>
                <v-toolbar-title>Result</v-toolbar-title>
              </v-toolbar>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <v-list-item-content>
                      <v-list-item-title
                        >この勝負は{{ item.result }}です。</v-list-item-title
                      >
                      <v-list-item-subtitle>
                        あなたは{{ item.input }}を
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        量子コンピューターは{{
                          item.output
                        }}を出しました。</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider :key="index" :inset="item.inset"></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app dark color="#146B3A"> @orangekame3 </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
// import Snowf from "./components/Snowf.vue";
//import Snow from 'vue-snowf';
export default {
  name: "App",
  //components: { Snow },
  data() {
    return {
      // 入力データ
      InputText: "",
      TextLength: null,
      items: [],
      loader: null,
      loading1: false,
      loading2: false,
      loading3: false,
      qout: 0,
      gu_fig: "static/janken_gu.png",
      choki_fig: "static/janken_choki.png",
      pa_fig: "static/janken_pa.png",
      your_fig: "static/yaruki_moeru_man.png",
      q_fig: "static/computer_ryoushi_quantum.png",
      load_fig: "static/computer_bar5_load.png",
      your_input: null,
      q_output: null,
      drawer: null,
      histogram: "static/result.png",
      janqen: "static/janQen.png",
    };
  },

  methods: {
    gu: function () {
      var g = { input: 0 };
      this.your_input = 0;
      this.q_output = null;
      this.q_fig = this.load_fig;
      this.histogram = "static/result.png";
      axios.post("/api/post", g).then((response) => {
        this.items.push(response.data);
        this.q_output = response.data.output_num;
        this.histogram = response.data.fig;
      });
    },
    tyoki: function () {
      var t = { input: 1 };
      this.your_input = 1;
      this.q_output = null;
      this.q_fig = this.load_fig;
      this.histogram = "static/result.png";
      axios.post("/api/post", t).then((response) => {
        this.items.push(response.data);
        this.q_output = response.data.output_num;
        this.histogram = response.data.fig;
      });
    },
    pa: function () {
      var p = { input: 2 };
      this.your_input = 2;
      this.q_output = null;
      this.q_fig = this.load_fig;
      this.histogram = "static/result.png";
      axios.post("/api/post", p).then((response) => {
        this.items.push(response.data);
        this.q_output = response.data.output_num;
        this.histogram = response.data.fig;
      });
    },
    SendData: function () {
      var data = this.InputText;

      axios.post("/api/post", data).then((response) => {
        this.items.push(response.data);
      });
      // .catch(err => {
      //   alert('APIサーバと接続できません')
      //   err = null
      // })
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>