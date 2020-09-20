import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Button, List, Avatar,Space, Row, Col,Card } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import CONSTURL from './config'
import Axios from 'axios';
import '../../style/homepage.css'
Axios.defaults.baseURL='/api'

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const { Header, Footer, Sider, Content } = Layout;
 
// function limitTxt(txt,count) {
//     var str = txt;
//     if(txt.length>count){
//         str = str.substr(0,count) + '...' ;
//     }
//     return str;
// }

class TopBar3 extends Component {
    constructor(props){
        super(props)
        
        var sourceData = [
            {
            moment:[{momentId:11,}],
            account:111,
            nickname:'程序员小昭',
            avatarSrc:'bear',
            title: '一文看懂前端和后端开发:从入门到放弃',
            content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
            
            {
                moment:[{momentId:11,}],
                account:111,
                nickname:'程序员小昭',
                avatarSrc:'bear',
                title: '一文看懂前端和后端开发:从入门到放弃',
                content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
            
            {
                moment:[{momentId:11,}],
                account:111,
                nickname:'程序员小昭',
                avatarSrc:'bear',
                title: '一文看懂前端和后端开发:从入门到放弃',
                content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
        ];

        this.state={
            data:sourceData,
            // currentData:[],
            isLoaded:false,
            // ava:'../../img/avatar/ava.jpg',
        }
        
        // 这个绑定是必要的，使`this`在回调中起作用
        // this.switchComm = this.switchComm.bind(this);
    }


    // componentDidMount(){
    //     const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    //     Axios.get('/Moment/Random')
    //     .then(function (response) {
    //       _this.setState({
    //         currentData:response.data,
    //         isLoaded:true
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       _this.setState({
    //         isLoaded:false,
    //         error:error
    //       })
    //     })
    // }

    // switchComm(){
    //     const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    //     Axios.get('/Moment/Random')
    //     .then(function (response) {
    //       _this.setState({
    //         currentData:response.data,
    //         isLoaded:true
    //       });
    //     })
    
    //     .catch(function (error) {
    //       console.log(error);
    //       _this.setState({
    //         isLoaded:false,
    //         error:error
    //       })
    //     })
    // }

    render() {
        if(!this.state.isLoaded){
            return <div>Loading</div>
        }
        else{
        return ( 
            
            <div style={{height: '100%',margin:'10px'}}>
                <Layout>
                <Header>
                        <Content>
                            <Row>
                                <Col span={2} offset={0}>
                                    <Button type="link">                    
                                        <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                            比赛</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={18}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}
                                        onClick={this.switchComm}
                                    >换一换</Button>
                                </Col>
                                <Col span={2} offset={0}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>
                                        <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>
                    <Content style={{paddingLeft:'30px',paddingRight:'30px'}}>
                        <List
                            // bordered={true}
                            itemLayout="horizontal"
                            dataSource={this.state.currentData}
                            renderItem={item => (
                            <List.Item
                                key={item.moment.momentId}
                            >
                                <List.Item.Meta
                                //帖子的名字和指向的地址，传一个pid，post_id
                                title={<a href ={"#/Moment/"+item.moment.momentId} target="_blank" rel="noopener noreferrer">{item.moment.title}</a>}
                                // description={<p>{item.description}</p>}
                                description={
                                    <div>
                                        <Row>
                                            <Col span={4} offset={0}>
                                                {item.nickname}
                                            </Col>
                                            <Col span={2} offset={10}>
                                                <IconText icon={StarOutlined}  text={item.starCount} key="list-vertical-star-o" />
                                            </Col>
                                            <Col span={2} offset={1}>
                                                <IconText icon={LikeOutlined} text={item.likeCount} key="list-vertical-like-o" />
                                            </Col>
                                            <Col span={2} offset={1}>
                                                <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                avatar={
                                    <a href={"#/personal/account="+item.moment.account} target="_blank" rel="noopener noreferrer">
                                    {/* <a href={"#/personal/account="+JSON.parse(localStorage.userData).account}> */}
                                      <Avatar 
                                        src={require("../../img/avatar/ava.jpg")}
                                      ></Avatar>
                                    </a>
                                  }

                                />
                            </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </div>
         );
      }
    }
}
 
export default TopBar3;