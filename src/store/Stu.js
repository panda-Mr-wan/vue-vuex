import axios from "axios";
export const Stu = {
    state: {
        stu:[]
    },
    mutations: {
        fetch: (state, payload) => {
            state.stu = payload
        }
    },
    actions: {
        fetch: (context) => {
            axios.get("mock/data.json")
            .then(res => {
                context.commit("fetch", res.data.data);
            })
        }
    }
}