import Vue from "vue";
import VueRouter from "vue-router";
import MyQ from "@/components/SiderBar/MyQ";
import NewQ from "@/components/SiderBar/NewQ";
import HistoryQ from "@/components/SiderBar/HistoryQ";
import Profile from "@/components/SiderBar/Profile";
import Login from "@/components/User/Login";
import MainFrame from "@/components/MainFrame";
import FillForm from "@/components/MainFunctions/FillForm";
import FillPage from "@/components/BasicItems/FillPage";

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        component:Login,
    },
    {
        path:'/app',
        component:MainFrame,
        name: 'MainFrame',
        children:[
            {
                path:'/myq',
                component:MyQ,
                name:'MyQ',
            },
            {
                path:'/newq',
                component:NewQ,
                name:'NewQ',
            },
            {
                path:'/historyq',
                component:HistoryQ,
                name:'HistoryQ',
            },
            {
                path:'/profile',
                component:Profile,
                name:'Profile',
            },
            {
                path:'/home',
                component:FillForm,
                name:'Home',
                props:{code:0},
            },
            {
                path:'/submit',
                component:FillForm,
                name:'Submit',
                props:{code:-1},
            },
            {
                path:'/fill/:code',
                component:FillPage,
                name:'Fill',
                props: true,
            },
        ],
    },
];

const router=new VueRouter({routes});

export default router;
