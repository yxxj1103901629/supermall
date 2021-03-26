<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 15px 0 20px;

    border-bottom: 8px solid #eeeeee;

  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    height: 80%;
    width: 90%;
    margin-bottom: 10px;
  }
</style>
