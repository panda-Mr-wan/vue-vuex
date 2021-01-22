<template>
  <div>
    <p>全局容器中store中count的值：{{this.$store.state.Count.count}}</p>
    <p>全局容器中store中计算属性getCounter的值：{{this.$store.getters.getCounter}}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hr>
    <Stu />
    <hr>
    <Stu2 />
  </div>
</template>

<script>
  import Stu from "./components/Stu";
  import Stu2 from "./components/Stu2";
  export default {
    name: "App",
    components:{ Stu, Stu2 },
    methods: {
      add(){
        this.$store.dispatch("add",1)
      },
      sub(){
        this.$store.dispatch("sub",1)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>