import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue'
// vue-bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
export default {
    install(Vue, options) {
      Vue.use(BootstrapVue);
      Vue.use(IconsPlugin);
        Vue.prototype.$CONST = {
            COMMON: {
                GENDER: {
                    1: "Man",
                    2: "Woman",
                    3: "Other"
                },
            },
        };
    },
};

// Vue.use(ConstPlugin);
