export const Count={
    state: {
        count:0
    },
    getters: {
        getCounter: (state) => {
            return state.count
        }
    },
    mutations: {
        add: (state, payload) => {
            state.count = state.count + payload
        },
        sub: (state, payload) => {
            state.count = state.count - payload
        }
    },
    actions: {
        add: (context, payload) => {
            context.commit('add', payload)
        },
        sub: (context, payload) => {
            context.commit("sub", payload)
        }
    }
}