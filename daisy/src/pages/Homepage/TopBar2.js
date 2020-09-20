import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Button, List, Avatar,Space, Row, Col,Card } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import CONSTURL from './config'
import Axios from 'axios';
import '../../style/homepage.css'
Axios.defaults.baseURL='/api'

const { Header, Footer, Sider, Content } = Layout;

class TopBar extends Component {
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
            currentData:sourceData,
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
        return (
            <div style={{margin:'60px 150px 40px 150px',
            // background:'#ececec',
            // border:'2px gray solid'
            }}>
                <Layout>
                    <Header theme='light'>
                        <Content>
                            <Row>
                                <Col span={2} offset={0}>
                                    <Button type="link">                    
                                        <a href="#/community" target="_blank" rel="noopener noreferrer">
                                            社区</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={16}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}
                                    // onClick={this.switchComm.bind(this)}
                                    >换一换</Button>
                                </Col>
                                <Col span={2} offset={2}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>
                                        <a href="#/community" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>
                    <Content style={{paddingLeft:'30px',paddingRight:'30px'}}>
                        <div style={{padding:'20px'
                            // background:'#ececec',
                            // border:'2px gray solid'
                            }}>
                        <Row gutter={16}>
                        {this.state.currentData.map(function(item){
                                return(
                                    <Col span={8} key={item}
                                    style={{top:'20px'}}
                                    >
                                        <Card 
                                        title={<a href ={"#/Moment/"+item.moment.momentId} target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </a>}
                                         bordered={false}>
                                             {item.content}
                                        </Card>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                        </div>
                    </Content>
                </Layout>
            </div>
          );
    }
}
 
export default TopBar;
