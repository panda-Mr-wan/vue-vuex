<template>
    <div>
        <h3>Stu组件</h3>
        <ul>
            <li v-for="value in this.$store.state.Stu.stu" :key="value.id">
                学号：{{value.id}}
                姓名：{{value.name}}
                性别：{{value.sex}}
                年龄：{{value.age}}
            </li>
        </ul>
        <button @click="getData">获取数据</button>
    </div>
</template>

<script>
    export default {
        name:"Stu",
        methods:{
            getData(){
                this.$store.dispatch("fetch")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>