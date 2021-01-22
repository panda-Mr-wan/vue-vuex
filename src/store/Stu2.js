import axios from "axios";
export const Stu2 = {
    state: {
        stu2:[],
        show:false
    },
    mutations: {
        fetch2: (state,payload) => {
            state.stu2 =payload
        },
        loading: (state, payload) => {
            state.show = payload
        }
    },
    actions: {
        fetch2: (context) => {
            context.commit("loading",true);
            axios.get("/data7")
            .then(res => {
                context.commit("fetch2", res.data.data);
                context.commit("loading",false);
            })
        } 
    }
}