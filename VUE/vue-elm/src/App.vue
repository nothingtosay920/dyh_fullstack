<template>
  <div class="app">
    <Header :seller="seller"></Header>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import {getSeller} from '@/api'
import qs from 'query-string'

export default {
  data () {
    return {
      seller: {
        id: qs.parse(localtion.search).id
      }
    }
  },
  components: {
    Header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang='stylus'>

</style>