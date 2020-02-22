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
        exact: false
    },
    {
        path: '/admin/setting',
        component: Settings,
        exact: false
    },
    {
        path: '/admin/article/list',
        component: ArticleList,
        exact: true
    },
    {
        path: '/admin/article/edit/:id',
        component: ArticleEdit,
        exact: false
    }
]