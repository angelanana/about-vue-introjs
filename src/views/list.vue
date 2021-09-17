<template>
  <div class="list-page">
    <div class="container">
      <div class="btn-group">
          <button id="left" type="button" class="btn" @click="go_back" v-if="index">向右</button>
          <button id="right" type="button" class="btn" @click="go_more">向左</button>
          {{index}}
      </div>
      <div class="something">
        <div class="menu">
          <ul class="menu-ul"  :style="{'margin-left': oneWidth + 'px'}" >
            <li v-for="(item, index) in list" :key="item.id" :data-set="index" class="menu-li">
              <a class="menu-item">{{item.title}}</a>
              <ul class="dropdown" :data-key="`dropdown-${item.key}`" v-if="item.children && item.children.length > 0">
                <li v-for="child in item.children" :key="child.key">{{child.title}}</li>
                <div style="clear: both; display: inline-block;"></div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="div-content">
      <div class="div1" >
        <div class="div2" >1</div>
      </div>
    </div>

    <div class="out-container">
      <div class="in-container">
          <ul class="swiper-wrapper">
              <div class="swiper-slide">slide5</div>
              <div class="swiper-slide">slide6</div>
              <div class="swiper-slide">slide7</div>
              <div class="swiper-slide">slide8</div>
              <div style="clear: both;"></div>
          </ul>
          <div class="swiper-button swiper-button-next">左</div>
          <div class="swiper-button swiper-button-prev">右</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'Action112sasdsdasdsdsdsdsd3123',
          key: 1,
          children: [
            {
              title: 'index11',
              key: 2
            },
            {
              title: 'index12',
              key: 3
            },
            {
              title: 'index13',
              key: 4
            },
          ]
        },
        {
          title: 'Action21111',
          key: 2,
          children: [
            {
              title: 'index11',
              key: 2
            },
            {
              title: 'index12',
              key: 3
            },
            {
              title: 'index13',
              key: 4
            },
          ]
        },
        {
          title: 'Action33333',
          key: 3
        },
        {
          title: 'Action42222',
          key: 4
        },
        {
          title: 'Action521',
          key: 5
        },
        {
          title: 'Action621',
          key: 6
        },
        {
          title: 'Action721',
          key: 7
        },
        {
          title: 'Action821',
          key: 8
        },
      ],
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      index: 0,
      oneWidth: 0,  //移动的宽度
      scrollSum: 0,  //卷进去的总宽度
      liSum: 0,  //li总长度
    }
  },
  methods: {
    /* 向左 */
    go_more () {
      // 500是指盒子的宽度，菜单栏需要占位的宽度
      if (this.liSum - this.scrollSum < 600) return 
      this.oneWidth = this.oneWidth - this.li_element_width(this.index)
      this.scrollSum += this.li_element_width(this.index)
      this.index += 1
    },
    /* 查找元素的宽度 , index为这个li的序号*/
    li_element_width(index) {
      let _lis = document.querySelectorAll('li')
      for (let i = 0; i < _lis.length; i++) {
        if ( index === Number(_lis[i].getAttribute('data-set')) ) {
          return _lis[i].offsetWidth
        }
      }
    },
    /* 向右 */
    go_back () {
      if (this.index <= 0) return 
      this.index -= 1
      this.oneWidth = this.oneWidth + this.li_element_width(this.index)
      this.scrollSum -= this.li_element_width(this.index)
    },
    init_all () {
      let _lis = document.querySelectorAll('li')
      for (let i = 0; i < _lis.length; i++) {
        this.liSum += _lis[i].offsetWidth + 2
      }
    }
  },
  mounted() {
    this.init_all()
  }
}
</script>

<style lang="sass" scoped>
.list-page
  padding: 0
  margin: 0
  position: relative
  .container
    width: 600px
    margin: 0 auto
    .btn-group
    .something
      position: relative
      .menu
        height: 50px
        width: 100%
        overflow: hidden
        .menu-ul
          padding: 0
          margin: 0
          transition: margin-left 0.8s ease
          .menu-li
            list-style: none
            display: inline-block
            border-radius: 0px !important
            float: left
            a
              float: left
              padding: 16px 30px
              color: #fff
              background: #18191a
              display: inline-block
              &:hover+.dropdown
                display: block
                background: pink
            .dropdown
              background: #18191a
              position: absolute
              top: 50px
              display: none
              width: 135px
              z-index: 99
              li
                color: #fff
                padding: 10px
  .div-content
    clear: both
    .div1
      width: 200px
      height: 200px
      background: pink
      overflow: hidden
    .div2  
      width: 200px
      height: 250px
      background: skyblue
  .out-container 
    position: relative
    width: 500px
    height: 200px
    background: #ddd
    .in-container 
      width: 400px
      margin: 0 auto
      overflow: hidden   
      .swiper-wrapper
        margin: 0
        padding: 0
        .swiper-slide
          float: left
          width: 400px
          height: 200px
          margin: 0
          padding: 0
          text-align: center
          line-height: 200px
      .swiper-button 
        position: absolute


</style>