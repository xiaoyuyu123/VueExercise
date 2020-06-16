<template>
    <a-menu mode="inline" :selectable="false" @click="handleClick">
        <a-sub-menu title="选择题">
            <a-menu-item key="CreateChoice">
                单项选择
            </a-menu-item>
            <a-menu-item key="CreateMulChoice">
                多项选择
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu title="填空题">
            <a-menu-item key="CreateInput">
                文本填空
            </a-menu-item>
            <a-menu-item key="CreateNumberInput">
                数字填空
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu title="其它">
            <a-menu-item key="CreateRate">
                评分题
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script>
    export default {
        name: "ChooseType",
        props: [
            'handleClick',
        ]
    }
</script>

<style scoped>

</style>