<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader 
      :size="3"
      :z-index="9"
      fixed /> <!-- Boolean 데이터는 :fixed="true" 말고 fixed 처럼 속성을 명시하는 것 만으로도 전달이 가능 -->
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      // movie/tt123762
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0; // 포스터의 사이즈 감소 X
    width: 500px;
    height: 500px * 3 / 2;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1; // 최대 증가넓이
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    &.title {
      width: 80%;
      height: 70px;
      margin-top: 20px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
</style>