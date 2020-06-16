<template>
    <div>
        <a-tabs default-active-key="1">
            <a-tab-pane key="1">
               <span slot="tab">
                   <a-icon type="play-circle"></a-icon>
                   已发布
               </span>
                <div v-if="pubCards!=null && pubCards.length!=0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="pubCards">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <QCard v-bind:title="item.title" v-bind:due-time="item.dueTime" v-bind:publish-time="item.publishTime"/>
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
                <div v-if="pauseCards!=null && pauseCards.length!=0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="pauseCards">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <QCard v-bind:title="item.title" v-bind:due-time="item.dueTime" v-bind:publish-time="item.publishTime"/>
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
                <div v-if="finishCards!=null && finishCards.length!=0">
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="finishCards">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <QCard v-bind:title="item.title" v-bind:due-time="item.dueTime" v-bind:publish-time="item.publishTime"/>
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
    var temp=new Date();
    export default {
        name: "MyQ",
        data() {
            return {
                pubCards:[
                    {title:"问卷1",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷2",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷3",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷4",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷5",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷6",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷7",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷8",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷9",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                    {title:"问卷10",dueTime:temp.toLocaleString(),publishTime:temp.toLocaleString()},
                ],
                pauseCards:[],
                finishCards:[],
            };
        },
        components: {
            QCard
        }
    }
</script>

<style scoped>

</style>