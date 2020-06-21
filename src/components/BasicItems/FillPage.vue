<template>
    <div>
        <a-form :form="fillForm" @submit="submitHandler">
        <a-card style="width: 100%" v-for="(prob, index) in probs" :key="index">
            <span slot="title">
                <span style="color: red" v-if="prob.required"> * </span>
                {{index+1}}. {{prob.title}}
            </span>
            <a-form-item style="margin-left: 20px">
                <a-radio-group v-if="prob.type==='choice'" v-decorator="[index+'-choice',{rules:[{required:prob.required, message:'此题为必做题'}]}]">
                    <span v-for="(el, index) in prob.options" :key="index">
                        <a-radio :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-radio>
                        <br/>
                    </span>
                </a-radio-group>

                <a-checkbox-group v-if="prob.type==='mul-choice'" v-decorator="[index+'-mulchoice',{rules:[{required:prob.required, message:'此题为必做题'}]}]">
                    <span v-for="(el, index) in prob.options" :key="index">
                        <a-checkbox :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-checkbox>
                        <br/>
                    </span>
                </a-checkbox-group>

                <div v-if="prob.type==='text-input'">
                    <a-input v-if="prob.inputType==='text'" :placeholder="prob.placeHolder"
                             v-decorator="[index+'-text',{rules:[{required:prob.required, message:'此题为必做题'}]}]"></a-input>
                    <a-input-number v-if="prob.inputType==='number'" :step="prob.step" :placeholder="prob.placeHolder"
                                    v-decorator="[index+'-number',{rules:[{required:prob.required, message:'此题为必做题'}]}]"></a-input-number>
                </div>

                <a-rate v-if="prob.type==='rate'" v-decorator="[index+'-rate',{initialValue:0,rules:[{required:prob.required, message:'此题为必做题'}]}]"> </a-rate>
            </a-form-item>
        </a-card>
            <a-button block type="primary" html-type="submit">提交</a-button>
        </a-form>

    </div>
</template>

<script>
    export default {
        name: "FillPage",
        props:[
            'code',
        ],
        data(){
            return {
                probs:[],
                fillForm: this.$form.createForm(this, { name: 'mainForm' }),
            }
        },
        methods:{
            submitHandler: function (e) {
                e.preventDefault();
                this.fillForm.validateFields((err, values) => {
                    if (!err) {
                        let l=[];
                        for(let x in values) l.push(values[x]);
                        console.log(l);
                        this.$axios.post('/submit/'+this.code, l).then(()=>{
                            this.$router.push({name:'Submit'});
                        })
                    }
                });
            }
        },
        mounted(){
            this.$axios.get("/getForm", {params:{code:this.code}}).then(res=>{
                this.probs=res.data;
            })
        }
    }
</script>

<style scoped>

</style>