import { getCategoryList } from '@/api/index.js'
import { topCategory } from '@/utils/constants'
// 获取分类列表
export default {
    namespaced: true,
    state: () => {
        return {
            cateList: topCategory,//默认显示
        }
    },
    mutations: {
        setList(state, payload) {
            state.cateList = payload
        }
    },
    actions: {
        // 请求后台，加载分类数据
        async getAllCategory({ commit }) {
            try {
                // 发送请求，请求所有分类类别
                const res = await getCategoryList();
                console.log(res);
                if(res.code==='200'){
                    commit('setList',res.data.cateList)
                }
            } catch (error) {
                console.log(error);
            }
        },
    //     getters: {

    //     }
    }
}