<template>
  <div class="note-detail">
    <div class="note-img">
      <img :src="data.head_img" alt="">
    </div>
    <div class="note-content">
      <div class="tab">
        <span class="comm note-type">{{data.note_type}}</span>
        <span class="comm nickname">{{data.nickname}}</span>
      </div>
      <p class="title">{{data.title}}</p>
      <div class="content" v-html="data.note_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  created () {
    this.initDetail()
  },
  methods: {
    initDetail () {
      let id = this.$route.query.id
      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'users/findDetailById',
        data: {
          id: id
        }
      }).then(res => {
        this.data = res.data.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .note-detail{
        width: 100%;
        .note-img{
            width: 100%;
            height:5.146667rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .note-content{
            margin-top: .666667rem;
            padding: 0 .666667rem;
            .tab{
                display: flex;
                justify-content: space-between;
                .comm{
                    color: rgba(16, 16, 16, 0.7);
                    font-size: .48rem;
                    text-align: center;
                    font-family: Arial;
                    position: relative;
                    padding-bottom:4px; 
                    border-bottom: 3px solid #E51C23;                    
                }
                .nickname{
                    &::before{
                        content: "By";
                        position: absolute;
                        left: -25px;
                        opacity: 0.5;
                        color: rgba(16, 16, 16, 1);
                        font-size: .426667rem;
                        font-family: Arial;
                    }
                }    
            }
            .title{
                margin: .533333rem 0 ;
                line-height: 1.3;
                color: rgba(16, 16, 16, 1);
                font-size: .8rem;
                text-align: left;
                font-family: Arial;
  
            }
            .content{        
                padding-bottom: 20px;        
                line-height:1.5;
                opacity: 0.6;
                color: rgba(16, 16, 16, 1);
                font-size: .373333rem;
                text-align: left;
                font-family: Arial; 
            }
        }
    }
</style>