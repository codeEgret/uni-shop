export default {
  // 为当前模块开启命名空间
  namespaced: true,
  // 模块的 state 数据
  state: () => ({
    // 购物车的数组，用来存储购物车中每个商品的信息对象
    // 每个商品的信息对象，都包含如下 6 个属性：
    // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
    cart: [],
  }),
  // 模块的 mutations 方法
  mutations: {
    // 加入到购物车
    addToCart(state, goods) {
      const result = state.cart.find(x => x.goods_id === goods.goods_id)
      if (!result) {
        state.cart.push(goods)
      } else {
        result.goods_count++
      }
    }
  },
  // 模块的 getters 属性
  getters: {
    total(state) {
      let count = 0
      state.cart.forEach(goods => count += goods.goods_count)
      return count
    }
  },
}