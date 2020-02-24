// import ArticleList from './Article';
// import ArticleEdit from './Article/ArticleEdit';
// import Settings from './Settings';
// import NotFound from './NotFound';
// import Login from './Login';
// import DashBoard from './DashBorad';

import loadable from 'react-loadable';
import { Loading} from './../components';

const ArticleList = loadable({
    loader: ()=>{
       return import('./Article')
    },
    loading: Loading
})
const ArticleEdit = loadable({
    loader: ()=>{
        return  import('./Article/ArticleEdit')
    },
    loading: Loading
})
const Settings = loadable({
    loader: ()=>{
        return import('./Settings')
    },
    loading: Loading
})
const NotFound = loadable({
    loader: ()=>{
       return import('./NotFound')
    },
    loading: Loading
})
const Login = loadable({
    loader: ()=>{
       return import('./Login')
    },
    loading: Loading
})
const DashBoard = loadable({
    loader: ()=>{
       return import('./DashBorad')
    },
    loading: Loading
})

// 需要使用异步加载组件


export {
    ArticleList,
    ArticleEdit,
    Settings,
    NotFound,
    Login,
    DashBoard
}