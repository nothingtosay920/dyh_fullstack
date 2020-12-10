export default {
  addNum({ commit, state }, id) {
    commit('REMEMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  }  
}