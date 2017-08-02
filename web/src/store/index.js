import Vue from 'vue'
import Vuex from 'vuex'

// 根级state、actions、getters、mutations
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
// 合作伙伴信息
import partner from './modules/partner';
// 权限管理
import permission from './modules/permission';
// 产品管理
import product from './modules/product';
// 采购管理
import purchase from './modules/purchase';
// 销售管理
import sale from './modules/sale';
// 库存管理
import stock from './modules/stock'
// 用户管理
import user from './modules/user';



Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        partner, //合作伙伴
        permission, //权限
        product, //产品
        purchase, //采购
        sale, //销售
        stock, //库存
        user, //用户
    },
    strict: debug,
})