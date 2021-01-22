<template>
    <div>
        <h3>Stu2组件开发测试服务器</h3>
        <ul :class="{loading:this.$store.state.Stu2.show}">
            <li v-for="value in this.$store.state.Stu2.stu2" :key="value.id">
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
        name: "Stu2",
        methods: {
            getData(){
                this.$store.dispatch("fetch2")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>