import "vuetify/dist/vuetify.css";

import { configure } from "@storybook/vue";
import Vue from "vue";
// import Vuex from "vuex";
import Vuetify from "vuetify";
// import MyButton from "../src/stories/Button.vue";

// Vue.use(Vuex);
Vue.use(Vuetify);

// Vue.component("my-button", MyButton);
const req = require.context('../src', true, /\.stories\.js$/)

// function loadStories() {
//   require("../src/components");
// }
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
