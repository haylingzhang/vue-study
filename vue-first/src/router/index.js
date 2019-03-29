import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import HeaderComponent from '../pages/header/index.vue'
import ContentComponent from '../pages/content/index.vue'

export default new Router({
    mode: 'hash',
    base: '/',
    routes: [
        {
            name: 'default',
            path: '/index',
            components: {
                'v-header': HeaderComponent,
                'v-content': ContentComponent,
            },
            // children: [
            //     //包含头尾的
            //     //系统首页
            //     {
            //         path: 'system-index',
            //         name: 'system-index',
            //         component: resolve => require(['../pages/content/welcome.vue'], resolve)
            //     },
            //     // 账户设置
            //     {
            //         path: 'account-setting',
            //         name: 'account-setting',
            //         component: resolve => require(['../pages/index/account-setting.vue'], resolve)
            //     },
            //     //钱包-记账管理
            //     {
            //         path: 'waletAccount-manage',
            //         name: 'waletAccount-manage',
            //         component: resolve => require(['../pages/walet/waletAccount-manage.vue'], resolve)
            //     },
            // ]
        },
    ]
})