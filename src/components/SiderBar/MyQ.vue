<template>
    <div>
        <a-tabs default-active-key="1">
            <a-tab-pane key="1">
               <span slot="tab">
                   <a-icon type="play-circle"></a-icon>
                   已发布
               </span>
                <div v-if="pubCards!=null && pubCards.length!==0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="pubCards">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <QCard :title="item.title" :dueTime="item.dueTime" :publishTime="item.publishTime"
                                :dueDate="item.dueDate" :publishDate="item.publishDate" :refresh="refresh" :code="item.code"/>
                        </a-list-item>
                    </a-list>
                </div>
                <a-empty v-else/>
            </a-tab-pane>
            <a-tab-pane key="2">
               <span slot="tab">
                   <a-icon type="pause-circle"></a-icon>
                   已暂停
               </span>
                <div v-if="pauseCards!=null && pauseCards.length!==0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="pauseCards">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <QCard :title="item.title" :dueTime="item.dueTime" :publishTime="item.publishTime"
                                   :dueDate="item.dueDate" :publishDate="item.publishDate" :refresh="refresh" :code="item.code"/>
                        </a-list-item>
                    </a-list>
                </div>
                <a-empty v-else/>
            </a-tab-pane>
            <a-tab-pane key="3">
               <span slot="tab">
                   <a-icon type="check"></a-icon>
                   已完成
               </span>
                <div v-if="finishCards!=null && finishCards.length!==0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="finishCards">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <QCard :title="item.title" :dueTime="item.dueTime" :publishTime="item.publishTime"
                                   :dueDate="item.dueDate" :publishDate="item.publishDate" :refresh="refresh" :code="item.code"/>
                        </a-list-item>
                    </a-list>
                </div>
                <a-empty v-else/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import QCard from "@/components/BasicItems/QCard";
    import {message} from "ant-design-vue"
    export default {
        name: "MyQ",
        data() {
            return {
                pubCards:[],
                pauseCards:[],
                finishCards:[],
            };
        },
        components: {
            QCard
        },
        methods: {
            refresh: function () {
                this.$axios.get('/loadForms').then((response) => {
                    this.pubCards=response.data;
                }).catch((err)=>{
                    console.log(err);
                });
                message.success("列表已刷新");
            }
        },
        mounted(){
            this.refresh();
        }
    }
</script>

<style scoped>

</style>