<template>
  <div id="app">
    <div>
      <transition @beforeEnter="$collapse.beforeEnter"
                  @enter="$collapse.enter"
                  @afterEnter="$collapse.afterEnter"
                  @beforeLeave="$collapse.beforeLeave"
                  @leave="$collapse.leave"
                  @afterLeave="$collapse.afterEnter">
        <div v-show="show">
          <div class="demo-content">
            vue collapse transition!
          </div>
        </div>
      </transition>
    </div>
    <button @click="show = !show">click</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .demo-content {
    width: 50px;
    font-size: 18px;
    white-space: pre-wrap;
    word-break: break-all;
  }
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>
