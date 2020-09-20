import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Button, List, Avatar,Space, Row, Col,Card, Carousel } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import CONSTURL from './config'
import Axios from 'axios';
import '../../style/homepage.css'
Axios.defaults.baseURL='/api'

function limitTxt(txt,count) {
    var str = txt;
    if(txt.length>count){
        str = str.substr(0,count) + '...' ;
    }
    return str;
}

const { Header, Footer, Sider, Content } = Layout;

var sourceData = [
    {
        Uid:121,
        Pid:21,
        imgSrc:'actPic1',
        title: '一文看懂前端和后端开发:从入门到放弃'
    },
    {
        Uid:122,
        Pid:22,
        imgSrc:'actPic2',
        title: '世界银行称穷人需要钱'
    },
    {
        Uid:123,
        Pid:23,
        imgSrc:'actPic3',
        title: '男子坚持偷窃十年 只为加入监狱合唱团'
    },
    {
        Uid:124,
        Pid:24,
        imgSrc:'actPic4',
        title: '牛人用砖头造一辆“宝马”车，宝马公司一看乐了：送你辆真的'
    },
    {
        Uid:125,
        Pid:25,
        imgSrc:'actPic5',
        title: '机会来了！最便宜的兰博基尼，价格一出引起全场骚动'
    },
]
class ActivityShow extends Component {
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

        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return ( 
             <div style={{ margin:'10px 10px',height:'100%',width:'100%'}}>
                <Layout style={{height:'100%',width:'100%'}}>
                    <Content>
                        <Carousel 
                            // effect="fade" 
                        >
                            <div style={{padding:'20px',width:'400px'
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
                        </Carousel>
                    </Content>
                    <Header style={{height: '30px'}}>
                    </Header>
                </Layout>
            </div>
         );
    }
}
 
export default ActivityShow;