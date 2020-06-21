<template>
    <a-result status="success" title="创建成功" >
        <template #subTitle>
            您的问卷已经成功创建，问卷代码为<strong>{{code}}</strong>，赶快去查看吧~
        </template>
        <template #extra>
            <a-button key="console" type="primary">
                <router-link to="/myq">立即查看</router-link>
            </a-button>
        </template>
    </a-result>
</template>

<script>
    export default {
        name: "GoodAdd",
        props: [
            'code',
        ]
    }
</script>

<style scoped>

</style>