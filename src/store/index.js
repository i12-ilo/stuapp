import Vue from 'vue'
import Vuex from 'vuex';
import api from "../util/getData";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    OneInfo: [],
    modalShow: false,
    stuList:  [],
    totalPage :0,
  },
  mutations: {
    find(state, id) {
      api.findOneInfo(id).then(res => {
        state.OneInfo = res.data.data.searchList;
      });
    },
    changeShow(state) {
      state.modalShow = !state.modalShow;
    },
    changeStuList(state, newArr) {
      state.stuList = newArr;
    },
    getTotal(state,total){
      state.totalPage=total;
    }
  },
  actions: {
    findOne(context, id) {
      context.commit("find", id)
    },
    changeM(context) {
      context.commit("changeShow");
    },
    changeSl(context, newArr) {
      context.commit("changeStuList", newArr);
    },
    getTotalPage(context){
      // context.commit("getTotal",Math.ceil(res.data.data.length/10))
     api.getAllStudent().then(res=>context.commit("getTotal",Math.ceil(res.data.data.length/10)))
    }
  },
  modules: {
  }
})
