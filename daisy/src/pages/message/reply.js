import React, { Component } from 'react'
import {Card,Avatar,List} from 'antd'
import {isLogined} from "../../utils/auth"
import CONSTURL from '../../components/community/config';
import Axios from 'axios';

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:'',
      data:[]
    };
  }
     
  componentDidMount(){
    if(isLogined()){
      var tempAccount = JSON.parse(localStorage.userData).account;
      this.state.account = tempAccount;
      var token = JSON.parse(localStorage.getItem('token')).token;
      Axios
        .get('/User/Reply/' + this.state.account,  {
        headers: { "Authorization": 'Bearer ' + token },
      })
      .then((res) => {
        console.log(res)
        var result=res.data
        this.setState({data:result})
      })
    }
  }


  render() {
        //初始化render数组状态
        let objArr=this.state.data

        return (
            <div className='notice'>
                <Card id='notice_card' bordered={false}>
                <List 
                  itemLayout="horizontal" 
                  dataSource={objArr} 
                  renderItem={item => (
                    <List.Item>
                    <List.Item.Meta
                      //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    </List.Item>
                )}
                />
                </Card>
            </div>
        )
    }
}