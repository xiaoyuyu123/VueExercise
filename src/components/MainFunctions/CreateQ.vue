<template>
    <div id="CreateQRoot">
        <a-row>
            <a-col :span="12">
                <a-form :form="form">
                    <div v-for="(e, index) in probs" :key="index" @click="curProb=index">
                        <ProblemItem :num="index+1" :prob="e" :deleteProb="()=>deleteProb(index)" :moveUp="moveUp" :moveDown="moveDown"></ProblemItem>
                    </div>
                </a-form>
                <a-button type="default" @click="showDrawer" block class="createQButton">
                    <a-icon type="plus"/>
                    添加题目
                </a-button>
                <a-button type="default" block class="createQButton">
                    <a-icon type="save"/>
                    保存草稿
                </a-button>
                <a-button type="primary" block class="createQButton">
                    <a-icon type="check"/>
                    发布问卷
                </a-button>
            </a-col>
            <a-col :span="12">
                <a-affix :offset-top="0" style="width: 100%">
                    <a-card :tab-list="tabList" :active-tab-key="curTab" @tabChange="(key)=>{this.curTab=key;}">
                        <div v-if="curTab==='basic'">
                            <div v-if="curProb===-1" style="text-align: center">
                                <a-spin/>
                            </div>
                            <a-empty v-else-if="curProb==null || probs[curProb]==null"> <span slot="description">请选择题目</span> </a-empty>
                            <div v-else>
                                <a-form :form="basicForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
                                    <EditProb :num="curProb+1" :prob="probs[curProb]" :form="basicForm" :flush="flushEditor"></EditProb>
                                </a-form>
                            </div>
                        </div>
                        <div v-if="curTab==='advanced'">
                            <div v-if="curProb===-1" style="text-align: center">
                                <a-spin/>
                            </div>
                            <a-empty v-else-if="curProb==null || probs[curProb]==null"> <span slot="description">请选择题目</span> </a-empty>
                            <span v-else>you clicked on {{curProb}}</span>
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
                <a-icon v-if="goBack.length!==0" type="left" @click="clickGoBack"/>
                添加题目
            </span>
            <keep-alive>
                <component :is="drawerDisp" :key="newProb" :handleClick="chooseType" :probType="probType" :onSave="onSave"></component>
            </keep-alive>
        </a-drawer>
    </div>
</template>

<script>
    import ProblemItem from "@/components/BasicItems/ProblemItem";
    import ChooseType from "@/components/MainFunctions/ChooseType";
    import CreateProblemFrame from "@/components/MainFunctions/CreateProblemFrame";
    import EditProb from "@/components/BasicItems/EditProb";
    export default {
        name: "CreateQ",
        components: {
            ProblemItem,
            ChooseType,
            CreateProblemFrame,
            EditProb,
        },
        data(){
            return {
                form: this.$form.createForm(this, { name: 'mainForm' }),
                basicForm: this.$form.createForm(this, { name: 'basicForm' }),
                openDrawer: false,
                drawerDisp: "ChooseType",
                probType: "",
                goBack: [],
                tabList: [
                    {tab:'基本', key:'basic'},
                    {tab:'高级', key:'advanced'}
                ],
                curTab: 'basic',
                curProb: null,
                probs: [
                    {title:'这是一道选择题',type:'choice',options:['opt1hahahaha','opt21322131oijf','opt3wofiwoefij'],required:false},
                    {title:'这是一道多项选择题',type:'mul-choice',options:['opt1hahahaha','opt21322131oijf','opt3wofiwoefij'],required:true},
                    {title:'这是一道文本填空题',type:'text-input',inputType:'text',placeHolder:'ph',required:true},
                    {title:'这是一道数字填空题',type:'text-input',inputType:'number',step:1,required:false},
                    {title:'这是一道评分题',type:'rate',required:true},
                ],
                newProb: 0,
            }
        },
        methods: {
            showDrawer: function(){
                this.newProb++;
                this.drawerDisp="ChooseType";
                this.openDrawer=true;
            },
            chooseType: function(obj) {
                this.newProb++;
                this.probType=obj.key;
                this.drawerDisp="CreateProblemFrame";
                this.goBack.push("ChooseType");
            },
            clickGoBack: function() {
                this.newProb++;
                this.drawerDisp=this.goBack.pop();
            },
            flushEditor: async function() {
                let temp=this.curProb;
                this.curProb=-1;
                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                sleep(500).then(() => {
                    this.curProb=temp;
                })
            },
            deleteProb: function (index) {
                this.probs.splice(index, 1);
            },
            onSave:function (prob) {
                this.probs.push(prob);
                this.openDrawer=false;
            },
            moveUp: function (index) {
                if(index===0) return ;
                let temp=this.probs[index];
                this.$set(this.probs, index, this.probs[index-1]);
                this.$set(this.probs, index-1, temp);
            },
            moveDown: function (index) {
                if(index===this.probs.length-1) return ;
                let temp=this.probs[index];
                this.$set(this.probs, index, this.probs[index+1]);
                this.$set(this.probs, index+1, temp);
            }
        }
    }
</script>

<style scoped>
.createQButton{
    margin-top: 15px;
}
</style>