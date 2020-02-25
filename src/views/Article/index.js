import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import {getArticleList} from './../../services';

const KEY_MAP = {
    id: 'ID',
    amount: '阅读量',
    title: '标题',
    createat: '创建时间',
}

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            columns: [],
            total: 0
        }
    }

    handleArticleEdit = (data)=>{
        console.log(data);
    }

    componentDidMount() {
        getArticleList().then(res=>{
            let item = res.list[0];
            var keysMap = Object.keys(item);
            const columns = keysMap.map(key =>{
                return {
                    title: KEY_MAP[key],
                    dataIndex: key,
                    key
                }
            })

            columns.push({
                title: '操作',
                key: 'actions',
                render: (text,record)=>{
                    return <Button onClick={()=>{
                       return this.handleArticleEdit(record)
                    }}>编辑</Button>
                }
            })


            let data = res.list;
            let dataSource = data.map(item=>{
                item.key = item.id;
                return item
            })

            this.setState({
                total: +res.total,
                dataSource,
                columns
            })
        })
    }

    exportTable = () => {
        console.log('export the tables')
    }
    
    render() {
        return (
            <Card title="文章列表" extra={<Button onClick={this.exportTable}>导出excel</Button>}>
                <Table 
                    dataSource={this.state.dataSource} 
                    columns={this.state.columns}
                    pagination= {{
                        total: this.state.total,
                        hideOnSinglePage: true
                    }}
                />
            </Card>
        )
    }
}
