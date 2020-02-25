import {
    ArticleList,
    ArticleEdit,
    Settings,
    NotFound,
    Login,
    DashBoard
} from './../views';
export const mainRoute = [
    {
        path: '/404',
        component: NotFound,
        exact: false
    },
    {
        path: '/login',
        component: Login,
        exact: false
    }
]

export const adminRoute = [
    {
        path: '/admin/dashboard',
        component: DashBoard,
        exact: false,
        isNav: true,
        title: '仪表盘',
        icon: 'dashboard'
    },
    {
        path: '/admin/article',
        component: ArticleList,
        exact: true,
        isNav: false,
        title: '文章',
        icon: 'user',
        children: [
            {
                path: '/admin/article/edit/:id',
                component: ArticleEdit,
                exact: false,
                isNav: true,
                hide: true,
                title: '编辑',
                icon: 'user'
            },
            {
                path: '/admin/article/list',
                component: ArticleEdit,
                exact: false,
                isNav: true,
                title: '列表',
                icon: 'user'
            },
        ]
    },
    {
        path: '/admin/setting',
        component: Settings,
        exact: false,
        isNav: true,
        title: '设置',
        icon: 'setting'
    },
]