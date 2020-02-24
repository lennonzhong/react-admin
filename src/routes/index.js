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
        title: 'dashboard',
        icon: 'user'
    },
    {
        path: '/admin/article/list',
        component: ArticleList,
        exact: true,
        isNav: false,
        title: '文章列表',
        icon: 'user',
        children: [
            {
                path: '/admin/article/edit/:id',
                component: ArticleEdit,
                exact: false,
                isNav: true,
                title: '编辑',
                icon: 'user'
            },
            {
                path: '/admin/article/add',
                component: ArticleEdit,
                exact: false,
                isNav: true,
                title: '添加',
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
        icon: 'user'
    },
]