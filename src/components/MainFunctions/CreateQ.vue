<template>
    <div id="CreateQRoot">
        <a-row>
            <a-col :span="12">
                <a-form :form="form">
                    <ProblemItem num="1" title="这是一道选择题" type="choice" :options="['opt1hahahaha','opt21322131oijf','opt3wofiwoefij']"></ProblemItem>
                    <ProblemItem num="2" title="这是一道多项选择题" type="mul-choice" :options="['opt1hahahaha','opt21322131oijf','opt3wofiwoefij']"></ProblemItem>
                    <ProblemItem num="3" title="这是一道文本填空题" type="text-input" inputType="text"></ProblemItem>
                    <ProblemItem num="4" title="这是一道数字填空题" type="text-input" inputType="number"></ProblemItem>
                    <ProblemItem num="5" title="这是一道评分题" type="rate"></ProblemItem>
                </a-form>
                <a-button type="primary" @click="showDrawer" block>
                    <a-icon type="plus"/>
                    添加题目
                </a-button>
            </a-col>
            <a-col :span="12">
                <a-affix :offset-top="0">
                    <a-card :tab-list="tabList" :active-tab-key="curTab" @tabChange="(key)=>{curTab=key;}">
                        <div v-if="curTab==='basic'">
                            <a-empty> <span slot="description">请选择题目</span> </a-empty>
                        </div>
                        <div v-if="curTab==='advanced'">
                            <a-empty> <span slot="description">请选择题目</span> </a-empty>
                        </div>
                    </a-card>
                </a-affix>
            </a-col>
        </a-row>
        <a-drawer
                placement="right"
                :closable="true"
                :visible="openDrawer"
                @close="openDrawer=false"
                :width="560">
            <span slot="title">
                <a-icon v-if="goBack.length!=0" type="left" @click="clickGoBack"/>
                添加题目
            </span>
            <keep-alive>
                <component :is="drawerDisp" :handleClick="chooseType" :probType="probType"></component>
            </keep-alive>
        </a-drawer>
    </div>
</template>

<script>
    import ProblemItem from "@/components/BasicItems/ProblemItem";
    import ChooseType from "@/components/MainFunctions/ChooseType";
    import CreateProblemFrame from "@/components/MainFunctions/CreateProblemFrame";
    export default {
        name: "CreateQ",
        components: {
            ProblemItem,
            ChooseType,
            CreateProblemFrame,
        },
        data(){
            return {
                form: this.$form.createForm(this, { name: 'createForm' }),
                openDrawer: false,
                drawerDisp: "ChooseType",
                probType: "",
                goBack: [],
                tabList: [
                    {tab:'基本', key:'basic'},
                    {tab:'高级', key:'advanced'}
                ],
                curTab: 'basic',
            }
        },
        methods: {
            showDrawer: function(){
                this.drawerDisp="ChooseType";
                this.openDrawer=true;
            },
            chooseType: function(obj) {
                this.probType=obj.key;
                this.drawerDisp="CreateProblemFrame";
                this.goBack.push("ChooseType");
            },
            clickGoBack: function() {
                this.drawerDisp=this.goBack.pop();
            }
        }
    }
</script>

<style scoped>

</style>