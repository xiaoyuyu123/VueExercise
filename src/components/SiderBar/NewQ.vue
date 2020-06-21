<template>
    <div v-if="QType==0">
        <a-list :grid="{gutter: 16, column: 2}">
            <a-list-item @click="QType=1">
                <a-card hoverable>
                    <a-card-meta>
                        <span slot="title">
                            <a-icon type="appstore" theme="twoTone"/>
                            调查问卷
                        </span>
                        <p slot="description">形式丰富的通用问卷</p>
                    </a-card-meta>
                </a-card>
            </a-list-item>
            <a-list-item @click="QType=2">
                <a-card hoverable>
                    <a-card-meta>
                        <span slot="title">
                            <a-icon type="appstore" theme="twoTone"/>
                            信息采集
                        </span>
                        <p slot="description">格式规范的固定数据</p>
                    </a-card-meta>
                </a-card>
            </a-list-item>
            <a-list-item @click="QType=3">
                <a-card hoverable>
                    <a-card-meta>
                        <span slot="title">
                            <a-icon type="appstore" theme="twoTone"/>
                            试卷
                        </span>
                        <p slot="description">可以设置答案并自动批改</p>
                    </a-card-meta>
                </a-card>
            </a-list-item>
            <a-list-item @click="QType=4">
                <a-card hoverable>
                    <a-card-meta>
                        <span slot="title">
                            <a-icon type="appstore" theme="twoTone"/>
                            投票
                        </span>
                        <p slot="description">发起形式多样的投票</p>
                    </a-card-meta>
                </a-card>
            </a-list-item>
        </a-list>
    </div>
    <div v-else-if="QType>0">
        <CreateQ :change-page="changePage"></CreateQ>
    </div>
    <div v-else>
        <GoodAdd :code="code"></GoodAdd>
    </div>
</template>

<script>
    import CreateQ from "@/components/MainFunctions/CreateQ";
    import GoodAdd from "@/components/MainFunctions/GoodAdd";
    export default {
        name: "NewQ",
        data(){
            return {
                QType: 0,
                code: 0,
            }
        },
        components:{
            GoodAdd,
            CreateQ,
        },
        methods: {
            changePage: function (code) {
                this.code=code;
                this.QType=-1;
            }
        }
    }
</script>

<style scoped>
</style>