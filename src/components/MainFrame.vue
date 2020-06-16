<template>
    <a-layout id = "components-layout-demo-basic">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo"></div>
            <a-menu theme="dark" @click="menuClick" :default-selected-keys="['1']">
                <a-menu-item key="1">
                    <a-icon type="home"></a-icon>
                    <span>主页</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="pie-chart"></a-icon>
                    <span>我的问卷</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="file"></a-icon>
                    <span>新建问卷</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="hourglass"></a-icon>
                    <span>填写记录</span>
                </a-menu-item>
                <a-menu-item key="5">
                    <a-icon type="user"></a-icon>
                    <span>个人中心</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
<!--            HEADER-->
            <a-layout-header style="background: #fff; padding: 0; text-align: center">
                <a-row type="flex" justify="space-around">
                    <a-col :span="1">
                        <a-icon class="trigger" :type="collapsed?'menu-unfold':'menu-fold'"
                                @click="()=>(collapsed=!collapsed)"/>
                    </a-col>
                    <a-col :span="22"></a-col>
                    <a-col :span="1">
                        <a-dropdown :trigger="['click']">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                <a-avatar style="background-color:#87d068" icon="user" />
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    个人主页
                                </a-menu-item>
                                <a-menu-item key="1">
                                    我的问卷
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item key="3">
                                    退出登录
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="margin: 32px">
                <div>
                    <a-breadcrumb>
                        <a-breadcrumb-item v-for="item in list" :key="item.path">
                            {{ item.path }}
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <a-divider/>
                <!--                THIS PART IS DYNAMIC LOADED-->
                <keep-alive>
                    <component :is="mainGrid"></component>
                </keep-alive>
            </a-layout-content>
            <a-layout-footer style="text-align: center">BSFinalProj @2020 Created By Gster, ZJU</a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
    import Vue from 'vue';
    import Antd from 'ant-design-vue';
    import 'ant-design-vue/dist/antd.css';
    import HistoryQ from "@/components/SiderBar/HistoryQ";
    import MyQ from "@/components/SiderBar/MyQ";
    import NewQ from "@/components/SiderBar/NewQ";
    import Profile from "@/components/SiderBar/Profile";

    import HelloWorld from "@/components/HelloWorld";

    Vue.config.productionTip=false;
    Vue.use(Antd);

    export default {
        name: "MainFrame",
        data() {
            return {
                collapsed: false,
                mainGrid: "HelloWorld",
                list: [
                    {path:"主页"},
                ]
            };
        },
        methods:{
            menuClick: function (obj){
                if(obj.key === 1){
                    this.mainGrid="HelloWorld";
                    this.list=[
                        {path:"主页"},
                    ];
                }
                if(obj.key === 2){
                    this.mainGrid="MyQ";
                    this.list=[
                        {path:"主页"},
                        {path:"我的问卷"}
                    ];
                }
                if(obj.key === 3){
                    this.mainGrid="NewQ";
                    this.list=[
                        {path:"主页"},
                        {path:"新建问卷"},
                    ];
                }
                if(obj.key === 4){
                    this.mainGrid="HistoryQ";
                    this.list=[
                        {path:"主页"},
                        {path:"历史问卷"},
                    ];
                }
                if(obj.key === 5){
                    this.mainGrid="Profile";
                    this.list=[
                        {path:"主页"},
                        {path:"个人信息"},
                    ];
                }
            }
        },
        components: {
            HelloWorld,
            HistoryQ,
            MyQ,
            NewQ,
            Profile,
        }
    }
</script>

<style scoped>
    .logo {
        background: rgba(255,255,255,0.2);
        height: 32px;
        margin: 16px;
    }
    #components-layout-demo-basic{
        min-height: 100%;
    }

</style>