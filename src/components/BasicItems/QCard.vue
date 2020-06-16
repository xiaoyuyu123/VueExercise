<template>
    <a-card v-bind:title="title">
        <a slot="extra">编辑</a>
        <a-divider type="vertical" slot="extra"/>
        <a slot="extra">暂停</a>
        <p>发布日期：{{publishTime}}</p>
        <p>截止日期：{{dueTime}}</p>
        <div style="text-align: right">
            <a-button-group>
                <a-button type="primary">查看结果</a-button>
                <a-button type="default">停止收集</a-button>
            </a-button-group>
        </div>
    </a-card>
</template>

<script>
    export default {
        name: "QCard",
        props: [
            'title',
            'publishTime',
            'dueTime',
        ]
    }
</script>

<style scoped>
</style>