import Vue from "vue";
import Vuex from "vuex";
import { Count } from "./Count";
import { Stu } from "./Stu";
import { Stu2 } from "./Stu2";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        Count,
        Stu,
        Stu2
    }
})