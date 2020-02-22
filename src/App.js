import React, { Component } from 'react'
import {Button, Pagination } from 'antd';


function test(MyComponent){
    return ()=>{
        return <div>
            <MyComponent></MyComponent>
            <div>啊哈哈哈哈哈</div>
        </div>
    }
}

@test
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Button type="primary">fsfsdfd</Button>

                <Pagination
                    showSizeChanger
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        )
    }
}

export default App