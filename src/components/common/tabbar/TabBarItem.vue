<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="ActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: {
        type: String,
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      ActiveColor(){
        return this.isActive?{color: this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err=>err);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;
  }


</style>
