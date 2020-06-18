<template>
    <div class="EditProbRoot">
        <a-page-header :title="'题目'+num" :sub-title="prob.title">
        </a-page-header>
        <a-divider/>
        <a-form-item label="必填:">
            <a-switch :checked="prob.required" v-decorator="[num+'required',{}]" @click="changeRequired"
                      style="margin-left: 10px"></a-switch>
        </a-form-item>
        <a-form-item label="题目">
            <a-input v-decorator="[num+'title',{initialValue:prob.title}]"
                     @pressEnter="applyAll()" style="width: 80%"></a-input>
        </a-form-item>

        <a-form-item v-for="(x, index) in prob.options" :key="x.id" :label="'选项'+(index+1)">
            <a-input v-decorator="[num+'option-'+index,{initialValue:x}]"
            @pressEnter="applyAll()" style="width: 80%"></a-input>
            <a-icon v-if="prob.options.length!==1" type="minus-circle"
                    style="margin-left: 10%;font-size: 20px" @click="()=>deleteOption(index)"/>
        </a-form-item>

        <a-button type="dashed" block v-if="prob.options!=null" @click="addOption">
            <a-icon type="plus"></a-icon> 添加选项
        </a-button>

        <a-form-item v-if="prob.type==='text-input' && prob.inputType==='text'" label="占位符"
            @pressEnter="applyAll()">
            <a-input v-decorator="[num+'placeholder',{initialValue:prob.placeHolder}]"></a-input>
        </a-form-item>

        <a-form-item v-if="prob.type==='text-input' && prob.inputType==='number'" label="递增量"
            @pressEnter="applyAll()">
            <a-input v-decorator="[num+'step',{initialValue:prob.step}]"></a-input>
        </a-form-item>

        <a-button type="primary" block @click="applyAll" style="margin-top: 20px">保存</a-button>
    </div>
</template>

<script>
    export default {
        name: "EditProb",
        props:[
            'num',
            'prob',
            'form',
            'flush',
        ],
        methods: {
            applyOption: function () {
                if(this.prob.options==null) return;
                for(let index=0; index<this.prob.options.length; ++index){
                    this.$set(this.prob.options, index, this.form.getFieldValue(this.num+'option-'+index));
                }
            },
            applyTitle: function () {
                if(this.prob.title==null) return;
                this.$set(this.prob,'title',this.form.getFieldValue(this.num+'title'));
            },
            applyPlaceHolder: function () {
                if(this.prob.placeHolder==null) return;
                this.$set(this.prob,'placeHolder',this.form.getFieldValue(this.num+'placeholder'));
            },
            applyStep: function () {
                if(this.prob.step==null) return;
                this.$set(this.prob,'step',this.form.getFieldValue(this.num+'step'));
            },
            applyAll: function () {
                this.applyOption();
                this.applyTitle();
                this.applyPlaceHolder();
                this.applyStep();
                this.$emit("Save");
            },
            addOption: function () {
                this.prob.options.push('');
            },
            deleteOption: function (index) {
                this.prob.options.splice(index, 1);
                this.flush();
            },
            changeRequired: function () {
                this.prob.required=!this.prob.required;
            }
        }
    }
</script>

<style scoped>

</style>