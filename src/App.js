import React, { useState } from 'react';
import { Button, message, Layout, Row, Col, Input, Card, Select } from 'antd'

import SDK from 'apis/SDK';
import IconexConnect from 'apis/IconexConnect';
import CONST from './constants';
import member1 from 'assets/images/1.png'
import member2 from 'assets/images/2.png'
import member3 from 'assets/images/3.png'
import member4 from 'assets/images/4.png'
import member5 from 'assets/images/5.png'
import member6 from 'assets/images/6.png'
import member7 from 'assets/images/7.png'
import member8 from 'assets/images/8.png'
import member9 from 'assets/images/9.png'
import member10 from 'assets/images/10.png'
import member11 from 'assets/images/11.png'
import './App.css';
import {
  IconConverter
} from 'icon-sdk-js'


//define
const { Header, Content } = Layout;
const { Meta } = Card;
const { Option } = Select;


function App() {
  const [mode, setMode] = useState(CONST.MODE['LOG_OUT'])
  const [myAddress, setMyAddress] = useState('')
  const [curBlockHeight, setCurClockHeight] = useState(0)
  const [vote1, setVote1] = useState(0)
  const [vote2, setVote2] = useState(0)
  const [vote3, setVote3] = useState(0)
  const [vote4, setVote4] = useState(0)
  const [vote5, setVote5] = useState(0)
  const [vote6, setVote6] = useState(0)
  const [vote7, setVote7] = useState(0)
  const [vote8, setVote8] = useState(0)
  const [vote9, setVote9] = useState(0)
  const [vote10, setVote10] = useState(0)
  const [vote11, setVote11] = useState(0)


  const [selectedMember, setSelectedMember] = useState(1)

  async function getAddress() { // 로그인
    const { iconService, callBuild } = SDK
    const myAddress = await IconexConnect.getAddress()
    console.log(myAddress)
    for (var i = 1; i < 12; i++) {
      
      const Data = await iconService.call(
        callBuild ({
          from: myAddress,
          methodName: 'getVote',
          params: {
            num: IconConverter.toHex(Number(i)),
          },
          to: window.CONTRACT_ADDRESS,
        })
      ).execute()
      const myData = IconConverter.toNumber(Data)

      if(i==1){
        setVote1(myData)
      }else if(i===2){
        setVote2(myData)
      }else if(i===3){
        setVote3(myData)
      }else if(i===4){
        setVote4(myData)
      }else if(i===5){
        setVote5(myData)
      }else if(i===6){
        setVote6(myData)
      }else if(i===7){
        setVote7(myData)
      }else if(i===8){
        setVote8(myData)
      }else if(i===9){
        setVote9(myData)
      }else if(i===10){
        setVote10(myData)
      }else if(i===11){
        setVote11(myData)
      }

    }



    // setMode(!!myData ? CONST.MODE['BDAY_SET'] : CONST.MODE['LOG_IN'])
    setMode(CONST.MODE['LOG_IN'])
    // console.log('a')
    setMyAddress(myAddress)
    // setMyData(!!myData ? { label: myData.slice(0, 2), BDay: myData.slice(2) } : {})

    // message.success(`Hello, ${myAddress}.`)
  }


  async function voteMember() {
    console.log(selectedMember, myAddress)
    const txObj = SDK.sendTxBuild({
      from: myAddress,
      to: window.CONTRACT_ADDRESS,
      methodName: 'tryVote',
      params: {
        num: IconConverter.toHex(Number(selectedMember))
      },
    })

    const tx = await IconexConnect.sendTransaction(txObj)
    console.log(tx)
    if (tx == null){
      alert("다시 시도해주세요")
    }else{
      alert("투표에 성공하였습니다")
      const i = selectedMember
      if(i==1){
        setVote1(vote1+1)
      }else if(i===2){
        setVote2(vote2+1)
      }else if(i===3){
        setVote3(vote3+1)
      }else if(i===4){
        setVote4(vote4+1)
      }else if(i===5){
        setVote5(vote5+1)
      }else if(i===6){
        setVote6(vote6+1)
      }else if(i===7){
        setVote7(vote7+1)
      }else if(i===8){
        setVote8(vote8+1)
      }else if(i===9){
        setVote9(vote9+1)
      }else if(i===10){
        setVote10(vote10+1)
      }else if(i===11){
        setVote11(vote11+1)
      }
    }
  }
  return (
    <Layout>
      <Header>
        <Button size="large" onClick={getAddress} type="primary">ICONex 연동하기</Button>
      </Header>
      <Content>
        <Row type="flex" justify="center" align="middle" className={`page-wrap`}>
          <Col style={{ width: '80%', maxWidth: 700 }}>
            <h1 className="do-hyeon">당신의 소녀에게 <br /> 지금 바로 투표하세요!</h1>
            <Row gutter={10} style={{ marginBottom: 15 }}>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member1})` }}></div>
                <div className="name">주걸경</div>
                <div className='count'>{vote1}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member2})` }}></div>
                <div className="name">유연정</div>
                <div className='count'>{vote2}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member3})` }}></div>
                <div className="name">정채연</div>
                <div className='count'>{vote3}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member4})` }}></div>
                <div className="name">김도연</div>
                <div className='count'>{vote4}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member5})` }}></div>
                <div className="name">전소미</div>
                <div className='count'>{vote5}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member6})` }}></div>
                <div className="name">김세정</div>
                <div className='count'>{vote6}표</div>
              </Col>
            </Row>
            <Row gutter={10} className="profile-wrap" type="flex" justify="center">
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member7})` }}></div>
                <div className="name">강미나</div>
                <div className='count'>{vote7}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member8})` }}></div>
                <div className="name">최유정</div>
                <div className='count'>{vote8}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member9})` }}></div>
                <div className="name">임나영</div>
                <div className='count'>{vote9}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member10})` }}></div>
                <div className="name">김청하</div>
                <div className='count'>{vote10}표</div>
              </Col>
              <Col span={4} className="profile-wrap">
                <div className="profile-img" style={{ backgroundImage: `url(${member11})` }}></div>
                <div className="name">김소혜</div>
                <div className='count'>{vote11}표</div>
              </Col>
            </Row>

            <div className="form-wrap">
              <Select size="large" style={{ width: 250 }} value={selectedMember} onChange={(value) => setSelectedMember(value)}>
                <Option value={1}>주걸경</Option>
                <Option value={2}>유연정</Option>
                <Option value={3}>정채연</Option>
                <Option value={4}>김도연</Option>
                <Option value={5}>전소미</Option>
                <Option value={6}>김세정</Option>
                <Option value={7}>강미나</Option>
                <Option value={8}>최유정</Option>
                <Option value={9}>임나영</Option>
                <Option value={10}>김청하</Option>
                <Option value={11}>김소혜</Option>
              </Select>
              <Button type="primary" size="large" onClick={voteMember}>투표하기</Button>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
