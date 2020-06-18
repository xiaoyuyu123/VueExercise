<template>
    <a-locale-provider :locale="zh_CN" id="app">
        <MainFrame></MainFrame>
    </a-locale-provider>
</template>

<script>
import MainFrame from "@/components/MainFrame";
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default {
    data() {
        return {
            zh_CN,
        };
    },
    name: 'App',
    components: {
        MainFrame,
    }
}
</script>

<style>
    #app{
        min-height: 100%;
    }
</style>
