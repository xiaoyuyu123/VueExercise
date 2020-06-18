<template>
    <div class="probRoot">
        <a-card style="width: 100%" hoverable>
            <span slot="title">
                <span style="color: red" v-if="prob.required"> * </span>
                {{num}}. {{prob.title}}
            </span>
            <span slot="extra">
                <a-icon type="arrow-up" style="margin-right: 15px; font-size: 20px" @click="()=>moveUp(num-1)"></a-icon>
                <a-icon type="arrow-down" style="margin-right: 15px; font-size: 20px" @click="()=>moveDown(num-1)"></a-icon>
                <a-button type="danger" @click="deleteProb">删除</a-button>
            </span>
            <a-form-item style="margin-left: 20px">
                <a-radio-group v-if="prob.type==='choice'">
                    <span v-for="(el, index) in prob.options" :key="index">
                        <a-radio :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-radio>
                        <br/>
                    </span>
                </a-radio-group>

                <a-checkbox-group v-if="prob.type==='mul-choice'">
                    <span v-for="(el, index) in prob.options" :key="index">
                        <a-checkbox :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-checkbox>
                        <br/>
                    </span>
                </a-checkbox-group>

                <div v-if="prob.type==='text-input'">
                    <a-input v-if="prob.inputType==='text'" :placeholder="prob.placeHolder"
                             v-decorator="[null,{rules:[{required:prob.required, message: 'Required'}]}]"></a-input>
                    <a-input-number v-if="prob.inputType==='number'" :step="prob.step" :placeholder="prob.placeHolder"
                                    v-decorator="[null,{rules:[{required:prob.required, message: 'Required'}]}]"></a-input-number>
                </div>

                <a-rate v-if="prob.type==='rate'" :default-value="0"> </a-rate>
            </a-form-item>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "ProblemItem",
        props: [
            'num',
            'prob',
            'deleteProb',
            'moveUp',
            'moveDown',
        ],
        methods: {
        }
    }
</script>

<style scoped>

</style>