<template>
    <a-card v-bind:title="title">
        <a slot="extra">编辑</a>
        <a-divider type="vertical" slot="extra"/>
        <a slot="extra">暂停</a>
        <p>问卷代号：{{code}} <a-icon type="copy" @click="copyCode"/></p>
        <p>发布日期：{{publishDate+' '+publishTime}}</p>
        <p>截止日期：{{dueDate+' '+dueTime}}</p>
        <div style="text-align: right">
            <a-button-group>
                <a-button type="primary">查看结果</a-button>
                <a-button type="default">停止收集</a-button>
                <a-popconfirm placement="topRight" ok-text="确定" cancle-text="取消" @confirm="deleteQ">
                    <span slot="title">确认删除？</span>
                    <a-button type="danger">删除</a-button>
                </a-popconfirm>
            </a-button-group>
        </div>
    </a-card>
</template>

<script>
    import {message} from "ant-design-vue"
    export default {
        name: "QCard",
        props: [
            'code',
            'refresh',
            'title',
            'publishTime',
            'dueTime',
            'publishDate',
            'dueDate',
        ],
        methods: {
            deleteQ: function () {
                this.$axios.get('/deleteQ', {params: {index:this.code}}).then(()=>{
                    message.success("问卷已删除");
                    this.refresh();
                });
            },
            copyCode: function () {
                const el = document.createElement('textarea');
                el.value = this.code.toString();
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                message.info("已复制");
            }
        }
    }
</script>

<style scoped>
</style>