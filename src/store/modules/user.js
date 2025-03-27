export default {
    namespaced: true,
    state: () => {
        return {
            userInfo: {
                token:'123',
                username:'admin',
            }
        }
    },
    mutations: {
        updateName(state, name) {
            state.userInfo.username = name
        }
    },
    action:{
        updateNameAsync({commit},name){
            setTimeout(() => {
                commit('updateName',name)
            }, 1000);
        }
    },
    getters:{

    }
}