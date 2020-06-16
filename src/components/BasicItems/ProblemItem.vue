<template>
    <div>
        <a-card v-bind:title="num+'. '+title" style="width: 100%">
            <a-form-item style="margin-left: 20px">
                <a-radio-group v-if="type==='choice'">
                    <span v-for="(el, index) in options" v-bind:key="el">
                        <a-radio :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-radio>
                        <br/>
                    </span>
                </a-radio-group>

                <a-checkbox-group v-if="type==='mul-choice'">
                    <span v-for="(el, index) in options" :key="el">
                        <a-checkbox :value="el">
                            {{String.fromCharCode(index+65)+'. '+el}}
                        </a-checkbox>
                        <br/>
                    </span>
                </a-checkbox-group>

                <a-checkbox-group v-if="type==='text-input'">
                    <a-input v-if="inputType==='text'" :placeholder="placeHolder"
                             v-decorator="['note',{rules:[{required:required, message: 'Required'}]}]"></a-input>
                    <a-input-number v-if="inputType==='number'" :step="step" :placeholder="placeHolder"
                                    v-decorator="['note',{rules:[{required:required, message: 'Required'}]}]"></a-input-number>
                </a-checkbox-group>

                <a-rate v-if="type==='rate'" :default-value="0"> </a-rate>
            </a-form-item>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "ProblemItem",
        props: [
            'num',
            'step',
            'title',
            'type',
            'options',
            'required',
            'inputType',
            'placeHolder',
        ],
    }
</script>

<style scoped>

</style>