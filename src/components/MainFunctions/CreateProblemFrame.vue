<template>
    <a-form :form="newForm">
        <EditProb num="#" :prob="this.prob[probType]" :form="newForm" :flush="flush" @Save="()=>onSave(this.prob[probType])"></EditProb>
    </a-form>
</template>

<script>
    import EditProb from "@/components/BasicItems/EditProb";
    export default {
        components:{
            EditProb
        },
        name: "CreateProblemFrame",
        data() {
            return {
                newForm: this.$form.createForm(this, { name: 'newForm' }),
                prob: {
                    CreateChoice:{title:'题目',type:'choice',options:[''],required:true},
                    CreateMulChoice:{title:'题目',type:'mul-choice',options:[''],required:true},
                    CreateInput:{title:'题目',type:'text-input',inputType:'text',placeHolder:'',required:true},
                    CreateNumberInput:{title:'题目',type:'text-input',inputType:'number',step:1,required:true},
                    CreateRate:{title:'题目',type:'rate',step:1,required:true}
                },
                updateKey: 0,
            }
        },
        props: [
            'probType',
            'onSave',
        ],
        methods: {
            flush: function () {
                let temp=this.prob[this.probType];
                this.prob[this.probType]=undefined;
                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                sleep(500).then(() => {
                    this.prob[this.probType]=temp;
                })
            }
        }
    }
</script>

<style scoped>

</style>