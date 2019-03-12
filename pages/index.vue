<template>
  <section class="wrapper">
    <Counter />
    <Todos />
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'
import Todos from '~/components/Todos.vue'

export default {
  components: {
    Counter,
    Todos
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
.wrapper > * {
  /* flex-basis: 50%; */
  width: 48%;
  flex: 0 0 auto;
}
</style>
