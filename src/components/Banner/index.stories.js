import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";
import Banner from "./index.js";


storiesOf("Banner", module).add("default", () => ({
  // components: { Banner },
  // template: '<welcome :showApp="action" />',
  // methods: { action: linkTo("Button") },
  render() {
    return Banner;
  }
}));