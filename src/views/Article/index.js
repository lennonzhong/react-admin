import React, { Component } from 'react'
import { Card, Button, Table, Tag  } from 'antd';
import {getArticleList} from './../../services';
import XLSX from 'xlsx';
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
            total: 0,
            page: 1,
            size: 10,
            isLoading: false
        }
    }

    handleArticleEdit = (data)=>{
        console.log(data);
    }

    handleArticleDelete = (data) =>{
        console.log(data);
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        }, ()=>{
            this.getArticles();
        })        
    }

    getArticles = (page=0, size=10) => {
        getArticleList(page, size).then(res=>{
            let item = res.list[0];
            var keysMap = Object.keys(item);
            const columns = keysMap.map(key =>{
                if(key === 'amount') {
                    return {
                        title: KEY_MAP[key],
                        render: (text,record)=>{
                            return <Tag  color={record.amount > 250 ? 'red': 'green'}>{record.amount}</Tag>
                        },
                        key
                    }
                }
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
                    return (
                        <div>
                              <Button size="small" type="primary" onClick={()=>{
                                return this.handleArticleEdit(record)
                              }}>编辑</Button>

                              <Button size="small" type="danger" onClick={()=>{
                                return this.handleArticleDelete(record)
                              }}>删除</Button>
                        </div>
                    )
                    
                  
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
        }).catch(e=>{
            console.log(e);
        }).finally(e=>{
            this.setState({
                isLoading: false
            })
        })
    }

    exportTable = () => {
       
        const data = []

        const titles = Object.keys(this.state.dataSource[0])
        data[0] = titles;

        const values = this.state.dataSource.map(item=>{
            return Object.values(item);
        })

        data.splice(data.length,0,...values)

        /* convert state to workbook */
		const ws = XLSX.utils.aoa_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
		/* generate XLSX file and send to client */
		XLSX.writeFile(wb, "sheetjs.xlsx")
    }

    // 页码发生改变
    pageChangeHandle = (current, pagesize)=>{
        this.setState({
            page: current,
            size: pagesize
        }, ()=>{
            this.getArticles(current, pagesize)
        })
    }

    // 分月大小发生变化
    onShowSizeChange = (page, size)=>{
        this.setState({
            page: 1,
            size
        }, ()=>{
            this.getArticles(1, size)
        })
    }
    
    render() {
        return (
            <Card title="文章列表" extra={<Button onClick={this.exportTable}>导出excel</Button>}>
                <Table 
                    loading = {this.state.isLoading}
                    dataSource={this.state.dataSource} 
                    columns={this.state.columns}
                    pagination= {{
                        current: this.state.page,
                        total: this.state.total,
                        hideOnSinglePage: true,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        pageSizeOptions: [
                            '10', '15', '20', '30'
                        ],
                        onChange: this.pageChangeHandle,
                        onShowSizeChange: this.onShowSizeChange
                    }}
                />
            </Card>
        )
    }
}
